import axios from 'axios'
import {URL_GET_USER_INFO, URL_LOGIN, URL_REGISTER, URL_UPDATE_USER_INFO} from './constants'

class Auth {
    constructor(){
        if (Auth.instance) return Auth.instance;

        Auth.instance = this;
        this.user = getUserFromLS();
        if(this.user !== null && this.user !== {}) {
            this.API = axios.create({
                headers: {
                    'Authorization': 'Bearer ' + this.user.token
                }
            })
        } else {
            this.API = axios.create()
        }

        return this
    }

    getAPI(){
        return this.API
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

    isAdmin() {
        return this.user !== null && this.user.isAdmin
    }

    getUser(){
        return this.user
    }

    saveUser(user){
        this.user = user;
        this.API = axios.create({
            headers: {
                Authentication: 'Bearer ' + (user.token || "")
            }
        });
        window.localStorage.setItem('user', JSON.stringify(user))
    }

    logout(){
        this.user = null;
        this.API = axios.create();
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
    try{
        return JSON.parse(window.localStorage.getItem('user'))
    }
    catch(e) {
        return null
    }
}