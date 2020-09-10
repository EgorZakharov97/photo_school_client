import axios from 'axios'
import {URL_GET_USER_INFO, URL_LOGIN, URL_REGISTER, URL_UPDATE_USER_INFO} from './constants'

class Auth {
    constructor(){
        if (Auth.instance) return Auth.instance;

        Auth.instance = this;
        this.user = getUserFromLS();

        return this
    }

    updateUser(data){
        return axios.post(URL_UPDATE_USER_INFO, data)
    }

    login(data){
        return axios.post(URL_LOGIN, data)
    }

    register(data) {
        return axios.post(URL_REGISTER, data)
    }

    refreshUser() {
        return axios.get(URL_GET_USER_INFO)
    }

    isAuthenticated(){
        return this.user !== null
    }

    getUser(){
        return this.user
    }

    saveUser(user){
        console.log('Saving user...')
        console.log(user)
        this.user = user;
        axios.defaults.headers.common['Authentication'] = 'Bearer ' + user.token
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    logout(){
        this.user = null;
        axios.defaults.headers.common['Authentication'] = ''
        window.localStorage.setItem('user', '')
    }
}

export default new Auth()

function responseHandler(res) {
    if(res.data.success){
        return res.data.body
    } else {
        throw new Error(res.data.message)
    }
}

function getUserFromLS(){
    return JSON.parse(window.localStorage.getItem('user'))
}