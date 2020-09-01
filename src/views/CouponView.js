/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CouponView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CouponController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CouponView

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
    const proxies = Controller !== CouponView ? transformProxies(this.props.children) : {
      'name': [],
      'code': [],
      'product': [],
      'usage': [],
      'expires': [],
      'discount': [],
      'used': [],
      'delete': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="coupon" className="af-class-coupon">
            {map(proxies['name'], props => <h3 {...{...props, className: `af-class-cpn-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Coupon name</React.Fragment>}</h3>)}
            {map(proxies['code'], props => <h4 {...props}>{props.children ? props.children : <React.Fragment>CPNCODE12</React.Fragment>}</h4>)}
            <div className="af-class-cpn-splitter">
              <div>Valid for:</div>
              {map(proxies['product'], props => <div {...props}>{props.children ? props.children : <React.Fragment>product</React.Fragment>}</div>)}
            </div>
            <div className="af-class-cpn-splitter">
              <div>Usage: </div>
              {map(proxies['usage'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Unlimited</React.Fragment>}</div>)}
            </div>
            <div className="af-class-cpn-splitter">
              <div>Expires: </div>
              {map(proxies['expires'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Date</React.Fragment>}</div>)}
            </div>
            <div className="af-class-cpn-splitter">
              <div>Discount:</div>
              {map(proxies['discount'], props => <div {...props}>{props.children ? props.children : <React.Fragment>0%</React.Fragment>}</div>)}
            </div>
            <div className="af-class-cpn-splitter">
              <div>Was used:</div>
              {map(proxies['used'], props => <div {...props}>{props.children ? props.children : <React.Fragment>n times</React.Fragment>}</div>)}
            </div>{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>
        </span>
      </span>
    )
  }
}

export default CouponView

/* eslint-enable */