/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class GetSubscriptionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GetSubscriptionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GetSubscriptionView

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
    const proxies = Controller !== GetSubscriptionView ? transformProxies(this.props.children) : {
      'close': [],
      'name': [],
      'background': [],
      'name2': [],
      'price': [],
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
          <div className="af-class-get-subscription-window">
            <div style={{display: 'flex', opacity: 1}} className="af-class-popup-window af-class-portal">
              <div className="af-class-buy-popup">
                {map(proxies['close'], props => <div data-w-id="6db30950-5186-79ad-9d6e-94c6bd9acfa7" {...{...props, className: `af-class-close ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>X</React.Fragment>}</div>)}
                <h1 className="af-class-puy-heading">Unlock {map(proxies['name'], props => <span {...{...props, className: `af-class-text-span-43 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>thing</React.Fragment>}</span>)}</h1>
                {map(proxies['background'], props => <div {...{...props, className: `af-class-item-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                  {map(proxies['name2'], props => <h4 {...{...props, className: `af-class-heading-19 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Thing</React.Fragment>}</h4>)}
                  {map(proxies['price'], props => <div {...{...props, className: `af-class-text-block-23 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>$nn</React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
                <div className="af-class-buy-option">{map(proxies['submit'], props => <a href="#" {...{...props, className: `af-class-button af-class-red af-class-buy w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get it with subscription</React.Fragment>}</a>)}</div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default GetSubscriptionView

/* eslint-enable */