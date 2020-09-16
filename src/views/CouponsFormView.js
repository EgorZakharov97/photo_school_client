/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CouponsFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CouponsFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CouponsFormView

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
    const proxies = Controller !== CouponsFormView ? transformProxies(this.props.children) : {
      'name': [],
      'discount': [],
      'code': [],
      'product': [],
      'expires': [],
      'once': [],
      'unlimited': [],
      'submit': [],
      'message': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="w-form">
            <form id="email-form-3" name="email-form-3" data-name="Email Form 3"><label htmlFor="name-6">Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder id="name-6" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="discount">Discpont Percentage</label>{map(proxies['discount'], props => <input type="number" maxLength={256} name="discount" data-name="discount" placeholder id="discount" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="code">Code</label>{map(proxies['code'], props => <input type="text" maxLength={256} name="code" data-name="code" placeholder id="code" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="product">Product</label>{map(proxies['product'], props => <select id="product" name="product" data-name="product" required {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value>Select one...</option><option value="workshop">Workshop</option><option value="course">Courses</option></React.Fragment>}</select>)}<label htmlFor="code-2">Expiration Date (leave empty if does not expire)</label>
              {map(proxies['expires'], props => <div {...{...props, className: `af-class-html-embed-7 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="expires" in="expires" /></React.Fragment>}</div>)}<label htmlFor="code-2">Usage</label>
              <div><label className="w-radio">{map(proxies['once'], props => <input type="radio" data-name="usage" id="onetime-2" name="usage" value="onetime" {...{...props, className: `w-form-formradioinput w-radio-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="onetime-2" className="w-form-label">One time only</span></label><label className="w-radio">{map(proxies['unlimited'], props => <input type="radio" data-name="usage" id="unlimited" name="usage" value="unlimited" {...{...props, className: `w-form-formradioinput w-radio-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="unlimited" className="w-form-label">Unlimited</span></label></div>
              <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
                {map(proxies['message'], props => <div {...{...props, className: `af-class-user-message ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CouponsFormView

/* eslint-enable */