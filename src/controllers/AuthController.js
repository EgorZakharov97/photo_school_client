import React, {useHistory} from 'react'
import auth from '../Auth'
import {URL_AUTH_GOOGLE, URL_PASSWORD_RESET, URL_POST_PASSWORD, URL_POST_USER_INFO, URL_CONFIRM_USER, GOOGLE_CLIENT} from '../constants'
import GoogleLogin from 'react-google-login'

import AuthenticationView from '../views/AuthenticationView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import NewPasswordView from '../views/NewPasswordView'
import ForgotPasswordView from '../views/ForgotPasswordView'
import UpdateUserInfoView from '../views/UpdateUserInfoView'
import UserConfirmationView from '../views/UserConfirmationView'

const axios = auth.getAPI()


export default class AuthController extends React.Component {

    state = {
        authentication: {},
        message: {},
        showRegister: false,
        showLogin: false,
        showReset: false,
        showUpdateUser: false,
        showNewPassword: false,
        showUpdate: false,
        showConfirmation: false,
    }

    static getDerivedStateFromProps(props, state) {
        if(props.location.state && props.location.state.shouldAuthenticate){
            state.showLogin =  props.location.state.shouldAuthenticate
            window.history.replaceState(null, '')
            delete props.location.state.shouldAuthenticate
        } else if(props.location.state && props.location.state.secret) {
            state.authentication.secret = props.location.state.secret
            state.showNewPassword = true
            window.history.replaceState(null, '')
            delete props.location.state.secret
        } else if(props.location.state && props.location.state.link){
            state.showLogin = true
            axios.get(URL_CONFIRM_USER + props.location.state.link)
            .then(res => {
                if(res.data.success){
                    state.message = {
                        positive: true,
                        body: res.data.message
                    }
                } else {
                    state.message = {
                        positive: false,
                        body: res.data.message
                    }
                }
            })
            .catch(e => {
                console.log(e)
                state.message = {
                    positive: false,
                    body: "There was a problem to confirm your email. Try another email address"
                }
            })
            delete props.location.state.secret
        } else if(!!auth.getUser() && !auth.getUser().verified) {
            state.showUpdate = true
        }
        return state
    }

    render() {
        if (this.state.showRegister) return <RegisterView key="regView">
                <username value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
                <email value={this.state.authentication.email || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.password || ""} onChange={e => this.onChangeHandler(e)} />
                <password_2 value={this.state.authentication.password_2 || ""} onChange={e => this.onChangeHandler(e)} />
                <phoneNumber value={this.state.authentication.phoneNumber || ""} onChange={e => this.onChangeHandler(e)} />
                <experience value={this.state.authentication.experience || ""} onChange={e => this.onChangeHandler(e)} />
                <sex value={this.state.authentication.sex || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={e => this.onRegister(e)} />
                <phoneNumber value={this.state.authentication.phoneNumber || ""} onChange={e => this.onChangeHandler(e)} />
                {/* <register-google onClick={e => this.toGoogleAuth()} /> */}
                <link-login onClick={this.toLogin.bind(this)} />
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                <close onClick={ e => this.close(e)} />
            </RegisterView>

        if(this.state.showNewPassword) return <NewPasswordView>
            <password value={this.state.authentication.password || ""} onChange={e => this.onChangeHandler(e)} />
            <password_2 value={this.state.authentication.password_2 || ""} onChange={e => this.onChangeHandler(e)} />
            <submit onClick={e => this.onNewPassword(e)} />
            <close onClick={e => this.close(e)} />
            <link-login onClick={this.toLogin.bind(this)} />
            {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
        </NewPasswordView>
        

        if(this.state.showLogin) return <login key="login">
            <LoginView key="logView" >
                <email value={this.state.authentication.email || (auth.getUser() && auth.getUser().email) || ""} onChange={e => this.onChangeHandler(e)} />
                <password value={this.state.authentication.password || ""} onChange={e => this.onChangeHandler(e)} />
                <submit onClick={e => this.onLogin(e)} />
                <link-register onClick={this.toRegister.bind(this)} />
                {/* <login-google><GoogleLogin 
                    clientId={GOOGLE_CLIENT}
                    onSuccess={this.responseGoogle.bind(this)}
                    onFailure={this.responseGoogle.bind(this)}
                    cookiePolicy={'single_host_origin'} 
                /></login-google> */}
                <forgot onClick={e => this.toResetPassword(e)} />
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                <close onClick={ e => this.close(e)} />
            </LoginView>
        </login>

        if(this.state.updateUser) {
            this.setState(state => {
                return state.authentication = auth.getUser()
            })
            return <UpdateUserInfoView>
            <email>{this.state.authentication.email}</email>
            <username value={this.state.authentication.username || ""} onChange={e => this.onChangeHandler(e)} />
            <phoneNumber value={this.state.authentication.phoneNumber || ""} onChange={e => this.onChangeHandler(e)} />
            <experience value={this.state.authentication.experience || ""} onChange={e => this.onChangeHandler(e)} />
            <sex value={this.state.authentication.sex || ""} onChange={e => this.onChangeHandler(e)} />
            {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            <close onClick={ e => this.close(e)} />
            <submit onClick={e => this.updateProfile(e)} />
        </UpdateUserInfoView>
        }

        if(this.state.showReset) return <ForgotPasswordView>
            <email value={this.state.authentication.email || ""} onChange={e => this.onChangeHandler(e)} />
            <submit onClick={e => this.onForgotPassword(e)} />
            <close onClick={e => this.close(e)} />
            <link-login onClick={this.toLogin.bind(this)} />
            {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
        </ForgotPasswordView>

        if(this.state.showConfirmation) return <UserConfirmationView>
            <link-login onClick={e => this.toLogin(e)} />
        </UserConfirmationView>

        return <></>
    }

    responseGoogle(res) {
        console.log(res)
    }

    updateProfile(e) {
        e.preventDefault()
        axios.post(URL_POST_USER_INFO, this.state.authentication)
        .then(res => {
            const data = res.data
            if(data.success){
                this.setMessage(data.message, true)
                auth.saveUser(data.body)
            } else {
                this.setMessage(data.message, false)
            }
        })
    }

    onNewPassword(e) {
        e.preventDefault()
        axios.post(URL_POST_PASSWORD, this.state.authentication)
        .then(res => {
            const data = res.data
            if(data.success){
                auth.saveUser(data.body)
                this.setMessage(data.message,  true)
            } else {
                this.setMessage(data.message, false)
            }
            this.setState(state => {
                return delete state.authentication.secret
            })
        })
        .catch(e => {
            console.log(e)
            this.setMessage(e.message || e.msg || e.errmsg || "Unexpected error. Please try again later")
        })
    }

    onForgotPassword(e) {
        e.preventDefault();
        axios.post(URL_PASSWORD_RESET, {email: this.state.authentication.email})
        .then(res => {
            const data = res.data
            if(data.success){
                this.setMessage(data.message, true)
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    onLogin(e){
        e.preventDefault()
        auth.login(this.state.authentication)
        .then(res => {
            if(res.data.success){
                auth.saveUser(res.data.body)
                this.setMessage(res.data.message, true)
                this.props.history.push(this.props.location.state.from)
            } else {
                this.setMessage(res.data.message, false)
            }
        })
        .catch(e => this.errorHandler(e))
    }

    onRegister(e) {
        e.preventDefault()
        auth.register(this.state.authentication)
        .then(res => {
            const data = res.data;
            if(data.success){
                this.close()
                this.setState({showConfirmation: true})
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => this.errorHandler(e))
    }

    toLogin() {
        this.close()
        this.setState({showLogin: true})
    }

    toRegister() {
        this.close()
        this.setState({showRegister: true})
    }

    toResetPassword() {
        this.close()
        this.setState({showReset: true})
    }

    toGoogleAuth() {
        axios.get(URL_AUTH_GOOGLE)
        .then(res => {
            console.log(res)
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
        this.setState({
            showRegister: false,
            showLogin: false,
            showUpdateUser: false,
            showReset: false,
            showNewPassword: false,
            showUpdate: false,
            showConfirmation: false,
            message: {}
        })
    }

    onChangeHandler(e){
        const key = e.target.name;
        const value = e.target.value;
        this.setState(state => {
            return state.authentication[key] = value;
        })
    }

    handleResponse(res){
        console.log(res.data.success)
        if(res.data.success){
            this.close()
        } else {
            this.setMessage(res.data.message, false)
        }
    }

    errorHandler(e){
        this.setMessage("There was a problem on out server...\n Sorry", false)
        console.log(e)
    }
}