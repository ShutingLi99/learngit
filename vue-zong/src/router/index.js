import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from "../components/Register";
import Activate from "../components/Activate";
import Loginbacks from "../components/Loginbacks";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/loginbacks',
      name: 'Loginbacks',
      component: Loginbacks
    }
  ]
})
