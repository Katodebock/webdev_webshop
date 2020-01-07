import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import Delivery from '../views/Delivery.vue'
import PaymentTerms from '../views/PaymentTerms.vue'
import OrderConfirmation from '../views/OrderConfirmation.vue'
import Cart from '../views/Cart.vue'
import Nike from '../views/Filters/Nike.vue'
import AirJordan from '../views/Filters/AirJordan.vue'
import PriceAsc from '../views/Filters/PriceAsc.vue'
import PriceDesc from '../views/Filters/PriceDesc.vue'
import InStock from '../views/Filters/InStock.vue'
import Adidas from '../views/Filters/Adidas.vue'
import Register from '../views/Register.vue'
import ProductDetail from '../views/ProductDetail.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Admin from '../views/Admin.vue'
import EditShoe from '../views/EditShoe.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
   routes : [
  {
    path:'/',
    redirect:`/${i18n.locale}`
  },
  {
    path:'/:lang',
    component:{
      render(c){return c('router-view')}
  },
  children:[
      {
        path: '/',
        name: 'home',
        component: Home,

      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: FAQ
      },
      {
        path: 'admin',
        name: 'Admin',
        component: Admin
      },
      {
        path: 'faq/delivery',
        name: 'Delivery',
        component: Delivery
      },
      {
        path: 'faq/payments',
        name: 'payments',
        component: PaymentTerms
      },
      {
        path: 'succes',
        name: 'OrderConfirmation',
        component: OrderConfirmation
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: 'nike',
        name: 'Nike',
        component: Nike
      },
      {
        path: 'airjordan',
        name: 'Air Jordan',
        component: AirJordan
      },
      {
        path: 'priceasc',
        name: 'Price Asc',
        component: PriceAsc
      },
      {
        path: 'pricedesc',
        name: 'Price Desc',
        component: PriceDesc
      },
      {
        path: 'stock',
        name: 'stock',
        component: InStock
      },
      {
        path: 'adidas',
        name: 'Adidas',
        component: Adidas
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path:'shoe/:id',
        name:'shoe detail',
        component: ProductDetail
      },
      {
        path:'admin/shoe/:id',
        name:'edit Shoe',
        component: EditShoe
      },
      {
        path:'*',
        name:'Page not found',
        component: PageNotFound
      },
    ]
  }
]
})

export default router
