/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class LeaveEmailView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LeaveEmailController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LeaveEmailView

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
    const proxies = Controller !== LeaveEmailView ? transformProxies(this.props.children) : {
      'email': [],
      'submit': [],
      'success': [],
      'error': [],
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
            <div data-w-id="fcd33254-ba14-2e3a-ab7c-a35cd106839d" className="af-class-close">X</div>
            <div className="af-class-login-content">
              <div className="af-class-login-body">
                <div className="af-class-login-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                <div className="af-class-login-heading">
                  <h2 className="af-class-heading-9 af-class-we">Leave us an Email</h2>
                  <div className="af-class-text-block-18">We will let you know when we launch online courses</div>
                </div>
                <div className="af-class-login-form">
                  <div className="w-form">
                    <form method="get" data-name>{map(proxies['email'], props => <input type="email" maxLength={256} name="email" data-name="email" placeholder="Email" id="email" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
                    {map(proxies['success'], props => <div {...{...props, className: `w-form-done ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Thank you! Your submission has been received!</div>
                    </React.Fragment>}</div>)}
                    {map(proxies['error'], props => <div {...{...props, className: `w-form-fail ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </React.Fragment>}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default LeaveEmailView

/* eslint-enable */