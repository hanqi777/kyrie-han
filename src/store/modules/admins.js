import http from '@/utils/http'

const state = {
    amdinsInfoAll:''
};
const getters = {};
const mutations = {
    setAdmins(state,payload){
        state.amdinsInfoAll = payload
    }
};
const actions = {
    getAdmin(){
        return http.get('/admins')
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}