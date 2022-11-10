import http from '@/utils/http'


const state = {
    usersInfoAll:''


};
const getters = {};

const mutations = {
    setUsers(state,payload){
        state.usersInfoAll = payload
        console.log("state.usersInfoAll",state.usersInfoAll);
    }
};
const actions = {
    getUsersInfo(){
        return http.get('/users')
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}