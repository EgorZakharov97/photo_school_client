/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import CouponView from './CouponView'

const scripts = [

]

let Controller

class CouponsContainerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CouponsContainerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CouponsContainerView

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
    const proxies = Controller !== CouponsContainerView ? transformProxies(this.props.children) : {
      'coupon': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);


          	.ql-editor {
            	min-height: 300px;
            }
        ` }} />
        <span className="af-view">
          <div id="coupon-container" className="af-class-all-coupons">
            {map(proxies['coupon'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
              <CouponView.Controller />
            </React.Fragment>}</div>)}
          </div>
        </span>
      </span>
    )
  }
}

export default CouponsContainerView

/* eslint-enable */