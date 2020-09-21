/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PastChallengeView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PastChallengeController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PastChallengeView

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
    const proxies = Controller !== PastChallengeView ? transformProxies(this.props.children) : {
      'name': [],
      'name': [],
      'image': [],
      'description': [],
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
          <div className="af-class-current-challenge">
            <div className="af-class-challenge">
              {map(proxies['name'], props => <h1 id="w-node-98622409b3d9-30ba94ae" {...{...props, className: `af-class-heading-20 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>Name{map(proxies['name'], props => <span {...props}>{props.children}</span>)}</React.Fragment>)}</h1>)}
              {map(proxies['image'], props => <div id="w-node-98622409b3dd-30ba94ae" {...{...props, className: `af-class-challenge-img ${props.className || ''}`}}>{props.children}</div>)}
              <div id="w-node-98622409b3de-30ba94ae" className="af-class-div-block-70">
                {map(proxies['description'], props => <div {...{...props, className: `af-class-rich-text-block-8 w-richtext ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <h2>What’s a Rich Text element?</h2>
                  <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                  <h4>Static and dynamic content editing</h4>
                  <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                  <h4>How to customize formatting for each rich text</h4>
                  <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                </React.Fragment>}</div>)}
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PastChallengeView

/* eslint-enable */