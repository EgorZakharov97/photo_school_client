/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import VideoLinkView from './VideoLinkView'
import CourseFileView from './CourseFileView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class CourseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CourseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CourseView

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
    const proxies = Controller !== CourseView ? transformProxies(this.props.children) : {
      'exit': [],
      'back': [],
      'nackground': [],
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
          <div>
            <div className="af-class-solo-nav-wrapper">
              <div className="af-class-inner-menu">
                <a href="/portal" className="af-class-solo-nav-link w-inline-block">
                  <h6 className="af-class-heading-8">Portal</h6>
                </a><a href="index.html" className="af-class-logo-wrapper w-inline-block"><img src="images/Webp.net-resizeimage-8.png" loading="lazy" width={70} alt /></a>
                <a href="/auth/logout" className="af-class-solo-nav-link w-inline-block">
                  {map(proxies['exit'], props => <h6 {...{...props, className: `af-class-heading-8 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Exit</React.Fragment>}</h6>)}
                </a>
              </div>
            </div>
            <div className="af-class-container-10 w-container">
              <div className="af-class-back-wrapper">{map(proxies['back'], props => <a href="http://javascript:history.back()" {...{...props, className: `af-class-back ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>⟵ Back</React.Fragment>}</a>)}</div>
              {map(proxies['nackground'], props => <div {...{...props, className: `af-class-course-img af-class-course ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
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
              <div className="af-class-divider" />
              <h2 className="af-class-table-heading">Examples</h2>
              {map(proxies['examples-container'], props => <div {...{...props, className: `af-class-course-exaples ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>{map(proxies['example'], props => <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy" width={200} height={200} alt {...props}>{props.children}</img>)}</React.Fragment>)}</div>)}
            </div>
            <footer id="footer" className="af-class-footer">
              <div className="w-container">
                <div className="af-class-footer-flex-container"><a href="#" className="af-class-footer-logo-link w-inline-block"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 70px, (max-width: 767px) 13vw, 100px" alt className="af-class-image-6" /></a>
                  <div>
                    <h2 className="af-class-footer-heading">Our policies</h2>
                    <ul role="list" className="w-list-unstyled">
                      <li><a href="/disclaimer" className="af-class-footer-link">Disclaimer</a></li>
                      <li><a href="/termsAndConditions" className="af-class-footer-link">Terms and conditions</a></li>
                      <li><a href="http://returnPolicy" className="af-class-footer-link">Return policy</a></li>
                      <li><a href="/privacyPolicy" className="af-class-footer-link">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="af-class-footer-heading">Our instructors</h2>
                    <ul role="list" className="w-list-unstyled">
                      <li><a href="https://www.instagram.com/shumov_danny/" className="af-class-footer-link">@shumov_danny</a></li>
                      <li><a href="https://www.instagram.com/olya_shendrik/" className="af-class-footer-link">@olya_shendrik</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="af-class-footer-heading">Our contacts</h2>
                    <ul role="list" className="w-list-unstyled">
                      <li><a href="mailto:help@photolite.academy" className="af-class-footer-link">help@photolite.academy</a></li>
                      <li><a href="mailto:shumov@photolite.academy" className="af-class-footer-link">shumov@photolite.academy</a></li>
                      <li><a href="mailto:shendrik@photolite.academy" className="af-class-footer-link">shendrik@photolite.academy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="af-class-text-block-14">Copyright © 2020 Spark Photography. All rights reserved.</div>
              </div>
            </footer>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default CourseView

/* eslint-enable */