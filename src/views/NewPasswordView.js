/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import NewPasswordView from './NewPasswordView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class NewPasswordView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NewPasswordController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NewPasswordView

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
    const proxies = Controller !== NewPasswordView ? transformProxies(this.props.children) : {
      'new-password': [],
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
            {map(proxies['new-password'], props => <div id="new-password-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <NewPasswordView.Controller />
            </React.Fragment>}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NewPasswordView

/* eslint-enable */8">help</h3>
                  </a>
                </div>
                <div className="af-class-login-heading">
                  <h2 className="af-class-heading-9">New Password</h2>
                </div>
                <div className="af-class-login-form">
                  <div className="w-form">
                    <form id="reset" name="wf-form-new-password" data-name="new-password" action="/auth/local/reset/###" method="post">{map(proxies['password'], props => <input type="password" maxLength={256} name="password" data-name="Password" placeholder="New Password" id="password" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['password_2'], props => <input type="password" maxLength={256} name="password_2" data-name="password_2" placeholder="Repeat New Password" id="password_-5" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Re-new Password" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}
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
                <a desc="login" href="/auth/local/login" className="af-class-dark-button w-inline-block">
                  <div className="af-class-text-block-6">Login</div>
                </a>
              </div>
            </div>
            <div className="af-class-close">X</div>
          </div>
        </span>
      </span>
    )
  }
}

export default NewPasswordView

/* eslint-enable */