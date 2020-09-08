/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"),
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

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
    const proxies = Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility-page-wrap">
              <div className="af-class-utility-page-content w-password-page w-form">
                <form action="/.wf_auth" method="post" className="af-class-form-2 w-password-page">
                  <div className="af-class-login-wrapper">
                    <div className="af-class-window-contetn">
                      <div className="af-class-window-body">
                        <div className="af-class-window-nav">
                          <a href="#" className="af-class-login-nav-link w-inline-block">
                            <h3 className="af-class-heading-8">help</h3>
                          </a><img src="images/bull2-min.png" alt className="af-class-image-2" />
                          <a href="#" className="af-class-login-nav-link w-inline-block">
                            <h3>main</h3>
                          </a>
                        </div>
                        <div className="af-class-login-heading">
                          <h2 className="af-class-heading-9">Login</h2>
                        </div>
                        <div className="af-class-login-gorm w-clearfix"><input type="email" className="af-class-login-input w-input" autofocus="true" maxLength={256} name="Email" data-name="Email" placeholder="Email" id="Email" required /><input type="password" maxLength={256} name="pass" placeholder="Password" autofocus="true" className="af-class-login-input w-password-page w-input" /><input type="submit" defaultValue="Enter" data-wait="Please wait..." className="af-class-login-submit w-password-page w-button" /><a href="#" className="af-class-link">Forgot Password?</a></div>
                      </div>
                      <div className="af-class-login-footer">
                        <div className="af-class-text-block-7">Don't you have an account?</div>
                        <a href="#" className="af-class-dark-button w-inline-block">
                          <div className="af-class-text-block-6">Subscribe</div>
                        </a>
                      </div>
                    </div>
                    <div className="af-class-login-col-right" />
                  </div>
                  <div className="w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                  </div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                  </div>
                </form>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default UnauthorizedView

/* eslint-enable */