import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/backup',
            component: () => import('../views/Backup.vue')
        },
        {
            path: '/dlt',
            component: () => import('../views/DTL.vue')
        },
        {
            path: '/ocr-qa',
            component: () => import('../views/OcrQA.vue')
        },
    ],
})

export default router