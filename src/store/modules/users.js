import http from '@/utils/http'


const state = {
    usersInfoAll:''
};
const getters = {};

const mutations = {
    setUsers(state,payload){
        state.usersInfoAll = payload
        console.log("state.usersInfoAll",state.usersInfoAll);
        state
    }
};
const actions = {
    getUsersInfo(){
        return http.get('/users')
    },
    deleteUser(state,id){
        return http.delete('/users/' + id)
    },
    updateUserInfo(state,config){
    return http.patch ('users/'+ config.id,config.ruleForm,{'Content-Type': 'application/json'})
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}