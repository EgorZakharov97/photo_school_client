/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class NewExamplesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NewExamplesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NewExamplesView

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
    const proxies = Controller !== NewExamplesView ? transformProxies(this.props.children) : {
      'submit': [],
      'files': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-div-block-39 af-class-files">
            <div className="af-class-div-block-40">{map(proxies['submit'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Add</React.Fragment>}</a>)}</div>
            {map(proxies['files'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="image" multifile placeholder="Choose Image" /></React.Fragment>}</div>)}
          </div>
        </span>
      </span>
    )
  }
}

export default NewExamplesView

/* eslint-enable */