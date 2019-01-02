import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/admin/Admin.vue'),
      children: [
        {
          path: '/machines',
          component: () => import(/* webpackChunkName: "about" */ './views/admin/MachinesList.vue'),
        },
        {
          path: '/machines/new',
          component: () => import(/* webpackChunkName: "about" */ './views/admin/MachineAdd.vue'),
        },
        {
          path: '/machines/:id',
          component: () => import(/* webpackChunkName: "about" */ './views/admin/Machine.vue'),
        }
      ]
    }
  ]
})
