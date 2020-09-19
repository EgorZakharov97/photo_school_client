/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import VideoLinkView from './VideoLinkView'
import CourseFileView from './CourseFileView'

const scripts = [

]

let Controller

class CourseMediaView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseMediaController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseMediaView

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
    const proxies = Controller !== CourseMediaView ? transformProxies(this.props.children) : {
      'portal': [],
      'exit': [],
      'exit': [],
      'back': [],
      'background': [],
      'name': [],
      'videos-container': [],
      'video-link': [],
      'files-container': [],
      'course-file': [],
      'examples-container': [],
      'example': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-div-block-69">
            <div className="af-class-solo-nav-wrapper">
              <div className="af-class-inner-menu">
                {map(proxies['portal'], props => <a href="/portal" {...{...props, className: `af-class-solo-nav-link w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <h6 className="af-class-heading-8">Portal</h6>
                </React.Fragment>}</a>)}<a href="index.html" className="af-class-logo-wrapper w-inline-block"><img src="images/Webp.net-resizeimage-8.png" loading="lazy" width={70} alt /></a>
                {map(proxies['exit'], props => <a href="/auth/logout" {...{...props, className: `af-class-solo-nav-link w-inline-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                  {map(proxies['exit'], props => <h6 {...{...props, className: `af-class-heading-8 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Exit</React.Fragment>}</h6>)}
                </React.Fragment>)}</a>)}
              </div>
            </div>
            <div className="af-class-container-10 w-container">
              <div className="af-class-back-wrapper">{map(proxies['back'], props => <a href="http://javascript:history.back()" {...{...props, className: `af-class-back ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>⟵ Back</React.Fragment>}</a>)}</div>
              {map(proxies['background'], props => <div {...{...props, className: `af-class-course-img af-class-course ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                <div className="af-class-course-name-wrapper">
                  {map(proxies['name'], props => <h2 {...{...props, className: `af-class-course-name af-class-course ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Course "course name"</React.Fragment>}</h2>)}
                </div>
              </React.Fragment>)}</div>)}
              <h2 className="af-class-table-heading">Videos</h2>
              {map(proxies['videos-container'], props => <div {...{...props, className: `af-class-course-video-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['video-link'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                  <VideoLinkView.Controller />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-divider" />
              <h2 className="af-class-table-heading">Attached files</h2>
              {map(proxies['files-container'], props => <div {...{...props, className: `af-class-course-files-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                {map(proxies['course-file'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                  <CourseFileView.Controller />
                </React.Fragment>}</div>)}
              </React.Fragment>)}</div>)}
              <div className="af-class-divider af-class-hidden" />
              <h2 className="af-class-table-heading af-class-hidden">Examples</h2>
              {map(proxies['examples-container'], props => <div {...{...props, className: `af-class-course-exaples ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>{map(proxies['example'], props => <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" width={200} height={200} alt {...{...props, className: `af-class-image-11 ${props.className || ''}`}}>{props.children}</img>)}</React.Fragment>)}</div>)}
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CourseMediaView

/* eslint-enable */