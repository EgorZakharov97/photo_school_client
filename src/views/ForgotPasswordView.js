/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

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
      'email': [],
      'submit': [],
      'message': [],
      'link-login': [],
      'close': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="forgot-password-form" className="af-class-popup-window">
            <div className="af-class-section-register">
              <div className="af-class-login-wrapper">
                <div className="af-class-window-contetn">
                  <div className="af-class-window-body">
                    <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                    <div className="af-class-login-heading">
                      <h2 className="af-class-heading-9">Forgot Password</h2>
                    </div>
                    <div className="af-class-login-form">
                      <div className="w-form">
                        <form id="wf-form-forgot-email" name="wf-form-forgot-email" data-name="forgot-email" action="/auth/local/reset" method="post">{map(proxies['email'], props => <input type="email" maxLength={256} name="email-6" data-name="Email 6" placeholder="Email" id="email-6" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}
                          {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}
                        </form>
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
                    {map(proxies['link-login'], props => <a href="/auth/" {...{...props, className: `af-class-dark-button w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div className="af-class-text-block-6">Login</div>
                    </React.Fragment>}</a>)}
                  </div>
                </div>
              </div>
              {map(proxies['close'], props => <div {...{...props, className: `af-class-close ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>X</React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default ForgotPasswordView

/* eslint-enable */