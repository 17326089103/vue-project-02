import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',

    component: HomeView,
    redirect:'/sys-admin/index',
    children:[
      {
        path: '/sys-admin/index',
        component: () => import('../views/sys-admin/IndexView.vue')
      },
      {
        path: '/sys-admin/temp/album/add-new',
        component: () => import('../views/sys-admin/temp/AlbumAddNewView.vue')
      },
      {
        path: '/sys-admin/temp/album/list',
        component: () => import('../views/sys-admin/temp/AlbumListView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
