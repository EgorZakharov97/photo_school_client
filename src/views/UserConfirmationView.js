/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

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
          <div id="user-confirmation-form" className="af-class-popup-window">
            <div className="af-class-login-wrapper">
              <div className="af-class-window-contetn">
                <div className="af-class-window-body">
                  <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                  <div className="af-class-login-heading">
                    <h2 className="af-class-heading-9">User Confirmation</h2>
                    <div className="af-class-text-block-17">User confirmation Required.<br />Please, check your email</div>{map(proxies['submit'], props => <a href="#" {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Send Another Email</React.Fragment>}</a>)}
                    {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}
                  </div>
                </div>
                <div className="af-class-login-footer">
                  <div className="af-class-text-block-7">Have another account?</div>
                  {map(proxies['link-login'], props => <a href="#" {...{...props, className: `af-class-dark-button w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-text-block-6">Login</div>
                  </React.Fragment>}</a>)}
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

export default UserConfirmationView

/* eslint-enable */