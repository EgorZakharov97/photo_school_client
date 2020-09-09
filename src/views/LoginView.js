/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class LoginView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LoginController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LoginView

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
    const proxies = Controller !== LoginView ? transformProxies(this.props.children) : {
      'name': [],
      'password': [],
      'login': [],
      'message': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-login-wrapper">
            <div className="af-class-close">X</div>
            <div className="af-class-window-contetn">
              <div className="af-class-window-body">
                <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                <div className="af-class-login-heading">
                  <h2 className="af-class-heading-9">Login</h2>
                </div>
                <div className="af-class-login-form">
                  <div className="w-form">
                    <form id="wf-form-login" name="wf-form-login" data-name="login" action="/auth/local" method="post">{map(proxies['name'], props => <input type="email" maxLength={256} name="email-5" data-name="Email 5" placeholder="Email" id="email-5" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['password'], props => <input type="password" maxLength={256} name="password-6" data-name="Password 6" placeholder="Password" id="password-6" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['login'], props => <input type="submit" value="Login" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}<a desc="login-google" href="/auth/google" className="af-class-link-block-2 w-inline-block"><img src="images/1200px-Google__G__Logo.svg.png" width={25} srcSet="images/1200px-Google__G__Logo.svg-p-500.png 500w, images/1200px-Google__G__Logo.svg-p-800.png 800w, images/1200px-Google__G__Logo.svg-p-1080.png 1080w, images/1200px-Google__G__Logo.svg.png 1200w" sizes="(max-width: 767px) 25px, (max-width: 991px) 3vw, 25px" alt /></a>
                      {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}
                    </form>
                    <div className="af-class-success-message-2 w-form-done">
                      <div>Just give it a second...</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong. Please, try again later</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-login-footer">
                <div className="af-class-text-block-7">Don't have an account?</div>
                <a desc="register" href="/auth/local/register" className="af-class-dark-button w-inline-block">
                  <div className="af-class-text-block-6">Register</div>
                </a>
              </div>
            </div>
            <div className="af-class-login-col-right af-class-register" />
          </div>
        </span>
      </span>
    )
  }
}

export default LoginView