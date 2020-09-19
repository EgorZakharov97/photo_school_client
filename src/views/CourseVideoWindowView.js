/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CourseVideoWindowView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseVideoWindowController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseVideoWindowView

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
    const proxies = Controller !== CourseVideoWindowView ? transformProxies(this.props.children) : {
      'back': [],
      'next': [],
      'name': [],
      'video': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-play-video-wrapper">
            <div className="af-class-play-video">
              <div className="af-class-course-video">
                <div className="af-class-back-wrapper">{map(proxies['back'], props => <a href="#" {...{...props, className: `af-class-back ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>⟵ Back</React.Fragment>}</a>)}{map(proxies['next'], props => <a href="#" {...{...props, className: `af-class-back ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment> Next→</React.Fragment>}</a>)}</div>
                {map(proxies['name'], props => <h2 {...{...props, className: `af-class-table-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Course "course name"</React.Fragment>}</h2>)}
                <div className="af-class-text-block-21 af-class-video">Click to access</div>
                {map(proxies['video'], props => <div {...{...props, className: `af-class-play-video-container ${props.className || ''}`}}>{props.children}</div>)}
                <div className="af-class-divider af-class-fat" />
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CourseVideoWindowView

/* eslint-enable */