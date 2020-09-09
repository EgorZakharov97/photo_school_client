/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class RegisterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegisterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegisterView

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
    const proxies = Controller !== RegisterView ? transformProxies(this.props.children) : {
      'username': [],
      'email': [],
      'password': [],
      'password_2': [],
      'phoneNumber': [],
      'experience': [],
      'sex': [],
      'submit': [],
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
            <div className="af-class-window-contetn">
              <div className="af-class-close">X</div>
              <div className="af-class-window-body">
                <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                <div className="af-class-login-heading">
                  <h2 className="af-class-heading-9">Register</h2>
                </div>
                <div className="af-class-login-form">
                  <div className="w-form">
                    <form id="wf-form-Register" name="wf-form-Register" data-name="Register" action="/auth/local/register" method="post">{map(proxies['username'], props => <input type="text" autofocus="true" maxLength={256} name="username" data-name="username" placeholder="Name" id="username" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['email'], props => <input type="email" maxLength={256} name="email" data-name="email" placeholder="Email" id="email-3" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['password'], props => <input type="password" maxLength={256} name="password" data-name="password" placeholder="Password" id="password-5" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['password_2'], props => <input type="password" maxLength={256} name="password_2" data-name="password_2" placeholder="Repeat Password" id="password_-4" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['phonenumber'], props => <input type="tel" maxLength={256} name="phoneNumber" data-name="phoneNumber" placeholder="Phone Number" id="phoneNumber" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['experience'], props => <select id="experience" name="experience" required data-name="experience" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></React.Fragment>}</select>)}{map(proxies['sex'], props => <select id="sex" name="sex" required data-name="sex" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></React.Fragment>}</select>)}{map(proxies['submit'], props => <input type="submit" value="Register" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}<a href="/auth/google" className="af-class-link-block-2 w-inline-block"><img src="images/1200px-Google__G__Logo.svg.png" width={25} srcSet="images/1200px-Google__G__Logo.svg-p-500.png 500w, images/1200px-Google__G__Logo.svg-p-800.png 800w, images/1200px-Google__G__Logo.svg-p-1080.png 1080w, images/1200px-Google__G__Logo.svg.png 1200w" sizes="(max-width: 767px) 25px, (max-width: 991px) 3vw, 25px" alt /></a>
                      {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}
                    </form>
                    <div className="af-class-success-message w-form-done">
                      <div className="af-class-text-block-16">Give it a second, We are gegistering you</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong. Please try again later</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-login-footer">
                <div className="af-class-text-block-7">Already have an account?</div>
                <a desc="login" href="/auth" className="af-class-dark-button w-inline-block">
                  <div className="af-class-text-block-6">Login</div>
                </a>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default RegisterView

/* eslint-enable */