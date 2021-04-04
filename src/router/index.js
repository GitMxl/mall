import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Category = () => import('../views/Category')
const Cart = () => import('../views/Cart')
const Profile = () => import('../views/Profile')

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:'',
    redirect: "/home"
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
