import { createApp } from 'vue'
import App from './App.vue'
// import './utils/setRem'
import './style/global.scss'
import router from './router/index'
import componentsPlugin from './plugins/components'
import EventOutside from './directives/event-outside'

const app = createApp(App)
app.use(router)
app.use(componentsPlugin)
app.directive('event-outside',
    EventOutside
)
app.mount('#app')
