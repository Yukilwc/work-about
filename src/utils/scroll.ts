import { getPageTop } from './tools'
// 滚动相关工具

// 兼容处理requestAnimationFrame

// 滚动到指定DOM
interface IFrameScrollToDomOptions {
    selector: string,
    animate?: 'linear' | 'ease'
    step?: number, // 仅当linear生效
    rate?: number // 仅当ease生效
    offset?: number // 偏移值 正数，则对scrolltop进行增加，负数则减少  一般使用负数 
}
const frameScrollToDom = (options: IFrameScrollToDomOptions) => {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            setTimeout(fn, 17);
            return 1
        };
    }
    let targetNode = document.querySelector(options.selector)
    if (!targetNode) return
    let targetNodeTop = getPageTop(targetNode)
    targetNodeTop += (options.offset || 0)
    console.log('==========目标距离顶部的距离:', targetNodeTop)
    if (options.animate === 'linear' || options.animate === undefined) {
        // 走线性
        let step = options.step || 2
        const stepTo = () => {
            let currentTop = document.documentElement.scrollTop
            if (Math.abs(currentTop - targetNodeTop) < step) {
                console.log('==========当前距离目标间距已经小于step',)
                document.documentElement.scrollTop = targetNodeTop
                return
            }
            // 未到达终点，则累加
            if (targetNodeTop - currentTop > 0) {
                document.documentElement.scrollTop += step
            }
            else {
                document.documentElement.scrollTop -= step

            }
            window.requestAnimationFrame(stepTo)

        }
        console.log('==========开始线性动画滚动',)
        stepTo()
    }
    else {
        // 走缓动动画
        let rate = options.rate || 2
        console.log('==========开始缓动动画滚动',)
    }

}

export {
    frameScrollToDom
}