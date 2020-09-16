/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PortalProfileView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/portal/PortalProfileController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PortalProfileView

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
    const proxies = Controller !== PortalProfileView ? transformProxies(this.props.children) : {
      'resetPassword': [],
      'email': [],
      'name': [],
      'phoneNumber': [],
      'experiance': [],
      'sex': [],
      'update-user-info': [],
      'stripePayment': [],
      'updatePayment': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);


          .progressbar {
            margin-top: 10px;
            counter-reset: step;
            clear: both;
            list-style: none;
            width: 700px;
            display: flex;
            align-items: center;
            padding-inline-start: 0;
          }
          .progress-header {
            text-align: center;
            padding-top: 30px;
            margin-bottom: 0;
          }
          .progressbar li {
            font-family: Exo, sans-serif;
            width: 20%;
            float: left;
            position: relative;
            text-align: center;
          }
          .progressbar li:before {
            content: counter(step);
            counter-increment: step;
            width: 25px;
            line-height: 25px;
            display: block;
            color: #FFFFFF;
            font-size: 16px;
            font-family: exo, sans-serif;
            font-weight: 600;
            border: 6px solid #ececec;
            background: #fadda6;
            border-radius: 19px;
            margin: 0 auto 4px;
          }
          .progressbar li:after {
            content: \'\';
            width: 85%;
            height: 3px;
            background: #B9B9B9;
            position: absolute;
            left: -42%;
            top: 17px;
            z-index: -1;
          }
          .progressbar li:first-child:after {
            content: none;
          }
          .progress-payment li {
            width: 50%;
          }
          .progressbar li.active:after,
          .progressbar li.active:before {
            background: #e74c32;
            color: white;
          }
          .progressbar li.complete:after {
            background: #e74c32;
          }
          .progressbar li.half-complete:after {
            background: linear-gradient(to right, #e74c32 50%, #B9B9B9 50%);
            color: white;
          }
          @media screen and (max-width: 1407px) {
            .progressbar {
              width: 400px;
            }
          }
          @media screen and (max-width: 1260px) {
            .progressbar {
              width: 100%;
              padding-bottom: 40px;
            }
            .header-splitter {
              display: block;
            }
            .section-heading.portal{
              margin-bottom: 30px;
            }
          }
          @media screen and (max-width: 991px) {
            .progressbar {
            }
          }
          @media screen and (max-width: 767px) {
            .progressbar {
            }
          }
          @media screen and (max-width: 479px) {
          }
        ` }} />
        <span className="af-view">
          <div className="af-class-profile">
            <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Pro</span>file</h3>
            <div className="af-class-container-11 w-container">
              <div>
                <div className="af-class-div-block-45">
                  <h2 className="af-class-heading-9">Update user info</h2>{map(proxies['resetpassword'], props => <a href="/auth/local/reset" {...{...props, className: `af-class-login-submit af-class-small w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Reset Password</React.Fragment>}</a>)}</div>
                <div className="af-class-form-block-5 w-form">
                  <form id="update-profile" name="wf-form-Register" data-name="Register" action="/auth/update" method="post" className="af-class-form-9">
                    {map(proxies['email'], props => <div {...{...props, className: `af-class-text-block-10 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>email@gmail.com</React.Fragment>}</div>)}{map(proxies['name'], props => <input type="text" autofocus="true" maxLength={256} name="username-2" data-name="Username 2" placeholder="Name" id="username-2" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['phonenumber'], props => <input type="tel" maxLength={256} name="phoneNumber-2" data-name="Phone Number 2" placeholder="Phone Number" id="phoneNumber-2" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}<input type="email" className="af-class-login-input af-class-invisible w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="email" id="email-2" required />{map(proxies['experiance'], props => <select id="Level-2" name="Level-2" required data-name="Level 2" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></React.Fragment>}</select>)}{map(proxies['sex'], props => <select id="sex-2" name="sex-2" required data-name="Sex 2" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></React.Fragment>}</select>)}{map(proxies['update-user-info'], props => <input type="submit" value="Update" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div className="af-class-div-block-46">
                <h2 className="af-class-heading-9">Update payment method</h2>
                <div desc="email" className="af-class-text-block-10">Your card will not be charged</div>
                {map(proxies['stripepayment'], props => <div {...{...props, className: `af-class-div-block-47 ${props.className || ''}`}}>{props.children}</div>)}{map(proxies['updatepayment'], props => <a href="#" {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Update payment method</React.Fragment>}</a>)}</div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PortalProfileView

/* eslint-enable */