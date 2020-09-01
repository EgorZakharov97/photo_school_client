/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class WorkshopPastView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/WorkshopPastController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = WorkshopPastView

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
    const proxies = Controller !== WorkshopPastView ? transformProxies(this.props.children) : {
      'name': [],
      'date': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="course-past" className="af-class-dropdown">
            <div desc="background" className="af-class-dropdown-trigger">
              {map(proxies['name'], props => <div desc="name" {...{...props, className: `af-class-text-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Course Name</React.Fragment>}</div>)}
              {map(proxies['date'], props => <div desc="dateStarts" {...{...props, className: `af-class-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Aug 20</React.Fragment>}</div>)}
            </div>
            <div className="af-class-dropdown-content">
              <div className="af-class-cladd-desc-wrapper">
                <div className="w-layout-grid af-class-grid_course_past">
                  <div id="w-node-00a980c730e8-067bab8e" className="af-class-course-card">
                    <div desc="description" className="af-class-rich-text-block-7 w-richtext">
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default WorkshopPastView

/* eslint-enable */