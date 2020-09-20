/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import WorkshopsPortalView from './WorkshopsPortalView'
import PortalCoursesView from './PortalCoursesView'
import PortalVideosView from './PortalVideosView'
import MaterialsPortalView from './MaterialsPortalView'
import PresetsPortalView from './PresetsPortalView'
import PortalChallengesView from './PortalChallengesView'
import PortalProfileView from './PortalProfileView'
import TutorialVideoWindowView from './TutorialVideoWindowView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  Promise.resolve("$(\".tab-button\").click(function(t){t.preventDefault(),$(\".tab-button\").removeClass(\"tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"tab-button-active\")}),$(\".af-class-tab-button\").click(function(t){t.preventDefault(),$(\".af-class-tab-button\").removeClass(\"af-class-tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"af-class-tab-button-active\")});"),
]

let Controller

class MembersPortalView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MembersPortalController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MembersPortalView

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
    const proxies = Controller !== MembersPortalView ? transformProxies(this.props.children) : {
      'logout': [],
      'workshops-link': [],
      'admin': [],
      'workshops': [],
      'portal-courses': [],
      'portal-videos': [],
      'materials-portal': [],
      'presets-portal': [],
      'portal-challenges': [],
      'portal-profile': [],
      'tutorial-video-window': [],
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
          <div>
            <div className="af-class-section-portal">
              <div className="af-class-portal-container">
                <div data-collapse="medium" data-animation="over-left" data-duration={400} role="banner" className="af-class-portal-nav w-nav">
                  <div>
                    <div className="af-class-window-nav">
                      <div className="af-class-menu-button-2 w-nav-button">
                        <div className="af-class-icon w-icon-nav-menu" />
                      </div>
                      <a href="index.html" className="af-class-login-nav-link af-class-portal w-inline-block">
                        <h3 className="af-class-heading-13">HOME</h3>
                      </a><a href="#" className="w-nav-brand"><img src="images/Masterwhite.png" width={60} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 100vw, 60px" alt className="af-class-image-4" /></a>
                      {map(proxies['logout'], props => <a href="#" {...{...props, className: `af-class-login-nav-link w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <h3 className="af-class-heading-13">Exit</h3>
                      </React.Fragment>}</a>)}
                    </div>
                  </div>
                  <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                    <h1 id="username" className="af-class-member-name-heading" />
                    <div className="af-class-portal-tab-links">{map(proxies['workshops-link'], props => <a id="nav-workshops" data-w-id="35e95c24-2a78-7c37-9a14-36416311b6c5" href="#" {...{...props, className: `af-class-tab-button w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Workshops</React.Fragment>}</a>)}<a id="nav-tutorials" data-w-id="855b3228-1593-9d07-6d1c-8b8c19a15555" href="#" className="af-class-tab-button w-button">Tutorials</a><a id="nav-courses" data-w-id="fad969ac-8ee0-4af1-0d61-da2a77b820c8" href="#" className="af-class-tab-button w-button">Courses</a><a id="nav-materials" data-w-id="2fa5e394-bbd3-fb74-e84b-42e476298583" href="#" className="af-class-tab-button w-button">Materials</a><a id="nav-presets" data-w-id="97d85560-c95d-b340-727d-83b5ba47cfed" href="#" className="af-class-tab-button w-button">Presets</a><a id="nav-profile" data-w-id="f6e306c2-e50a-6d6d-a5d9-5e39c8ac9a10" href="#" className="af-class-tab-button w-button">Profile</a>
                      <div className="af-class-slecial"><a id="nav-challenge" data-w-id="66cf1bc1-a188-62eb-a97b-bb330800f686" href="#" className="af-class-tab-button af-class-button af-class-on-black af-class-portal w-button">Weekly Challenge</a><a href="#" className="af-class-button af-class-red af-class-portal w-button">Join Chat</a>{map(proxies['admin'], props => <a href="admin.html" {...{...props, className: `af-class-button af-class-red af-class-portal w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Admin</React.Fragment>}</a>)}</div>
                    </div>
                  </nav>
                </div>
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-2 w-tabs">
                  <div className="af-class-tabs-menu-3 w-tab-menu">
                    <a data-w-tab="Workshops" className="w-inline-block w-tab-link">
                      <div>Workshops</div>
                    </a>
                    <a data-w-tab="Courses" className="w-inline-block w-tab-link">
                      <div>Courses</div>
                    </a>
                    <a data-w-tab="Tutorials" className="w-inline-block w-tab-link">
                      <div>Tutorials</div>
                    </a>
                    <a data-w-tab="Materials" className="w-inline-block w-tab-link">
                      <div>Materials</div>
                    </a>
                    <a data-w-tab="Presets" className="w-inline-block w-tab-link">
                      <div>Presets</div>
                    </a>
                    <a data-w-tab="Weekly challenge" className="w-inline-block w-tab-link">
                      <div>Weekly Challenge</div>
                    </a>
                    <a data-w-tab="Profile" className="w-inline-block w-tab-link w--current">
                      <div>Profile</div>
                    </a>
                  </div>
                  <div className="af-class-tabs-content w-tab-content">
                    <div data-w-tab="Workshops" className="w-tab-pane">
                      {map(proxies['workshops'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <WorkshopsPortalView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Courses" className="af-class-tab-pane-courses w-tab-pane">
                      {map(proxies['portal-courses'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <PortalCoursesView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Tutorials" className="af-class-tab-pane-tutorials w-tab-pane">
                      {map(proxies['portal-videos'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <PortalVideosView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Materials" className="w-tab-pane">
                      {map(proxies['materials-portal'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <MaterialsPortalView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Presets" className="w-tab-pane">
                      {map(proxies['presets-portal'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <PresetsPortalView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Weekly challenge" className="af-class-tab-pane-weekly-challenge w-tab-pane">
                      {map(proxies['portal-challenges'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <PortalChallengesView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Profile" className="af-class-tab-pane-profile w-tab-pane w--tab-active">
                      {map(proxies['portal-profile'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <PortalProfileView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                  </div>
                </div>
              </div>
              {map(proxies['tutorial-video-window'], props => <div {...{...props, className: `af-class-div-block-73 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <TutorialVideoWindowView.Controller />
              </React.Fragment>}</div>)}
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default MembersPortalView

/* eslint-enable */