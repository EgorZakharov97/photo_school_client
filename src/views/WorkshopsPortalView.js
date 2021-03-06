/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import DiscountCounterView from './DiscountCounterView'
import WorkshopDropdownView from './WorkshopDropdownView'

const scripts = [

]

let Controller

class WorkshopsPortalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/WorkshopsPortalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = WorkshopsPortalView

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
    const proxies = Controller !== WorkshopsPortalView ? transformProxies(this.props.children) : {
      'discount-counter': [],
      'workshops-container': [],
      'workshop-drowdown': [],
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
          <div className="af-class-tab-wrapper">
            <div className="af-class-splitter">
              <h3 className="af-class-section-heading"><span className="af-class-text-span-10">My </span>Workshops</h3>
              {map(proxies['discount-counter'], props => <div {...{...props, className: `w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <DiscountCounterView.Controller />
              </React.Fragment>}</div>)}
            </div>
            <div className="af-class-class-wrapper-portal">
              <a href="workshops.html" className="af-class-cors-register-now-2 af-class-courses w-inline-block">
                <div className="af-class-text-block-2">Browse Workshops</div>
              </a>
            </div>
            {map(proxies['workshops-container'], props => <div id="workshops-container" {...{...props, className: `w-layout-grid af-class-grid-6 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              {map(proxies['workshop-drowdown'], props => <div {...{...props, className: `af-class-dropdown-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <WorkshopDropdownView.Controller />
              </React.Fragment>}</div>)}
            </React.Fragment>)}</div>)}
          </div>
        </span>
      </span>
    )
  }
}

export default WorkshopsPortalView

/* eslint-enable */