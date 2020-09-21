/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import AdminWorkshopsView from './AdminWorkshopsView'
import AdminCoursesView from './AdminCoursesView'
import AdminTutorialView from './AdminTutorialView'
import AdminMaterialView from './AdminMaterialView'
import AdminPresetsView from './AdminPresetsView'
import AdminChallengesView from './AdminChallengesView'
import CouponsFormView from './CouponsFormView'
import CouponsContainerView from './CouponsContainerView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  Promise.resolve("$(\".tab-button\").click(function(t){t.preventDefault(),$(\".tab-button\").removeClass(\"tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"tab-button-active\")}),$(\".af-class-tab-button\").click(function(t){t.preventDefault(),$(\".af-class-tab-button\").removeClass(\"af-class-tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"af-class-tab-button-active\")});"),
]

let Controller

class AdminView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminView

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
    const proxies = Controller !== AdminView ? transformProxies(this.props.children) : {
      'logout': [],
      'username': [],
      'admin-workshops': [],
      'admin-courses': [],
      'admin-tutorial': [],
      'admin-material': [],
      'admin-presets': [],
      'admin-challenges': [],
      'admin-coupons': [],
      'coupons-container': [],
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
            <div className="af-class-section-portal">
              <div className="af-class-portal-container">
                <div data-collapse="medium" data-animation="over-left" data-duration={400} role="banner" className="af-class-portal-nav af-class-admin w-nav">
                  <div>
                    <h2 className="af-class-heading-18">Admin <span className="af-class-text-span-42">Panel</span></h2>
                    <div className="af-class-window-nav">
                      <div className="af-class-menu-button-2 w-nav-button">
                        <div className="af-class-icon w-icon-nav-menu" />
                      </div>
                      <a href="/portal" className="af-class-login-nav-link af-class-portal w-inline-block">
                        <h3 className="af-class-heading-13">Portal</h3>
                      </a><a href="#" className="w-nav-brand"><img src="images/Masterwhite.png" width={60} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 13vw, 60px" alt className="af-class-image-4" /></a>
                      {map(proxies['logout'], props => <a href="#" {...{...props, className: `af-class-login-nav-link w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <h3 className="af-class-heading-13">Exit</h3>
                      </React.Fragment>}</a>)}
                    </div>
                  </div>
                  <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                    {map(proxies['username'], props => <h1 {...{...props, className: `af-class-member-name-heading ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Egor Zakharov</React.Fragment>}</h1>)}
                    <div className="af-class-portal-tab-links"><a href="#" className="af-class-tab-button af-class-tab-button-active w-button">Workshops</a><a href="#" className="af-class-tab-button w-button">Tutorials</a><a href="#" className="af-class-tab-button w-button">Courses</a><a href="#" className="af-class-tab-button w-button">Materials</a><a href="#" className="af-class-tab-button w-button">Presets</a><a href="#" className="af-class-tab-button w-button">Challenges</a><a href="#" className="af-class-tab-button w-button">Coupons</a><a href="#" className="af-class-tab-button w-button">Emails</a></div>
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
                    <a data-w-tab="Presets" className="w-inline-block w-tab-link w--current">
                      <div>Presets</div>
                    </a>
                    <a data-w-tab="Challenges" className="w-inline-block w-tab-link">
                      <div>Challenges</div>
                    </a>
                    <a data-w-tab="Coupons" className="w-inline-block w-tab-link">
                      <div>Coupons</div>
                    </a>
                    <a data-w-tab="Emails" className="w-inline-block w-tab-link">
                      <div>Emails</div>
                    </a>
                  </div>
                  <div className="af-class-tabs-content w-tab-content">
                    <div data-w-tab="Workshops" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-left"><span className="af-class-text-span-10">Work</span>shops</h3>
                        {map(proxies['admin-workshops'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <AdminWorkshopsView.Controller />
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </React.Fragment>}</div>)}
                      </div>
                    </div>
                    <div data-w-tab="Courses" className="af-class-tab-pane-courses w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-40">Cou</span>rses</h3>
                      <div className="af-class-create-course-wrapper">
                        {map(proxies['admin-courses'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <AdminCoursesView.Controller />
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </React.Fragment>}</div>)}
                      </div>
                    </div>
                    <div data-w-tab="Tutorials" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">Tuto</span>rials</h3>
                        {map(proxies['admin-tutorial'], props => <div {...{...props, className: `af-class-form-block-4 w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <AdminTutorialView.Controller />
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </React.Fragment>}</div>)}
                      </div>
                    </div>
                    <div data-w-tab="Materials" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-16">Mat</span>erials</h3>
                        <div className="w-container">
                          {map(proxies['admin-material'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                            <AdminMaterialView.Controller />
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </React.Fragment>}</div>)}
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Presets" className="w-tab-pane w--tab-active">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">Pre</span>sets</h3>
                        {map(proxies['admin-presets'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                          <AdminPresetsView.Controller />
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </React.Fragment>}</div>)}
                      </div>
                    </div>
                    <div data-w-tab="Challenges" className="af-class-tab-pane-weekly-challenge w-tab-pane">
                      <div className="af-class-div-block-27">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Chal</span>lenges</h3>
                      </div>
                      <div className="af-class-current-challenge">
                        <div id="course-portal" className="af-class-dropdown">
                          <div className="af-class-dropdown-content" />
                        </div>
                      </div>
                      <h3>New Challenge</h3>
                      {map(proxies['admin-challenges'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <AdminChallengesView.Controller />
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Coupons" className="w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Cou</span>pons</h3>
                      <h3>Generate Coupon</h3>
                      {map(proxies['admin-coupons'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <CouponsFormView.Controller />
                      </React.Fragment>}</div>)}
                      {map(proxies['coupons-container'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                        <CouponsContainerView.Controller />
                      </React.Fragment>}</div>)}
                    </div>
                    <div data-w-tab="Emails" className="w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">E</span>mails</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AdminView

/* eslint-enable */