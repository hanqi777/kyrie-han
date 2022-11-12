import http from '@/utils/http'

const state = {
    token:'',
    adminName:''
};
const getters = {};
const mutations = {
    setToken(state,payload){
        state.token = payload
    },
    setAdminName(state,payload){
        state.adminName = payload
        console.log('state.adminName',state.adminName);
    },
    clearToken(state){
        state.token = '',
        state.adminName =''
        console.log('clleartoken ==============',state.token);
    }
};
const actions = {
    getAdmin(state,adminId){
        return http.get(`/admins?adminName=${adminId}`)
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}