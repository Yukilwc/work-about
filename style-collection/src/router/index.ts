import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
    {
        path: '/swiper-demo',
        component: () => import('../pages/swiper-demo/index.vue')
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router