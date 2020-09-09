/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import RegisterView from './RegisterView'
import LoginView from './LoginView'
import UserInfoView from './UserInfoView'
import ForgotPasswordView from './ForgotPasswordView'
import NewPasswordView from './NewPasswordView'
import UserConfirmationView from './UserConfirmationView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class AuthenticationView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AuthenticationController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AuthenticationView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== AuthenticationView ? transformProxies(this.props.children) : {
      'register': [],
      'login': [],
      'user-info': [],
      'forgot-password': [],
      'new-password': [],
      'user-confirmation': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-3">
            {map(proxies['register'], props => <div id="register-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <RegisterView.Controller />
            </React.Fragment>}</div>)}
            {map(proxies['login'], props => <div {...{...props, className: `af-class-popup-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <LoginView.Controller />
            </React.Fragment>}</div>)}
            {map(proxies['user-info'], props => <div {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <UserInfoView.Controller />
            </React.Fragment>}</div>)}
            {map(proxies['forgot-password'], props => <div id="forgot-password-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <ForgotPasswordView.Controller />
            </React.Fragment>}</div>)}
            {map(proxies['new-password'], props => <div id="new-password-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <NewPasswordView.Controller />
            </React.Fragment>}</div>)}
            {map(proxies['user-confirmation'], props => <div id="user-confirmation-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <UserConfirmationView.Controller />
            </React.Fragment>}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AuthenticationView

/* eslint-enable */