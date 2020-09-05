/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class FileView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FileController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FileView

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
    const proxies = Controller !== FileView ? transformProxies(this.props.children) : {
      'update': [],
      'delete': [],
      'name': [],
      'file': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-div-block-39">
            <div className="af-class-div-block-40">{map(proxies['update'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Update</React.Fragment>}</a>)}{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-delete w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>{map(proxies['name'], props => <input type="text" maxLength={256} name="fTitle" data-name="fTitle" placeholder="File Name" id="fTitle" required {...{...props, className: `af-class-video-title-input af-class-files w-input ${props.className || ''}`}}>{props.children}</input>)}
            {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="image" placeholder="Choose Image" /></React.Fragment>}</div>)}
          </div>
        </span>
      </span>
    )
  }
}

export default FileView

/* eslint-enable */