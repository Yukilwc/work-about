import { VNode, DirectiveBinding } from "vue";

const clickoutsideContext = '@@clickoutsideContext';
const EventOutside = {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的 attribute 或事件监听器被应用之前调用
    created() { },
    // 在绑定元素的父组件挂载之前调用
    beforeMount() { },
    // 绑定元素的父组件被挂载时调用
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    // 在包含组件的 VNode 更新之前调用
    beforeUpdate() { },
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() {
    },
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() { },
    // 卸载绑定元素的父组件时调用
    unmounted() {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    }
}
export default EventOutside