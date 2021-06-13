import { createApp } from 'vue'
import App from './App.vue'
// import './utils/setRem'
import './style/global.scss'
import router from './router/index'
import componentsPlugin from './plugins/components'
import EventOutside from './directives/event-outside'
import ClickShadow from './directives/click-shadow'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(componentsPlugin)
app.directive('event-outside',
    EventOutside
)
app.directive('click-shadow',
    ClickShadow
)
app.mount('#app')
