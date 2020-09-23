/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class EmailView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/EmailController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = EmailView

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
    const proxies = Controller !== EmailView ? transformProxies(this.props.children) : {
      'email': [],
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
          <div className="af-class-div-block-77">
            {map(proxies['email'], props => <div {...{...props, className: `af-class-text-block-29 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Peter.Gramm@gmail.com</React.Fragment>}</div>)}
            {map(proxies['delete'], props => <div {...{...props, className: `af-class-remove ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>X</React.Fragment>}</div>)}
          </div>
        </span>
      </span>
    )
  }
}

export default EmailView

/* eslint-enable */