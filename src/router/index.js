import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../pages/AuthPage.vue';
import FormsPage from '../pages/FormsPage.vue';
import NewFormPage from '../pages/NewFormPage.vue';
import FormFields from '../components/FormFields.vue';

const routes = [
    { path: '/', redirect: '/auth' },
    { path: '/auth', component: AuthPage },
    {
        path: '/forms',
        component: FormsPage,
    },
    {
        path: '/new-form',
        component: NewFormPage,
        props: true,
        children: [{ path: 'fields', component: FormFields }],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
