/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class VideoLinkView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideoLinkController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideoLinkView

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
    const proxies = Controller !== VideoLinkView ? transformProxies(this.props.children) : {
      'link': [],
      'name': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-course-video-title-wrapper">
            {map(proxies['link'], props => <a href="#" {...{...props, className: `af-class-link-block-4 w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              {map(proxies['name'], props => <h3 {...{...props, className: `af-class-course-name ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Video title</React.Fragment>}</h3>)}
              <div className="af-class-text-block-21">Click to access</div>
            </React.Fragment>)}</a>)}
          </div>
        </span>
      </span>
    )
  }
}

export default VideoLinkView

/* eslint-enable */