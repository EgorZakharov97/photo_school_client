/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class DiscountCounterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DiscountCounterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DiscountCounterView

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
    const proxies = Controller !== DiscountCounterView ? transformProxies(this.props.children) : {
      'heading': [],
      'one': [],
      'two': [],
      'three': [],
      'four': [],
      'five': [],
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
          <div className="af-class-progress-wrapper">
            {map(proxies['heading'], props => <h3 desc="heading" {...{...props, className: `af-class-progress-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              Sample heading
            </React.Fragment>}</h3>)}
            <ul className="af-class-progressbar">
              {map(proxies['one'], props => <li {...{...props, className: `af-class-active ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>10% Discount</React.Fragment>}</li>)}
              {map(proxies['two'], props => <li {...{...props, className: `af-class-half-complete ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>15% Discount</React.Fragment>}</li>)}
              {map(proxies['three'], props => <li {...{...props, className: `af-class-half-complete ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>20% Discount</React.Fragment>}</li>)}
              {map(proxies['four'], props => <li {...{...props, className: `af-class-half-complete ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>25% Discount</React.Fragment>}</li>)}
              {map(proxies['five'], props => <li {...{...props, className: `af-class-complete ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Free Course</React.Fragment>}</li>)}
            </ul>
          </div>
        </span>
      </span>
    )
  }
}

export default DiscountCounterView

/* eslint-enable */