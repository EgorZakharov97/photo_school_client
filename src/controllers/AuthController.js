import React, {useHistory} from 'react'
import axios from 'axios'
import auth from '../Auth'
import {URL_AUTH_GOOGLE} from '../constants'

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
        message: {},
        showRegister: false,
        showLogin: false
    }

    static getDerivedStateFromProps(props, state) {
        if(props.location.state){
            state.showLogin =  props.location.state.shouldAuthenticate
            window.history.replaceState(null, '')
        } 
        return state
    }

    render() {
        if (this.state.showRegister) return <RegisterView key="regView">
                <username value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <email value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <password_2 value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <phoneNumber value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <experience value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <sex value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={e => this.registerNewUser(e)} />
                <register-google onClick={e => this.toGoogleAuth()} />
                <link-login onClick={this.toLogin.bind(this)} />
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                <close onClick={ e => this.close(e)} />
            </RegisterView>
        

        if(this.state.showLogin) return <login key="login">
            <LoginView key="logView" >
                <email value={this.state.authentication.email || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.password || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={e => this.onLogin(e)} />
                <link-register onClick={this.toRegister.bind(this)} />
                <login-google onClick={this.toGoogleAuth.bind(this)} />
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                <close onClick={ e => this.close(e)} />
            </LoginView>
        </login>

        if(auth.isAuthenticated() && !auth.getUser().verified) return <user-confirmation>
            <UserConfirmationView>
                <link-login onClick/>
            </UserConfirmationView>
        </user-confirmation>

        return <></>
    }

    logout(){
        this.close()
        auth.logout()
    }

    onLogin(e){
        e.preventDefault()
        auth.login(this.state.authentication)
        .then(res => {
            auth.saveUser(res.data.body)
            this.handleSuccess(res)
        })
        .catch(e => this.errorHandler(e))
    }

    onRegister(e) {
        e.preventDefault()
        auth.register(this.state.authentication)
        .then(res => {
            auth.saveUser(res.data.body)
            this.handleSuccess(res)
        })
        .catch(e => this.errorHandler(e))
    }

    toLogin() {
        this.close()
        this.props.setShowLogin(true)
    }

    toRegister() {
        this.close()
        this.setState({showRegister: true})
    }

    toGoogleAuth() {
        axios.get(URL_AUTH_GOOGLE)
        .then(res => {
            const data = res.data;
            if(data.success){
                return window.location.href = data.body.redirect
            } else {
                this.setMessage("Unfortunatelly, Google authentication does not work at the moment", false)
            }
        })
        .catch(e => {
            this.setMessage("Unfortunatelly, Google authentication does not work at the moment", false)
        })
    }

    setMessage(message, positive=true){
        this.setState(state => {
            return state.message = {
                positive: positive,
                body: message || "Unknown event occured"
            }
        })
    }

    close() {
        setTimeout(() => {
            this.setState({
                showRegister: false,
                showLogin: false
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

    handleSuccess(res){
        if(res.data.success) return this.close()
        this.setMessage(res.data.message, false)
    }

    errorHandler(e){
        this.setMessage("There was a problem on out server...\n Sorry", false)
        console.log(e)
    }
}