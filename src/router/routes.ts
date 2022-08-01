import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '../components/Index.vue'
import ListItems from '../components/ListItems.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: 'profissionais/:type',
                name: 'professionals',
                props: true,
                components: {
                    professionals: ListItems
                }
            },
            {
                path: 'equipamentos/:type',
                name: 'equipment',
                props: true,
                components: {
                    equipment: ListItems
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router