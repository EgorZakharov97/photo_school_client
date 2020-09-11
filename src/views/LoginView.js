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
      'close': [],
      'email': [],
      'password': [],
      'submit': [],
      'login-google': [],
      'forgot': [],
      'message': [],
      'link-register': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="login-form" className="af-class-popup-window">
            <div className="af-class-login-wrapper">
              {map(proxies['close'], props => <div {...{...props, className: `af-class-close ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>X</React.Fragment>}</div>)}
              <div className="af-class-window-contetn">
                <div className="af-class-window-body">
                  <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                  <div className="af-class-login-heading">
                    <h2 className="af-class-heading-9">Login</h2>
                  </div>
                  <div className="af-class-login-form">
                    <div className="w-form">
                      <form id="wf-form-login" name="wf-form-login" data-name="login" method="post">{map(proxies['email'], props => <input type="email" maxLength={256} name="email" data-name="email" placeholder="Email" id="email-8" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['password'], props => <input type="password" maxLength={256} name="password" data-name="password" placeholder="Password" id="password-9" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Login" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['login-google'], props => <a href="#" {...{...props, className: `af-class-link-block-2 w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="images/1200px-Google__G__Logo.svg.png" width={25} srcSet="images/1200px-Google__G__Logo.svg-p-500.png 500w, images/1200px-Google__G__Logo.svg-p-800.png 800w, images/1200px-Google__G__Logo.svg-p-1080.png 1080w, images/1200px-Google__G__Logo.svg.png 1200w" sizes="100vw" alt /></React.Fragment>}</a>)}{map(proxies['forgot'], props => <a href="#" {...{...props, className: `af-class-link-2 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Forgot password?</React.Fragment>}</a>)}
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
                  {map(proxies['link-register'], props => <a href="#" {...{...props, className: `af-class-dark-button w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-text-block-6">Register</div>
                  </React.Fragment>}</a>)}
                </div>
              </div>
              <div className="af-class-login-col-right af-class-register" />
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default LoginView

/* eslint-enable */