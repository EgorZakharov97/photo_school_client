/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class VideoPortalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideoPortalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideoPortalView

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
    const proxies = Controller !== VideoPortalView ? transformProxies(this.props.children) : {
      'background': [],
      'heading': [],
      'description': [],
      'overlay': [],
      'play': [],
      'loched': [],
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
          <div>
            {map(proxies['background'], props => <a href="#" {...{...props, className: `af-class-video-wrapper w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              {map(proxies['heading'], props => <h3 {...{...props, className: `af-class-video-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lecture 1</React.Fragment>}</h3>)}
              {map(proxies['description'], props => <div {...{...props, className: `af-class-text-block-11 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment> - a short course on how to be a debil</React.Fragment>}</div>)}
              {map(proxies['overlay'], props => <div {...{...props, className: `af-class-course-overlay ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['play'], props => <div {...{...props, className: `af-class-tutorial-play ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="images/output-onlinepngtools.png" loading="lazy" width={70} alt className="af-class-course-hint" /></React.Fragment>}</div>)}
                {map(proxies['loched'], props => <div {...{...props, className: `af-class-course-locked ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><img src="images/output-onlinepngtools-1.png" loading="lazy" width={70} alt className="af-class-course-hint" />
                  <div className="af-class-text-block-22">Unlock with subscription</div>
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</a>)}
          </div>
        </span>
      </span>
    )
  }
}

export default VideoPortalView

/* eslint-enable */