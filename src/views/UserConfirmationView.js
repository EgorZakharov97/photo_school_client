/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class UserConfirmationView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserConfirmationController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserConfirmationView

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
    const proxies = Controller !== UserConfirmationView ? transformProxies(this.props.children) : {
      'user-confirmation': [],
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
          <div>
            {map(proxies['user-confirmation'], props => <div id="user-confirmation-form" {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              {map(proxies['user-confirmation'], props => <div {...{...props, className: `af-class-login-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
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
                      <h2 className="af-class-heading-9">User Confirmation</h2>
                      <div className="af-class-text-block-17">User confirmation Required.<br />Please, check your email</div>
                    </div>
                  </div>
                  <div className="af-class-login-footer">
                    <div className="af-class-text-block-7">Have another account?</div>
                    <a desc="login" href="/auth" className="af-class-dark-button w-inline-block">
                      <div className="af-class-text-block-6">Login</div>
                    </a>
                  </div>
                </div>
                <div className="af-class-close">X</div>
              </React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default UserConfirmationView

/* eslint-enable */