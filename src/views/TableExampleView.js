/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class TableExampleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/TableExampleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = TableExampleView

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
    const proxies = Controller !== TableExampleView ? transformProxies(this.props.children) : {
      'delete': [],
      'img': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-table-element-image">
            <div className="af-class-div-block-40">{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-delete w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>{map(proxies['img'], props => <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" height width={150} alt {...props}>{props.children}</img>)}</div>
        </span>
      </span>
    )
  }
}

export default TableExampleView

/* eslint-enable */