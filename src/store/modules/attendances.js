import http from '@/utils/http'

const state = {
   monthsInfoAll:''
    
};
const getters = {};
const mutations = {
    setMonths(state,payload){
        state.monthsInfoAll = payload
    }
};
const actions = {
    getMonths(){
        return http.get('/months')
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}