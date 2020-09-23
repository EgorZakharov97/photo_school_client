/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import EmailView from './EmailView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class EmailsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/EmailsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = EmailsView

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
    const proxies = Controller !== EmailsView ? transformProxies(this.props.children) : {
      'template-selector': [],
      'create-new-template': [],
      'add-email-input': [],
      'email': [],
      'editor': [],
      'preview': [],
      'send-test': [],
      'send': [],
      'preview': [],
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
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                <div className="w-row">
                  <div className="af-class-email-menu w-col w-col-3"><a href="#" className="af-class-back">Go Back</a>{map(proxies['template-selector'], props => <select id="template" name="template" data-name="template" {...{...props, className: `af-class-select-field w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="empty">Template</option></React.Fragment>}</select>)}{map(proxies['create-new-template'], props => <a href="#" {...{...props, className: `af-class-button-dry w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>New Template</React.Fragment>}</a>)}
                    <div className="af-class-emails">
                      <h4 className="af-class-heading-21">Selected Emails</h4>{map(proxies['add-email-input'], props => <input type="text" maxLength={256} name="addEmail" data-name="addEmail" placeholder="Add Email" id="addEmail" {...{...props, className: `af-class-text-field-7 w-input ${props.className || ''}`}}>{props.children}</input>)}
                      {map(proxies['email'], props => <div {...{...props, className: `af-class-email ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <EmailView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    {map(proxies['editor'], props => <div {...{...props, className: `af-class-text-editor ${props.className || ''}`}}>{props.children}</div>)}{map(proxies['preview'], props => <a href="#" {...{...props, className: `af-class-button-dry w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>See preview</React.Fragment>}</a>)}{map(proxies['send-test'], props => <a href="#" {...{...props, className: `af-class-button-dry w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Send Test Email</React.Fragment>}</a>)}{map(proxies['send'], props => <a href="#" {...{...props, className: `af-class-button-dry af-class-red w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Send!</React.Fragment>}</a>)}</div>
                  <div className="af-class-email-contents w-col w-col-9">
                    {map(proxies['preview'], props => <div {...{...props, className: `af-class-email-preview ${props.className || ''}`}}>{props.children}</div>)}
                  </div>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default EmailsView

/* eslint-enable */