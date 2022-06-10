import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '@/views/Index'
import My from '@/views/My'


const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: Index
}, {
    path: '/my',
    component: My
        // meta: {
        //     auth: true
        // }
}]

const router = new VueRouter({
        routes
    })
    // router.beforeEach((to, from, next) => {
    //     console.log(to)
    //     if (to.matched.some(item => item.meta.auth)) {
    //         // if (to.meta.auth) {
    //         if (localStorage.getItem('token')) {
    //             next()
    //         } else {
    //             next({
    //                 path: '/login',
    //                 query: {
    //                     redirectUrl: to.fullPath
    //                 }
    //             })
    //         }
    //     } else {
    //         next()
    //     }
    // })

export default router