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
      Controller = require('../controllers/PortalProfileController')
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
      'reset-password': [],
      'email': [],
      'message': [],
      'name': [],
      'phone-number': [],
      'experience': [],
      'sex': [],
      'update-user-info': [],
      'stripe-payment': [],
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
            <div className="w-container">
              <div className="af-class-div-block-71">
                <div>
                  <div className="af-class-div-block-45">
                    <h2 className="af-class-heading-9">Update user info</h2>{map(proxies['reset-password'], props => <a href="#" {...{...props, className: `af-class-login-submit af-class-small w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Reset Password</React.Fragment>}</a>)}</div>
                  <div className="af-class-div-block-45">
                    {map(proxies['email'], props => <div {...{...props, className: `af-class-text-block-10 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>email@gmail.com</React.Fragment>}</div>)}
                    {map(proxies['message'], props => <div {...{...props, className: `af-class-user-message ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-form-block-5 w-form">
                    <form id="wf-form-update-user" name="wf-form-update-user" data-name="update-user" method="post" className="af-class-form-9">{map(proxies['name'], props => <input type="text" autofocus="true" maxLength={256} name="username" data-name="username" placeholder="Name" id="username-3" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['phone-number'], props => <input type="tel" maxLength={256} name="phoneNumber" data-name="phoneNumber" placeholder="Phone Number" id="phoneNumber-3" required {...{...props, className: `af-class-login-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['experience'], props => <select id="experience" name="experience" required data-name="experience" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></React.Fragment>}</select>)}{map(proxies['sex'], props => <select id="sex-4" name="sex" required data-name="sex" {...{...props, className: `af-class-login-input w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></React.Fragment>}</select>)}{map(proxies['update-user-info'], props => <input type="submit" value="Update" data-wait="Please wait..." {...{...props, className: `af-class-login-submit w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
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
                  {map(proxies['stripe-payment'], props => <div {...{...props, className: `af-class-div-block-47 ${props.className || ''}`}}>{props.children}</div>)}
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PortalProfileView

/* eslint-enable */