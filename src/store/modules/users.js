import http from '@/utils/http'


const state = {
    username:'',
    staffNumber:'',
    age:'',
    department:'',
    address:'',
    mobile:'',
    email:''


};
const getters = {};
const mutations = {};
const actions = {
    usersInfo(){
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