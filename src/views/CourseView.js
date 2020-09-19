/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import CourseMediaView from './CourseMediaView'
import CourseVideoWindowView from './CourseVideoWindowView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class CourseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseView

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
    const proxies = Controller !== CourseView ? transformProxies(this.props.children) : {
      'course-video-window': [],
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
            <CourseMediaView.Controller />
            {map(proxies['course-video-window'], props => <div {...{...props, className: `af-class-div-block-68 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <CourseVideoWindowView.Controller />
            </React.Fragment>}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default CourseView

/* eslint-enable */