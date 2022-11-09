import http from '@/utils/http'

const state = {};
const getters = {};
const mutations = {};
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