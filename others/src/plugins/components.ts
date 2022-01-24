// 全局组件注册
import { App } from 'vue'
// import MangaImg from '../components//manga-img.vue'
export default {
    install: (app: App, options: any[]) => {
        console.log('==========执行全局组件注册插件',);
        // app.component('manga-img', MangaImg)
    }
}