import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path:'/cart',
    name:'cart',
    component:CartView
  },
  {
    path:'/product/:productId',
    name:'product',
    component:ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
