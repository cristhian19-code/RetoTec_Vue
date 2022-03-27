import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/:id',
        name: 'Film',
        props: (route)=>{
            return {
                id: route.params.id
            }
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Film.vue'),
    },
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route