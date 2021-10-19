import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/view/testOneComponent/TestOneComponent.vue'),
        children: [
            { path: 'one', component: () => import('@/view/testOneComponent/components/TestOne.vue') },
            { path: 'two', component: () => import('@/view/testOneComponent/components/TestTwo.vue') },
        ]
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
