import { VNode, DirectiveBinding } from "vue";

const EventOutside = {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的 attribute 或事件监听器被应用之前调用
    created() { },
    // 在绑定元素的父组件挂载之前调用
    beforeMount() { },
    // 绑定元素的父组件被挂载时调用
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        console.log('==========binding', binding)
        console.log('==========vnode', vnode)
        Reflect.set(el, 'clickOutsideEvent',
            (event: MouseEvent) => {
                // here I check that click was outside the el and his children
                if (!(el == event.target || el.contains(event.target as Node))) {
                    // and if it did, call method provided in attribute value
                    // vnode.context[binding.value](event);
                    binding.value(event)
                }
            }
        )
        // console.log('==========el添加', el, el.clickOutsideEvent)

        document.body.addEventListener('click', Reflect.get(el, 'clickOutsideEvent'))
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
        document.body.removeEventListener('click', Reflect.get(el, 'clickOutsideEvent'))
        // console.log('==========el移除', el, el.clickOutsideEvent)
    }
}
export default EventOutside