import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('views/home/home');
const category = () => import('views/category/category');
const cart = () => import('views/cart/cart');
const profile = () => import('views/profile/profile');



const routes = [{
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    component: home,
    name: 'home',
    meta: {}
  },
  {
    path: '/category',
    component: category,
    name: 'category',
    meta: {}
  },
  {
    path: '/cart',
    component: cart,
    name: 'cart',
    meta: {}
  },
  {
    path: '/profile',
    component: profile,
    name: 'profile',
    meta: {}
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]
let router = new Router({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  next();
});

router.beforeResolve((to, from, next) => {
  next();
})

router.afterEach((to, from) => {})

export default router

//注意点,这时候还需要再main.js中引入和再实例对象中挂载~切记！
