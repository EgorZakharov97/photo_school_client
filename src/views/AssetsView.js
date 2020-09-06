/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import VideoView from './VideoView'
import FileView from './FileView'
import ExampleView from './ExampleView'

const scripts = [

]

let Controller

class AssetsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AssetsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AssetsView

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
    const proxies = Controller !== AssetsView ? transformProxies(this.props.children) : {
      'videos-container': [],
      'video': [],
      'new-video': [],
      'files-container': [],
      'file': [],
      'new-file': [],
      'example-container': [],
      'example': [],
      'new-examples': [],
      'submit': [],
      'files': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-assets-wrapper">
            <div className="af-class-videos">
              <h2 className="af-class-heading-17">Videos</h2>
              {map(proxies['videos-container'], props => <div {...{...props, className: `af-class-videos-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['video'], props => <div {...{...props, className: `af-class-course-video-title-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <VideoView.Controller />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}<label htmlFor="description-5">Add video</label>
              {map(proxies['new-video'], props => <div {...props}>{props.children}</div>)}
            </div>
            <div className="af-class-files">
              <h2 className="af-class-heading-17">Files</h2>
              {map(proxies['files-container'], props => <div {...{...props, className: `af-class-videos-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['file'], props => <div {...{...props, className: `af-class-course-video-title-wrapper af-class-files ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <FileView.Controller />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}<label htmlFor="description-5">Add file</label>
              {map(proxies['new-file'], props => <div {...props}>{props.children}</div>)}
            </div>
            <div className="af-class-examples">
              <h2 className="af-class-heading-17">Examples</h2>
              {map(proxies['example-container'], props => <div {...{...props, className: `af-class-videos-container af-class-images ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['example'], props => <div {...{...props, className: `af-class-course-video-title-wrapper af-class-image ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <ExampleView.Controller />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}<label htmlFor="description-5" className="af-class-field-label-7">Add examples</label>
              {map(proxies['new-examples'], props => <div {...{...props, className: `af-class-course-video-title-wrapper af-class-files ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                <div className="af-class-div-block-39 af-class-files">
                  <div className="af-class-div-block-40">{map(proxies['submit'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Add</React.Fragment>}</a>)}</div>
                  {map(proxies['files'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="examples" multifile placeholder="Choose Image" /></React.Fragment>}</div>)}
                </div>
              </React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default AssetsView

/* eslint-enable */