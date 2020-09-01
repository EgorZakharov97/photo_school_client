/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ForgotPasswordView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ForgotPasswordController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ForgotPasswordView

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
    const proxies = Controller !== ForgotPasswordView ? transformProxies(this.props.children) : {

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
            <div id="forgot-password-form" className="af-class-popup-window">
              <div className="af-class-section-register">
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
                        <h2 className="af-class-heading-9">Forgot Password</h2>
                      </div>
                      <div className="af-class-login-form">
                        <div className="w-form">
                          <form id="wf-form-forgot-email" name="wf-form-forgot-email" data-name="forgot-email" action="/auth/local/reset" method="post"><input type="email" className="af-class-login-input w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." desc="submit" className="af-class-login-submit w-button" /></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-login-footer">
                      <div className="af-class-text-block-7">Rember your pasword?</div>
                      <a desc="login" href="/auth/" className="af-class-dark-button w-inline-block">
                        <div className="af-class-text-block-6">Login</div>
                      </a>
                    </div>
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

export default ForgotPasswordView

/* eslint-enable */