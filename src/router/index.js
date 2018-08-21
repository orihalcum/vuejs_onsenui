import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWordSearch from '@/components/HelloWordSearch'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search/:parameter?',
      name: 'HelloWordSearch',
      component: HelloWordSearch
    }
  ]
})

// const routes = [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld
//   }
// ]  

// const router = new Router({routes, mode:'history'})
