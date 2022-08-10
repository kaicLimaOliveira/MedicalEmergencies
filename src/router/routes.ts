import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: () => import('../components/Index.vue'),
        children: [
            {
                path: 'profissionais/:type',
                name: 'professionals',
                props: true,
                components: {
                    professionals: () => import('../components/ListItems.vue'),
                },
                meta: {
                    title: 'Emergências Médicas - Profissionais'
                }
            },
            {
                path: 'equipamentos/:type',
                name: 'equipment',
                props: true,
                components: {
                    equipment: () => import('../components/ListItems.vue'),
                },
                meta: {
                    title: 'Emergências Médicas - Equipamentos'
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router