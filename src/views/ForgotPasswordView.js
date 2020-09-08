/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import ForgotPasswordView from './ForgotPasswordView'

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
      'forgot-password': [],
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
            {map(proxies['forgot-password'], props => <div id="forgot-password-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <ForgotPasswordView.Controller />
            </React.Fragment>}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ForgotPasswordView

/* eslint-enable */me="wf-form-forgot-email" data-name="forgot-email" action="/auth/local/reset" method="post">{map(proxies['email'], props => <input type="email" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}
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
                  <a desc="login" href="/auth/" className="af-class-dark-button w-inline-block">
                    <div className="af-class-text-block-6">Login</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="af-class-close">X</div>
          </div>
        </span>
      </span>
    )
  }
}

export default ForgotPasswordView

/* eslint-enable */ble */