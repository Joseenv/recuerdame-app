import { createRouter ,createWebHistory } from "vue-router"; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homeView',
            component: () => import('../modules/autentication/views/HomeView.vue')
        },
        {
            path: '/signup',
            name: 'signUpView',
            component: () => import('../modules/autentication/views/SignUpView.vue')
        },
        {
            path: '/login',
            name: 'loginView',
            component: () => import('../modules/autentication/views/LoginView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFoundView',
            component: () => import('../modules/shared/views/PageNotFound.vue')
        }
    ]
})

export default router;