/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class VideoView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/VideoController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = VideoView

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
    const proxies = Controller !== VideoView ? transformProxies(this.props.children) : {
      'update': [],
      'delete': [],
      'title': [],
      'link': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-div-block-39">
            <div className="af-class-div-block-40">{map(proxies['update'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Update</React.Fragment>}</a>)}{map(proxies['delete'], props => <a href="#" {...{...props, className: `af-class-button af-class-delete w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Delete</React.Fragment>}</a>)}</div>{map(proxies['title'], props => <input type="text" maxLength={256} name="title-3" data-name="Title 3" placeholder="Video Title" id="title-3" required {...{...props, className: `af-class-video-title-input w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['link'], props => <input type="text" maxLength={256} name="embed-2" data-name="Embed 2" placeholder="Link" id="embed-2" required {...{...props, className: `af-class-video-embed-input w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
        </span>
      </span>
    )
  }
}

export default VideoView

/* eslint-enable */