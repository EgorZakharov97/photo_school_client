/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import UserInlineView from './UserInlineView'

const scripts = [

]

let Controller

class AdminUsersView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminUsersController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminUsersView

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
    const proxies = Controller !== AdminUsersView ? transformProxies(this.props.children) : {
      'user-count': [],
      'all-users': [],
      'subscribers': [],
      'not-users': [],
      'select-all': [],
      'to-emails': [],
      'users-container': [],
      'user-inline': [],
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
            <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">U</span>sers</h3>
            <div className="af-class-text-block-28">Users count:&nbsp;{map(proxies['user-count'], props => <span {...props}>{props.children ? props.children : <React.Fragment>###</React.Fragment>}</span>)}</div>
            <div className="af-class-users-contents">
              <div className="af-class-selector">{map(proxies['all-users'], props => <a href="#" {...{...props, className: `af-class-button-dry af-class-size w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>All users</React.Fragment>}</a>)}{map(proxies['subscribers'], props => <a href="#" {...{...props, className: `af-class-button-dry af-class-size w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Subscribers</React.Fragment>}</a>)}{map(proxies['not-users'], props => <a href="#" {...{...props, className: `af-class-button-dry af-class-size w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Not users</React.Fragment>}</a>)}</div>
              <div className="af-class-users-list">
                <div className="af-class-user-inline-heading">
                  <div className="af-class-select">
                    {map(proxies['select-all'], props => <div {...{...props, className: `af-class-html-embed-9 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="checkbox" name="select" /></React.Fragment>}</div>)}
                  </div>
                  <div className="af-class-user-inline-heading2">Username</div>
                  <div className="af-class-user-inline-heading2">Email</div>
                  <div className="af-class-user-inline-heading2">Phone</div>
                  <div className="af-class-inline-action af-class-heading">{map(proxies['to-emails'], props => <a href="#" {...{...props, className: `af-class-button-2 w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Send Email</React.Fragment>}</a>)}</div>
                </div>
                {map(proxies['users-container'], props => <div {...{...props, className: `af-class-users-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                  {map(proxies['user-inline'], props => <div {...{...props, className: `af-class-user-inline-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <UserInlineView.Controller />
                  </React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default AdminUsersView

/* eslint-enable */