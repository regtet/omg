import {
    createWebHashHistory,
    createRouter
} from "vue-router"
import Index from '../view/index.vue'


const routes = [
    {
        path: '/',
        component: Index
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


export default router
