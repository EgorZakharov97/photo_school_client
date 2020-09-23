/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class UserInlineView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserInlineController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserInlineView

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
    const proxies = Controller !== UserInlineView ? transformProxies(this.props.children) : {
      'select': [],
      'name': [],
      'email': [],
      'phone': [],
      'subscription': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-user-inline">
            <div className="af-class-select">
              {map(proxies['select'], props => <div {...{...props, className: `af-class-html-embed-9 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="checkbox" name="select" /></React.Fragment>}</div>)}
            </div>
            {map(proxies['name'], props => <div {...{...props, className: `af-class-user-inline-cell ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Peter Gramm</React.Fragment>}</div>)}
            {map(proxies['email'], props => <div {...{...props, className: `af-class-user-inline-cell ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Peter.Gramm@gmail.com</React.Fragment>}</div>)}
            {map(proxies['phone'], props => <div {...{...props, className: `af-class-user-inline-cell ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>7835861</React.Fragment>}</div>)}
            <div className="af-class-inline-action">{map(proxies['subscription'], props => <a href="#" {...{...props, className: `af-class-button-2 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Grant subscription</React.Fragment>}</a>)}</div>
          </div>
        </span>
      </span>
    )
  }
}

export default UserInlineView

/* eslint-enable */