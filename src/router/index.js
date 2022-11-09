import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/home',
    component: () => import('@/views/Index.vue'),
    meta:{auth:true},
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/notification',
        name: 'notification',
        component: () => import('@/views/Notification.vue')
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('@/views/Attendance.vue')
      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('@/views/Staff.vue')
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: () => import('@/views/Transfer.vue')
      },
      {
        path: '/workflow',
        name: 'workflow',
        component: () => import('@/views/Workflow.vue')
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta:{auth:false},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to,from,next)=>{
  // if(to.meta.auth){
  //   next('/login')
  // }
  // else{
   
  // }
  store.dispatch('admins/getAdmin').then((res)=>{
    console.log(res.data[0]);
  })
  store.dispatch('users/usersInfo').then((res)=>{
    console.log(res.data[0]);
  })

  next()
})

export default router
