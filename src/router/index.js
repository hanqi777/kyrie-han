import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import _ from 'lodash'

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
        component: () => import('@/views/Attendance.vue'),
        beforeEnter:()=>{
          store.dispatch('users/getUsersInfo').then((res)=>{
            console.log("getUsersInfo==============",res.data);
            store.commit('users/setUsers',res.data)
          });
        store.dispatch('attendances/getMonths').then((res)=>{
          store.commit('attendances/setMonths',res.data)
          console.log('attendances====================',res.data)
        })

      }

      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('@/views/Staff.vue'),
        beforeEnter:(to,from)=>{
          console.log(to);
          console.log(from);
          store.dispatch('users/getUsersInfo').then((res)=>{
            console.log("getUsersInfo==============",res.data);
            store.commit('users/setUsers',res.data)
          })
      }
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
  console.log('to===============',to);

  if(to.matched[0].meta.auth){
   
    let adminName = store.state.admins.adminName
    console.log("nnnnnnnnn",adminName);


    if(_.isEmpty(adminName)){
      next('/login')
      store.commit('admins/clearToken')
    }
    else{
      store.dispatch('admins/getAdmin',adminName).then((res)=>{
        let localToken = JSON.parse(window.localStorage.getItem('vuex')).admins.token
        console.log("localstorage vuex ============",localToken);
        console.log("res.data[0].token",res.data[0].token);
        if(localToken == res.data[0].token){
          next()
        }
        else{
          next('/login')
          store.commit('admins/clearToken')
        }
      
        })
    }

  }
  else{
    next()
  }




  



  
})

export default router
