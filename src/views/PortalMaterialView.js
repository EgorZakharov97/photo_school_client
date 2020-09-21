/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PortalMaterialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PortalMaterialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PortalMaterialView

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
    const proxies = Controller !== PortalMaterialView ? transformProxies(this.props.children) : {
      'background': [],
      'name': [],
      'link': [],
      'unlock': [],
      'coming-soon': [],
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
          <div className="af-class-reading-container">
            {map(proxies['background'], props => <div {...{...props, className: `af-class-reading-pic ${props.className || ''}`}}>{props.children}</div>)}
            <div id="material" className="af-class-reading-content">
              {map(proxies['name'], props => <h1 {...{...props, className: `af-class-heading-14 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Posing Guide by Olya Shendrik</React.Fragment>}</h1>)}{map(proxies['link'], props => <a href="#" {...{...props, className: `af-class-heading-15 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Read</React.Fragment>}</a>)}{map(proxies['unlock'], props => <a href="#" {...{...props, className: `af-class-heading-15 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Unlock</React.Fragment>}</a>)}{map(proxies['coming-soon'], props => <a href="#" {...{...props, className: `af-class-heading-15 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Coming Soon</React.Fragment>}</a>)}</div>
          </div>
        </span>
      </span>
    )
  }
}

export default PortalMaterialView

/* eslint-enable */