import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import User from '../components/User.vue'


const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    props:true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
