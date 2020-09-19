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