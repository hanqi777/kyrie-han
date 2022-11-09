import { createStore } from 'vuex'
import users from '@/store/modules/users'
import admins from '@/store/modules/admins'
import attendances from '@/store/modules/attendances'

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
  }
})
