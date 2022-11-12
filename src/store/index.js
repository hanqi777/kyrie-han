import { createStore } from 'vuex'
import users from '@/store/modules/users'
import admins from '@/store/modules/admins'
import attendances from '@/store/modules/attendances'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer:(state)=>{
    return{
      admins:{
        token:state.admins.token,
        adminName:state.admins.adminName
      }
    }
  }
})


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    admins,
    attendances
  },
  plugins: [vuexLocal.plugin]
})
