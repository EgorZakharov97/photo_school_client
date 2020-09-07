/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class TableFileView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/TableFileController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = TableFileView

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
    const proxies = Controller !== TableFileView ? transformProxies(this.props.children) : {
      'index': [],
      'name': [],
      'file': [],
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
            {map(proxies['index'], props => <div {...{...props, className: `af-class-table-index ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1.</React.Fragment>}</div>)}{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="File Name" id="name-19" required {...{...props, className: `af-class-table-input af-class-title w-input ${props.className || ''}`}}>{props.children}</input>)}
            {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="file" /></React.Fragment>}</div>)}
            <div className="af-class-table-buttons">{map(proxies['update'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Update</React.Fragment>}</a>)}{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-delete w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>
          </div>
        </span>
      </span>
    )
  }
}

export default TableFileView

/* eslint-enable */