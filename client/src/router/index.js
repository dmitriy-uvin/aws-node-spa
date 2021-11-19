import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        component: import('../App'),
        path: '*',
        name: 'app'
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
