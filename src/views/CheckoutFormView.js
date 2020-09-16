/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CheckoutFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CheckoutFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CheckoutFormView

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
    const proxies = Controller !== CheckoutFormView ? transformProxies(this.props.children) : {
      'close': [],
      'heading': [],
      'price': [],
      'logged-in-as': [],
      'email': [],
      'auth-form': [],
      'email': [],
      'password': [],
      'stripe-card': [],
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
          <div className="af-class-payment-container w-container">
            <div className="af-class-payment-block">
              {map(proxies['close'], props => <div data-w-id="928c79bd-cbe9-54f9-fbca-1b95e4ffce1b" {...{...props, className: `af-class-close-btn ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-text-block-19">X</div>
              </React.Fragment>}</div>)}
              <div className="af-class-course-buy-pic" />
              {map(proxies['heading'], props => <h1 {...{...props, className: `af-class-buy-course-name ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Subscription name</React.Fragment>}</h1>)}
              <div className="af-class-dateblock af-class-checkout">
                <div className="af-class-date-phrase">Final Price</div>
                {map(proxies['price'], props => <div {...{...props, className: `af-class-date-duration ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$200</React.Fragment>}</div>)}
              </div>
              {map(proxies['logged-in-as'], props => <div {...{...props, className: `af-class-buy-email ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                <div className="af-class-buy-hint">You are logged in as:</div>
                {map(proxies['email'], props => <div {...{...props, className: `af-class-buy-user-email ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>skymailsenter@gmail.com</React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-form-block-3 w-form">
                {map(proxies['auth-form'], props => <form id="email-form" name="email-form" data-name="Email Form" {...props}>{createScope(props.children, proxies => <React.Fragment><label htmlFor="name" className="af-class-field-label-6">Email</label>{map(proxies['email'], props => <input type="text" maxLength={256} name="name" data-name="Name" placeholder id="name" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="password" className="af-class-field-label-6">Password</label>{map(proxies['password'], props => <input type="password" maxLength={256} name="password" data-name="password" placeholder="Create new if not registered" id="password" required {...{...props, className: `af-class-text-field-4 w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="password-2" className="af-class-field-label-6">Card Details</label></React.Fragment>)}</form>)}
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <div>
                {map(proxies['stripe-card'], props => <div {...{...props, className: `af-class-div-block-44 ${props.className || ''}`}}>{props.children}</div>)}
              </div>
              {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-25 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is user message</React.Fragment>}</div>)}{map(proxies['submit'], props => <a href="#" {...{...props, className: `af-class-buy-buy ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Pay now</React.Fragment>}</a>)}</div>
          </div>
        </span>
      </span>
    )
  }
}

export default CheckoutFormView

/* eslint-enable */