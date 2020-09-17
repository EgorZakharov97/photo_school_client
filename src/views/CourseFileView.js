/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CourseFileView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseFileController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseFileView

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
    const proxies = Controller !== CourseFileView ? transformProxies(this.props.children) : {
      'link': [],
      'name': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-course-file">{map(proxies['link'], props => <a href="#" {...{...props, className: `af-class-link-block-3 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment><img src="images/file.png" loading="lazy" width={40} alt />{map(proxies['name'], props => <h3 {...{...props, className: `af-class-course-name af-class-file ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>File name</React.Fragment>}</h3>)}</React.Fragment>)}</a>)}</div>
        </span>
      </span>
    )
  }
}

export default CourseFileView

/* eslint-enable */