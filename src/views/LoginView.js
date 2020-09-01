/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
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
            <div id="login-form" className="af-class-popup-window">
              <div className="af-class-login-wrapper">
                <div className="af-class-window-contetn">
                  <div className="af-class-window-body">
                    <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                    <div className="af-class-login-heading">
                      <h2 className="af-class-heading-9">Login</h2>
                    </div>
                    <div className="af-class-login-form">
                      <div className="w-form">
                        <form id="wf-form-login" name="wf-form-login" data-name="login" action="/auth/local" method="post"><input type="email" className="af-class-login-input w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required /><input type="password" className="af-class-login-input w-input" maxLength={256} name="password" data-name="Password" placeholder="Password" id="password" required /><input type="submit" defaultValue="Login" data-wait="Please wait..." desc="login" className="af-class-login-submit w-button" /><a desc="login-google" href="/auth/google" className="af-class-link-block-2 w-inline-block"><img src="images/1200px-Google__G__Logo.svg.png" width={25} srcSet="images/1200px-Google__G__Logo.svg-p-500.png 500w, images/1200px-Google__G__Logo.svg-p-800.png 800w, images/1200px-Google__G__Logo.svg-p-1080.png 1080w, images/1200px-Google__G__Logo.svg.png 1200w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 25px, (max-width: 991px) 3vw, 25px" alt /></a></form>
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
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default LoginView

/* eslint-enable */