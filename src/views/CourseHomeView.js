/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CourseHomeView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseHomeController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseHomeView

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
    const proxies = Controller !== CourseHomeView ? transformProxies(this.props.children) : {
      'name': [],
      'start-date': [],
      'description': [],
      'will-learn': [],
      'timeline': [],
      'duration': [],
      'price': [],
      'deadline': [],
      'places': [],
      'register': [],
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
            <div desc="background" className="af-class-dropdown-trigger">
              {map(proxies['name'], props => <div {...{...props, className: `af-class-text-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Course Name</React.Fragment>}</div>)}
              {map(proxies['start-date'], props => <div {...{...props, className: `af-class-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Aug 20</React.Fragment>}</div>)}
            </div>
            <div className="af-class-dropdown-content">
              <div className="af-class-cladd-desc-wrapper">
                <div className="w-layout-grid af-class-grid_course_home">
                  <div id="w-node-812743f3e71d-fbba94a3" className="af-class-course-card">
                    {map(proxies['description'], props => <div {...{...props, className: `af-class-rich-text-block-7 w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </React.Fragment>}</div>)}
                  </div>
                  <div id="w-node-812743f3e72b-fbba94a3" className="af-class-course-card">
                    {map(proxies['will-learn'], props => <div {...{...props, className: `af-class-rich-text-block-7 w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
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
                    </React.Fragment>}</div>)}
                  </div>
                  <div id="w-node-812743f3e740-fbba94a3" className="af-class-course-card">
                    {map(proxies['timeline'], props => <div {...{...props, className: `af-class-rich-text-block-7 w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </React.Fragment>}</div>)}
                  </div>
                  <div id="w-node-812743f3e74e-fbba94a3" className="af-class-course-card af-class-dates">
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Duration</div>
                      {map(proxies['duration'], props => <div {...{...props, className: `af-class-date-duration af-class-red ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>NAN</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Price</div>
                      {map(proxies['price'], props => <div {...{...props, className: `af-class-date-duration af-class-red ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>NAN</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Registration deadline</div>
                      {map(proxies['deadline'], props => <div {...{...props, className: `af-class-date-duration ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>NAN</React.Fragment>}</div>)}
                    </div>
                    <div className="af-class-dateblock">
                      <div className="af-class-date-phrase">Places left</div>
                      {map(proxies['places'], props => <div {...{...props, className: `af-class-date-duration ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>NAN</React.Fragment>}</div>)}
                    </div>
                  </div>{map(proxies['register'], props => <a id="w-node-812743f3e763-fbba94a3" href="#" {...{...props, className: `af-class-cors-register-now-2 af-class-courses ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Register now</React.Fragment>}</a>)}</div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CourseHomeView

/* eslint-enable */