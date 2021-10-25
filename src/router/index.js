import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'

Vue.use(VueRouter) // view router 설정

const routes = [
    {
        path : '/',
        component : Dashboard
    },
    {
        path : '/grid',
        component : GridSystem
    }
]

const router = new VueRouter({
    mode : 'history', 
    routes : routes

})

export default router;