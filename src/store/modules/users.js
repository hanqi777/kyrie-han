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
    },
    deleteUser(state,id){
        return http.delete('/users/' + id)

    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}