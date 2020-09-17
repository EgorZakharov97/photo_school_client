/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class LectureVideoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LectureVideoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LectureVideoView

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
    const proxies = Controller !== LectureVideoView ? transformProxies(this.props.children) : {
      'back': [],
      'name': [],
      'video': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-lecture-video-wrapper">
            <div style={{opacity: 1, display: 'flex'}} className="af-class-vatch-video">
              <div className="af-class-watch-popup">
                <div className="af-class-back-wrapper">{map(proxies['back'], props => <a href="#" {...{...props, className: `af-class-back ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>⟵ Back</React.Fragment>}</a>)}</div>
                <div data-w-id="43d61278-2dd0-fbf1-e85a-bf46d3ebddc8" className="af-class-close">X</div>
                <h1 className="af-class-puy-heading">Watch {map(proxies['name'], props => <span {...{...props, className: `af-class-text-span-44 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lecture 1</React.Fragment>}</span>)}</h1>
                {map(proxies['video'], props => <div {...{...props, className: `af-class-play-video-container ${props.className || ''}`}}>{props.children}</div>)}
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default LectureVideoView

/* eslint-enable */