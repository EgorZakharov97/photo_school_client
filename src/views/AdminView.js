/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import AdminWorkshopsView from './AdminWorkshopsView'
import AdminTutorialView from './AdminTutorialView'
import AdminMaterialView from './AdminMaterialView'
import AdminPresetsView from './AdminPresetsView'
import AdminCouponsView from './AdminCouponsView'
import CouponsContainerView from './CouponsContainerView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  Promise.resolve("$(\".tab-button\").click(function(t){t.preventDefault(),$(\".tab-button\").removeClass(\"tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"tab-button-active\")}),$(\".af-class-tab-button\").click(function(t){t.preventDefault(),$(\".af-class-tab-button\").removeClass(\"af-class-tab-button-active\"),$(\".w-tab-link:contains(\"+t.target.innerText+\")\").click(),$(t.target).addClass(\"af-class-tab-button-active\")});"),
  fetch("https://cdn.quilljs.com/1.3.6/quill.js").then(body => body.text()),
  Promise.resolve("var description=new Quill(\"#wk-description\",{theme:\"snow\"}),willLearn=new Quill(\"#wk-willLearn\",{theme:\"snow\"}),timeline=new Quill(\"#wk-timeline\",{theme:\"snow\"});"),
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
      'admin-workshops': [],
      'admin-tutorial': [],
      'admin-material': [],
      'admin-presets': [],
      'admin-coupons': [],
      'coupons-container': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);


          	.ql-editor {
            	min-height: 300px;
            }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-section-portal">
              <div className="af-class-portal-container">
                <div data-collapse="medium" data-animation="over-left" data-duration={400} role="banner" className="af-class-portal-nav w-nav">
                  <div>
                    <h2 className="af-class-heading-18">Admin <span className="af-class-text-span-42">Panel</span></h2>
                    <div className="af-class-window-nav">
                      <div className="af-class-menu-button-2 w-nav-button">
                        <div className="af-class-icon w-icon-nav-menu" />
                      </div>
                      <a href="/portal" className="af-class-login-nav-link af-class-portal w-inline-block">
                        <h3 className="af-class-heading-13">Portal</h3>
                      </a><a href="#" className="w-nav-brand"><img src="images/Masterwhite.png" width={60} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 13vw, 60px" alt className="af-class-image-4" /></a>
                      <a href="/auth/logout" className="af-class-login-nav-link w-inline-block">
                        <h3 className="af-class-heading-13">Exit</h3>
                      </a>
                    </div>
                  </div>
                  <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                    <h1 className="af-class-member-name-heading">Egor Zakharov</h1>
                    <div className="af-class-portal-tab-links"><a href="#" className="af-class-tab-button af-class-tab-button-active w-button">Workshops</a><a href="#" className="af-class-tab-button w-button">Tutorials</a><a href="#" className="af-class-tab-button w-button">Courses</a><a href="#" className="af-class-tab-button w-button">Materials</a><a href="#" className="af-class-tab-button w-button">Presets</a><a href="#" className="af-class-tab-button w-button">Challenges</a><a href="#" className="af-class-tab-button w-button">Coupons</a><a href="#" className="af-class-tab-button w-button">Emails</a></div>
                  </nav>
                </div>
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-2 w-tabs">
                  <div className="af-class-tabs-menu-3 w-tab-menu">
                    <a data-w-tab="Workshops" className="w-inline-block w-tab-link w--current">
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
                    <div data-w-tab="Workshops" className="w-tab-pane w--tab-active">
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
                        <div className="w-form">
                          <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form-8"><label htmlFor="name-4">Name</label><input type="text" className="w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder id="name-4" /><label htmlFor="email">Email Address</label><input type="email" className="w-input" maxLength={256} name="email" data-name="Email" placeholder id="email" required /><label className="w-checkbox"><input type="checkbox" id="public" name="public" data-name="public" className="w-checkbox-input" /><span htmlFor="public" className="w-form-label">Public</span></label><input type="submit" defaultValue="Create" data-wait="Please wait..." className="af-class-button af-class-red w-button" /></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
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
                    <div data-w-tab="Presets" className="w-tab-pane">
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
                    </div>
                    <div data-w-tab="Coupons" className="w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Cou</span>pons</h3>
                      <h3>Geberate Coupon</h3>
                      {map(proxies['admin-coupons'], props => <div {...{...props, className: `w-form ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <AdminCouponsView.Controller />
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
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