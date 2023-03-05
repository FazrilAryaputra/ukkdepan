import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children : [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
       
        component: function () {
          return import('../views/AboutView.vue')
        }
      },
      {
        path: '/kamar',
        name: 'kamar',
       
        component: function () {
          return import('../views/KamarView.vue')
        }
      },
      {
        path: '/tipekamar',
        name: 'tipekamar',
       
        component: function () {
          return import('../views/TipekamarView.vue')
        }
      },
      {
        path: '/user',
        name: 'user',
       
        component: function () {
          return import('../views/UserView.vue')
        }
      },
      {
        path: '/tambah_tipe_kamar',
        name: 'tambahtipekamar',
       
        component: function () {
          return import('../views/TambahTipeKamarView.vue')
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
