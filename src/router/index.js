import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'
import Password from '../components/Password.vue'
import Signup from  '../components/Signup.vue'
import forgotPassword from '../components/forgotPassword.vue'
import forgotEmail from '../components/forgotEmail.vue'
import Accounts from '../components/Accounts.vue'
import chooseAnotherAccount from '../components/chooseAnotherAccount.vue'
import mainPage from '../components/mainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Signin',
      component:Signin
    },
    {
      path: '/Password/:id',
      name: 'Password',
      component:Password
    },
    {
      path: '/Signup',
      name: 'Signup',
      component:Signup
    },
    {
      path: '/forgotPassword/:id',
      name: 'forgotPassword',
      component:forgotPassword
    },
    {
      path: '/forgotEmail',
      name: 'forgotEmail',
      component:forgotEmail
    },
    {
      path: '/Accounts',
      name: 'Accounts',
      component:Accounts
    },
    {
      path: '/chooseAnotherAccount',
      name: 'chooseAnotherAccount',
      component:chooseAnotherAccount
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component:mainPage
    }
  ]
})

export default router
