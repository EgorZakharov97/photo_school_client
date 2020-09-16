/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class WorkshopDropdownView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/WorkshopDropdownController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = WorkshopDropdownView

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
    const proxies = Controller !== WorkshopDropdownView ? transformProxies(this.props.children) : {
      'background': [],
      'name': [],
      'starts': [],
      'description': [],
      'timeline': [],
      'will-learn': [],
      'chat-link': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);


          .progressbar {
            margin-top: 10px;
            counter-reset: step;
            clear: both;
            list-style: none;
            width: 700px;
            display: flex;
            align-items: center;
            padding-inline-start: 0;
          }
          .progress-header {
            text-align: center;
            padding-top: 30px;
            margin-bottom: 0;
          }
          .progressbar li {
            font-family: Exo, sans-serif;
            width: 20%;
            float: left;
            position: relative;
            text-align: center;
          }
          .progressbar li:before {
            content: counter(step);
            counter-increment: step;
            width: 25px;
            line-height: 25px;
            display: block;
            color: #FFFFFF;
            font-size: 16px;
            font-family: exo, sans-serif;
            font-weight: 600;
            border: 6px solid #ececec;
            background: #fadda6;
            border-radius: 19px;
            margin: 0 auto 4px;
          }
          .progressbar li:after {
            content: \'\';
            width: 85%;
            height: 3px;
            background: #B9B9B9;
            position: absolute;
            left: -42%;
            top: 17px;
            z-index: -1;
          }
          .progressbar li:first-child:after {
            content: none;
          }
          .progress-payment li {
            width: 50%;
          }
          .progressbar li.active:after,
          .progressbar li.active:before {
            background: #e74c32;
            color: white;
          }
          .progressbar li.complete:after {
            background: #e74c32;
          }
          .progressbar li.half-complete:after {
            background: linear-gradient(to right, #e74c32 50%, #B9B9B9 50%);
            color: white;
          }
          @media screen and (max-width: 1407px) {
            .progressbar {
              width: 400px;
            }
          }
          @media screen and (max-width: 1260px) {
            .progressbar {
              width: 100%;
              padding-bottom: 40px;
            }
            .header-splitter {
              display: block;
            }
            .section-heading.portal{
              margin-bottom: 30px;
            }
          }
          @media screen and (max-width: 991px) {
            .progressbar {
            }
          }
          @media screen and (max-width: 767px) {
            .progressbar {
            }
          }
          @media screen and (max-width: 479px) {
          }
        ` }} />
        <span className="af-view">
          <div id="workshop" className="af-class-dropdown">
            {map(proxies['background'], props => <div {...{...props, className: `af-class-dropdown-trigger ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              {map(proxies['name'], props => <div {...{...props, className: `af-class-text-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Male Pornogtaphy</React.Fragment>}</div>)}
              {map(proxies['starts'], props => <div {...{...props, className: `af-class-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Aug 20</React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
            <div className="af-class-dropdown-content">
              <div className="af-class-cladd-desc-wrapper">
                <div className="w-layout-grid af-class-grid-5">
                  <div id="w-node-9a5b1e1bca52-30ba94ae" className="af-class-course-card">
                    {map(proxies['description'], props => <div {...{...props, className: `af-class-rich-text-block-7 w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </React.Fragment>}</div>)}
                  </div>
                  <div id="w-node-9a5b1e1bca60-30ba94ae" className="af-class-course-card">
                    {map(proxies['timeline'], props => <div {...{...props, className: `w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
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
                  <div id="w-node-9a5b1e1bca75-30ba94ae" className="af-class-course-card">
                    {map(proxies['will-learn'], props => <div {...{...props, className: `w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <h2>What’s a Rich Text element?</h2>
                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                      <h4>Static and dynamic content editing</h4>
                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                      <h4>How to customize formatting for each rich text</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                    </React.Fragment>}</div>)}
                  </div>{map(proxies['chat-link'], props => <a id="w-node-5dabce7edb67-30ba94ae" href="#" {...{...props, className: `af-class-cors-register-now-2 af-class-courses ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Join workshop chat</React.Fragment>}</a>)}</div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default WorkshopDropdownView

/* eslint-enable */