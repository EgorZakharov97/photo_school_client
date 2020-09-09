/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class UserInfoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserInfoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserInfoView

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
    const proxies = Controller !== UserInfoView ? transformProxies(this.props.children) : {
      'close': [],
      'email': [],
      'name': [],
      'phoneNumber': [],
      'experiance': [],
      'sex': [],
      'message': [],
      'submit': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-popup-window">
            <div className="af-class-login-wrapper">
              <div className="af-class-window-contetn">
                <div className="af-class-window-body">
                  {map(proxies['close'], props => <div {...{...props, className: `af-class-close ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>X</React.Fragment>}</div>)}
                  <div className="af-class-window-nav"><img src="images/Webp.net-resizeimage-8.png" width={100} alt className="af-class-image-2" /></div>
                  <div className="af-class-login-heading">
                    <h2 className="af-class-heading-9">Update user info</h2>
                  </div>
                  <div className="af-class-login-form">
                    <div className="w-form">
                      <form id="wf-form-Register" name="wf-form-Register" data-name="Register" action="/auth/update" method="post">
                        {map(proxies['email'], props => <div {...{...props, className: `af-class-text-block-10 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>email@gmail.com</React.Fragment>}</div>)}{map(proxies['name'], props => <input type="text" autofocus="true" maxLength={256} name="username-2" data-name="Username 2" placeholder="Name" id="username-2" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['phonenumber'], props => <input type="tel" maxLength={256} name="phoneNumber-2" data-name="Phone Number 2" placeholder="Phone Number" id="phoneNumber-2" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}<input type="email" className="af-class-login-input af-class-invisible w-input" maxLength={256} name="email-4" data-name="Email 4" placeholder="email" id="email-4" required />{map(proxies['experiance'], props => <select id="experience-2" name="experience-2" required data-name="Experience 2" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></React.Fragment>}</select>)}{map(proxies['sex'], props => <select id="sex-2" name="sex-2" required data-name="Sex 2" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></React.Fragment>}</select>)}
                        {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}{map(proxies['submit'], props => <input type="submit" value="Update" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
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

export default UserInfoView

/* eslint-enable */