/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AdminCouponsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminCouponsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminCouponsView

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
    const proxies = Controller !== AdminCouponsView ? transformProxies(this.props.children) : {
      'name': [],
      'discount': [],
      'code': [],
      'product': [],
      'ifExpires': [],
      'expieryBlock': [],
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
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3"><label htmlFor="name-6">Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder id="name-6" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="discount">Discpont Percentage</label>{map(proxies['discount'], props => <input type="number" maxLength={256} name="discount" data-name="discount" placeholder id="discount" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="code">Code</label>{map(proxies['code'], props => <input type="text" maxLength={256} name="code" data-name="code" placeholder id="code" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="product">Product</label>{map(proxies['product'], props => <select id="product" name="product" data-name="product" required {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value>Select one...</option><option value="workshop">Workshops</option><option value="course">Courses</option></React.Fragment>}</select>)}<label className="w-checkbox">{map(proxies['ifexpires'], props => <input type="checkbox" id="shouldExpire" name="shouldExpire" data-name="shouldExpire" data-w-id="f4baec93-a8cf-c68d-339e-1efeaa7dd39d" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="shouldExpire" className="af-class-checkbox-label w-form-label">Expires?</span></label>
            {map(proxies['expieryblock'], props => <div style={{display: 'none'}} {...{...props, className: `af-class-div-block-29 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment><label htmlFor="code-2">Expiration Date</label>
              {map(proxies['expires'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="expires" in="expires" /></React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}<label htmlFor="code-2">Usage</label>
            <div><label className="w-radio">{map(proxies['once'], props => <input type="radio" data-name="usage" id="onetime-2" name="usage" value="onetime" {...{...props, className: `w-form-formradioinput w-radio-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="onetime-2" className="w-form-label">One time only</span></label><label className="w-radio">{map(proxies['unlimited'], props => <input type="radio" data-name="usage" id="unlimited" name="usage" value="unlimited" {...{...props, className: `w-form-formradioinput w-radio-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="unlimited" className="w-form-label">Unlimited</span></label></div>
            <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
              {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
            </div>
          </form>
        </span>
      </span>
    )
  }
}

export default AdminCouponsView

/* eslint-enable */