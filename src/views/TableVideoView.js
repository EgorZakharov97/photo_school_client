/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class TableVideoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/TableVideoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = TableVideoView

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
    const proxies = Controller !== TableVideoView ? transformProxies(this.props.children) : {
      'index': [],
      'name': [],
      'input': [],
      'update': [],
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
          <div className="af-class-table-element">
            {map(proxies['index'], props => <div {...{...props, className: `af-class-table-index ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1.</React.Fragment>}</div>)}{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Video Name" id="name-13" required {...{...props, className: `af-class-table-input af-class-title w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['input'], props => <input type="text" maxLength={256} name="link" data-name="link" placeholder="Link" id="link-2" required {...{...props, className: `af-class-table-input w-input ${props.className || ''}`}}>{props.children}</input>)}
            <div className="af-class-table-buttons">{map(proxies['update'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Update</React.Fragment>}</a>)}{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-delete w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>
          </div>
        </span>
      </span>
    )
  }
}

export default TableVideoView

/* eslint-enable */