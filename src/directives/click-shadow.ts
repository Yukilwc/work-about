import { VNode, DirectiveBinding } from "vue";

const ClickShadow = {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的 attribute 或事件监听器被应用之前调用
    created() { },
    // 在绑定元素的父组件挂载之前调用
    beforeMount() { },
    // 绑定元素的父组件被挂载时调用
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        console.log('==========binding', binding)
        console.log('==========vnode', vnode)
        Reflect.set(el, 'clickShadowEvent',
            (event: MouseEvent) => {
                console.log('==========触发鼠标松开操作',)
                const attrName = 'fa-click-animating-shadow'
                el.style['position'] = 'relative'
                el.removeAttribute(attrName);
                el.setAttribute(attrName, 'true');
                function aniEndFunc() {
                    console.log('==========动画结束',)
                    el.setAttribute(attrName, 'false');
                }
                el.addEventListener('animationend', aniEndFunc)

            }
        )
        // console.log('==========el添加', el, el.clickOutsideEvent)

        el.addEventListener('mouseup', Reflect.get(el, 'clickShadowEvent'))

    },
    // 在包含组件的 VNode 更新之前调用
    beforeUpdate() { },
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() {
    },
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() { },
    // 卸载绑定元素的父组件时调用
    unmounted(el: HTMLElement) {
        el.removeEventListener('click', Reflect.get(el, 'clickShadowEvent'))
    }
}
export default ClickShadow