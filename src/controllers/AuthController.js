import React, {useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
        showLogin: false,
        showRegister: true,
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
                <submit/>
                <google/>
                <submit/>
                <close/>
            </RegisterView>
        </register>

        if(this.state.showLogin) return <login>
            <LoginView>
                <email/>
                <password/>
                <submit/>
                <google/>
                <close/>
            </LoginView>
        </login>
    }

    login() {
        const data = this.state.authentication
        axios.post(URL_LOGIN, data)
        .then(res => {
            this.responseHandler(res)
            this.props.setUser(res.data.body)
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
            this.setState({
                showLogin: false,
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
    }
}