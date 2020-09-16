/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PortalWindowsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PortalWindowsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PortalWindowsView

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
    const proxies = Controller !== PortalWindowsView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-play-video">
              <div className="af-class-course-video">
                <div className="af-class-back-wrapper"><a href="http://javascript:history.back()" className="af-class-back">⟵ Back</a></div>
                <h2 className="af-class-table-heading">Course "course name"</h2>
                <div className="af-class-text-block-21 af-class-video">Click to access</div>
                <div className="af-class-video-2 w-video w-embed" />
                <div className="af-class-divider af-class-fat" />
              </div>
            </div>
            <div className="af-class-popup-window af-class-portal af-class-hidden">
              <div className="af-class-buy-popup">
                <div data-w-id="6db30950-5186-79ad-9d6e-94c6bd9acfa7" className="af-class-close">X</div>
                <h1 className="af-class-puy-heading">Unlock <span desc="name" className="af-class-text-span-43">thing</span></h1>
                <div className="af-class-item-container">
                  <h4 className="af-class-heading-19">Thing</h4>
                  <div className="af-class-text-block-23">$nn</div>
                </div>
                <div className="af-class-buy-option"><a href="#" className="af-class-button af-class-buy w-button">Get it with subscription</a></div>
                <div className="af-class-buy-option"><a href="#" className="af-class-button af-class-red af-class-buy w-button">Get it forever for $nn</a></div>
              </div>
            </div>
            <div style={{opacity: 1, display: 'flex'}} className="af-class-vatch-video">
              <div className="af-class-watch-popup">
                <div data-w-id="43d61278-2dd0-fbf1-e85a-bf46d3ebddc8" className="af-class-close">X</div>
                <h1 className="af-class-puy-heading">Watch <span desc="name" className="af-class-text-span-44">Lecture 1</span></h1>
                <div className="af-class-video-3 w-video w-embed" />
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default PortalWindowsView

/* eslint-enable */