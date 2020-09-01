/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class WorkshopView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/WorkshopController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = WorkshopView

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
    const proxies = Controller !== WorkshopView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div id="course-home" className="af-class-dropdown">
            <div className="af-class-dropdown-trigger">
              <div className="af-class-text-block">Course Name</div>
              <div className="af-class-date">Aug 20</div>
            </div>
            <div className="af-class-dropdown-content">
              <div className="af-class-cladd-desc-wrapper">
                <div className="w-layout-grid af-class-grid_course_home">
                  <div id="w-node-85e00b179692-067bab8e" className="af-class-course-card">
                    <div className="af-class-rich-text-block-7 w-richtext">
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </div>
                  </div>
                  <div id="w-node-85e00b1796a0-067bab8e" className="af-class-course-card">
                    <div className="af-class-rich-text-block-7 w-richtext">
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <ul role="list">
                        <li>A rich text element can be used with static or dynamic content.</li>
                        <li>A rich text element can be used with static or dynamic content.</li>
                        <li>A rich text element can be used with static or dynamic content.</li>
                        <li>A rich text element can be used with static or dynamic content.</li>
                      </ul>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </div>
                  </div>
                  <div id="w-node-85e00b1796b5-067bab8e" className="af-class-course-card">
                    <div className="af-class-rich-text-block-7 w-richtext">
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </div>
                  </div>
                  <div id="w-node-85e00b1796c3-067bab8e" className="af-class-course-card af-class-dates">
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Duration</div>
                      <div className="af-class-date-duration af-class-red">NAN</div>
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Price</div>
                      <div className="af-class-date-duration af-class-red">NAN</div>
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Discount</div>
                      <div className="af-class-date-duration af-class-red">NAN</div>
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Registration deadline</div>
                      <div className="af-class-date-duration">NAN</div>
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Places left</div>
                      <div className="af-class-date-duration">NAN</div>
                    </div>
                  </div><a desc="register" id="w-node-85e00b1796d8-067bab8e" href="#" className="af-class-cors-register-now-2 af-class-courses">Register now</a></div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default WorkshopView

/* eslint-enable */