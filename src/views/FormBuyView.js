/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class FormBuyView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FormBuyController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FormBuyView

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
    const proxies = Controller !== FormBuyView ? transformProxies(this.props.children) : {

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
              <div desc="close" className="af-class-close-btn">
                <div className="af-class-text-block-19">X</div>
              </div>
              <div desc="background" className="af-class-course-buy-pic" />
              <div className="af-class-but-description">Wokshop + 1 month of portal access</div>
              <h1 desc="name" className="af-class-buy-course-name">Workshop name</h1>
              <div desc="starts" className="af-class-but-description af-class-low">Aug 14</div>
              <div className="af-class-dateblock af-class-checkout">
                <div className="af-class-date-phrase">Final Price</div>
                <div desc="price" className="af-class-date-duration">$200</div>
              </div>
              <div desc="logged-in" className="af-class-buy-email">
                <div className="af-class-buy-hint">You are logged in as:</div>
                <div desc="email" className="af-class-buy-user-email">skymailsenter@gmail.com</div>
              </div>
              <div desc="fast-register" className="af-class-form-block-3 w-form">
                <form id="email-form" name="email-form" data-name="Email Form" desc="login"><label htmlFor="name" className="af-class-field-label-6">Email</label><input type="text" className="w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" /><label htmlFor="email" className="af-class-field-label-6">Password</label><input type="email" className="af-class-text-field-4 w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Create new if not registered" id="email-2" required /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <div id="spn-success" className="w-form">
                <form id="email-form-2" name="email-form-2" data-name="Email Form 2" desc="coupon-form" className="af-class-form-4"><label htmlFor="email" className="af-class-field-label-6">Coupon</label>
                  <div className="af-class-div-block-17"><input type="text" className="af-class-text-field-5 w-input" maxLength={256} name="coupon" data-name="Coupon" desc="apply-cpn" required /><input type="submit" defaultValue="Apply" data-wait="Please wait..." desc="apply-cpn" className="af-class-submit-button-4 w-button" /></div>
                </form>
                <div desc="cpm-success" className="w-form-done">
                  <div>Your coupon has been applied</div>
                </div>
                <div desc="cpn-error" className="w-form-fail">
                  <div id="cpn-error">Sorry, this is not a valid coupon.</div>
                </div>
              </div><a desc="checkout" href="#" className="af-class-buy-buy">Proceed to Checkout</a></div>
          </div>
        </span>
      </span>
    )
  }
}

export default FormBuyView

/* eslint-enable */