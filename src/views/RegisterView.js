/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
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

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div id="register-form" className="af-class-popup-window">
              <div className="af-class-login-wrapper">
                <div className="af-class-window-contetn">
                  <div className="af-class-window-body">
                    <div className="af-class-window-nav">
                      <a href="index.html" className="af-class-login-nav-link w-inline-block">
                        <h3 className="af-class-heading-8">Main</h3>
                      </a><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" />
                      <a href="https://wa.me/12048813113" className="af-class-login-nav-link w-inline-block">
                        <h3 className="af-class-heading-8">help</h3>
                      </a>
                    </div>
                    <div className="af-class-login-heading">
                      <h2 className="af-class-heading-9">Register</h2>
                    </div>
                    <div className="af-class-login-form">
                      <div className="w-form">
                        <form id="wf-form-Register" name="wf-form-Register" data-name="Register" action="/auth/local/register" method="post"><input type="text" className="af-class-login-input w-input" autofocus="true" maxLength={256} name="username" data-name="username" placeholder="Name" id="username" required /><input type="email" className="af-class-login-input w-input" maxLength={256} name="email" data-name="email" placeholder="Email" id="email-3" required /><input type="password" className="af-class-login-input w-input" maxLength={256} name="password" data-name="password" placeholder="Password" id="password-5" required /><input type="password" className="af-class-login-input w-input" maxLength={256} name="password_2" data-name="password_2" placeholder="Repeat Password" id="password_-4" required /><input type="tel" className="af-class-login-input w-input" maxLength={256} name="phoneNumber" data-name="phoneNumber" placeholder="Phone Number" id="phoneNumber" required /><select id="experience" name="experience" required data-name="experience" className="af-class-login-input w-select"><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></select><select id="sex" name="sex" required data-name="sex" className="af-class-login-input w-select"><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></select><input type="submit" defaultValue="Register" data-wait="Please wait..." desc="register" className="af-class-login-submit w-button" /><a desc="register-google" href="/auth/google" className="af-class-link-block-2 w-inline-block"><img src="images/1200px-Google__G__Logo.svg.png" width={25} srcSet="images/1200px-Google__G__Logo.svg-p-500.png 500w, images/1200px-Google__G__Logo.svg-p-800.png 800w, images/1200px-Google__G__Logo.svg-p-1080.png 1080w, images/1200px-Google__G__Logo.svg.png 1200w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 25px, (max-width: 991px) 3vw, 25px" alt /></a></form>
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
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default RegisterView

/* eslint-enable */