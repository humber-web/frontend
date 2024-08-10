import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/DashboardView.vue'
import Menu from '../views/MenuView.vue'
import Orders from '../views/OrderView.vue'
import Products from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/pedidos',
        name: 'pedidos',
        component: Orders
      },
      {
        path: '/productos',
        name: 'productos',
        component: Products
      },
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
