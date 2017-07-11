import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import goods from '../components/goods/goods.vue'
import gad from '../components/gad/gad.vue'
import shop from '../components/shop/shop.vue'
import center from '../components/center/center.vue'
import homepage from '../components/homepage/homepage.vue'
import news from '../components/new/new.vue'
import homework from '../components/homework/homework.vue'
import setup from '../components/setup/setup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:home,
      children:[
        {
          path:'/',
          component:homepage
        }
      ]
    },
    {
      path:'/home',
      component:home,
      children:[
        {
          path:'/',
          component:homepage
        },
        {
          path:'homepage',
          component:homepage
        },
        {
          path:'news',
          component:news
        },
        {
          path:'homework',
          component:homework
        }
      ]
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/gad',
      component:gad
    },
    {
      path:'/shop',
      component:shop
    },
    {
      path:'/center',
      component:center
    },
    {
      path:'/setup',
      component:setup
    }
  ]
})
