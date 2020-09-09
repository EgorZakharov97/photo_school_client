import React, {useHistory} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {URL_REGISTER, URL_LOGIN} from '../constants'
import AuthenticationView from '../views/AuthenticationView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import NewPasswordView from '../views/NewPasswordView'
import ForgotPasswordView from '../views/ForgotPasswordView'
import UpdateUserInfoView from '../views/UpdateUserInfoView'
import UserConfirmationView from '../views/UserConfirmationView'


export default class AuthController extends React.Component {

    state = {
        authentication: {},
        message: {}
    }

    render() {
        if (this.state.showRegister) return <register>
            <RegisterView>
                <username value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <email value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <password_2 value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <phoneNumber value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <experience value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <sex value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={e => this.registerNewUser(e)} />
                <register-google onClock={e => this.registerGoogle()} />
                <link-login onClick={this.toLogin.bind(this)} />
                <close/>
            </RegisterView>
        </register>

        if(this.props.showLogin) return <login>
            <LoginView>
                <email value={this.state.authentication.email || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.password || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={this.login.bind(this)} />
                <link-register onClick={this.toRegister.bind(this)} />
                <google/>
                <close/>
            </LoginView>
        </login>
    }

    toRegister() {
        this.props.setShowLogin(false)
        this.setState(state => {
            state.showRegister = true
            return state
        })
    }

    toLogin() {
        this.setState(state => {
            state.showRegister = false
            return state
        })
    }

    registerGoogle() {

    }

    login() {
        const data = this.state.authentication
        axios.post(URL_LOGIN, data)
        .then(res => {
            this.responseHandler(res)
            this.props.setUser(res.data.body)
            console.log(res.data)
            console.log(this.state)
        })
        .catch(this.errorHandler)
    }

    registerNewUser() {
        const data = this.state.authentication
        axios.post(URL_REGISTER, data)
        .then(res => {
            this.responseHandler(res)
            this.props.setUser(res.data.body)
        })
        .catch(this.errorHandler)
    }

    errorHandler(e){
        console.log(e)
    }

    responseHandler(res){
        const data = res.data;
        if (data.success) return this.setMessage(data.message)
        return this.setMessage(data.message, false)
    }

    setMessage(message, positive=true){
        this.setState(state => {
            return state.message = {
                positive: positive,
                body: message || "Unknown event occured"
            }
        })
    }

    onClose(e) {
        setTimeout(() => {
            this.props.setShowLogin(false)
            this.setState({
                showRegister: false,
            })
        }, 600)
    }

    onChangeHandler(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState(state => {
            return state.authentication[key] = value;
        })
        console.log(this.state.authentication)
    }
}