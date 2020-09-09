import React, {useState} from 'react'
import AuthenticationView from '../views/AuthenticationView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import NewPasswordView from '../views/NewPasswordView'
import ForgotPasswordView from '../views/ForgotPasswordView'
import UpdateUserInfoView from '../views/UpdateUserInfoView'
import UserConfirmationView from '../views/UserConfirmationView'


export default function AuthController(props) {
    const user = props.user;
    const setUser = props.setUser;
    
    const shouldLogin = props.shouldLogin
    const setShouldLogin = props.setShouldLogin

    const [shouldRegister, setShouldRegister] = useState(false)
    const [shouldResetPassword, setShouldResetPassword] = useState(false)
    const [shouldForgotPassword, setShouldForgotPassword] = useState(false)
    const [shouldUpdateUserInfo, setShouldUpdateUserInfo] = useState(false)
    const [shouldUserConfirmation, setShouldUserConfirmation] = useState(false)

    if (shouldLogin) return <AuthenticationView><LoginView>

        </LoginView></AuthenticationView>

    // if (shouldRegister) return <RegisterView>
    //     <name/>
    //     <email/>
    //     <password/>
    //     <password_2/>
    //     <phoneNumber/>
    //     <experience/>
    //     <sex/>
    //     <submit/>
    // </RegisterView>

    // if (shouldResetPassword) return <NewPasswordView>

    // </NewPasswordView>

    // if (shouldForgotPassword) return <ForgotPasswordView>

    // </ForgotPasswordView>

    // if (shouldUpdateUserInfo) return <UpdateUserInfoView>

    // </UpdateUserInfoView>

    // if (shouldUserConfirmation) return <UserConfirmationView>

    // </UserConfirmationView>
}