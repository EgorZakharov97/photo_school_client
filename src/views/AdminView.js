/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
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
                <div data-collapse="medium" data-animation="over-left" data-duration={400} role="banner" className="af-class-portal-nav w-nav">
                  <div>
                    <h2 className="af-class-heading-18">Admin <span className="af-class-text-span-42">Panel</span></h2>
                    <div className="af-class-window-nav">
                      <div className="af-class-menu-button-2 w-nav-button">
                        <div className="af-class-icon w-icon-nav-menu" />
                      </div>
                      <a href="/portal" className="af-class-login-nav-link af-class-portal w-inline-block">
                        <h3 className="af-class-heading-13">Portal</h3>
                      </a><a href="#" className="w-nav-brand"><img src="images/Masterwhite.png" width={60} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 13vw, 59.999996185302734px" alt className="af-class-image-4" /></a>
                      <a href="/auth/logout" className="af-class-login-nav-link w-inline-block">
                        <h3 className="af-class-heading-13">Exit</h3>
                      </a>
                    </div>
                  </div>
                  <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                    <h1 className="af-class-member-name-heading">Egor Zakharov</h1>
                    <div className="af-class-portal-tab-links"><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdb8" href="#" className="af-class-tab-button af-class-tab-button-active w-button">Workshops</a><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdba" href="#" className="af-class-tab-button w-button">New Tutorial</a><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdbc" href="#" className="af-class-tab-button w-button">New Course</a><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdbe" href="#" className="af-class-tab-button w-button">New Material</a><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdc0" href="#" className="af-class-tab-button w-button">New Preset</a><a data-w-id="9734b49c-9113-df65-b92b-5f501b1dbdc3" href="#" className="af-class-tab-button w-button">New Challenge</a><a data-w-id="751e89c3-3b26-cb22-22c4-026f801c1d24" href="#" className="af-class-tab-button w-button">Coupons</a><a data-w-id="bf184a31-46f8-f2de-4757-01e0f4e9e6c9" href="#" className="af-class-tab-button w-button">Emails</a></div>
                  </nav>
                </div>
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-2 w-tabs">
                  <div className="af-class-tabs-menu-3 w-tab-menu">
                    <a data-w-tab="Workshops" className="w-inline-block w-tab-link">
                      <div>Workshops</div>
                    </a>
                    <a data-w-tab="New Course" className="w-inline-block w-tab-link">
                      <div>New Course</div>
                    </a>
                    <a data-w-tab="New tutorial" className="w-inline-block w-tab-link">
                      <div>New Tutorial</div>
                    </a>
                    <a data-w-tab="New Material" className="w-inline-block w-tab-link">
                      <div>New Material</div>
                    </a>
                    <a data-w-tab="New Preset" className="w-inline-block w-tab-link">
                      <div>New Preset</div>
                    </a>
                    <a data-w-tab="New Challenge" className="w-inline-block w-tab-link w--current">
                      <div>New Challenge</div>
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
                        <div className="w-form">
                          <form id="wf-form-courseForm" name="wf-form-courseForm" data-name="courseForm" method="post" action="/" className="af-class-form-5"><label htmlFor="title-2">Select workshop</label><select id="course" name="course" data-name="Course" desc="workshop-selector" className="w-select"><option value="!new">New</option></select><label htmlFor="name">Course Name</label><input type="text" className="w-input" maxLength={256} name="name" data-name="Name" desc="name" placeholder="Course Name" id="name" required /><label>Date the course starts</label><input type="number" className="w-input" maxLength={256} name="courseStarts" data-name="Course Starts" desc="starts" placeholder="Course Starts" id="courseStarts" required /><label>Date the course ends</label><input type="email" className="w-input" maxLength={256} name="courseEnds" data-name="Course Ends" desc="ends" placeholder="Course Ends" id="courseEnds" required /><label htmlFor="registrationDeadline-3">Registration Deadline</label><input type="email" className="w-input" maxLength={256} name="registrationDeadline" data-name="registrationDeadline" desc="deadline" placeholder="Registration Deadline" id="registrationDeadline-3" required /><label htmlFor="price-2">Price</label><input type="text" className="w-input" maxLength={256} name="price" data-name="price" desc="price" placeholder="Price" id="price-2" required /><label>Number of seats</label><input type="number" className="w-input" maxLength={256} name="numPlaces" data-name="Num Places" desc="seats" placeholder="Number of places" id="numPlaces" required /><label>Workshop preview image</label>
                            <div desc="file" className="af-class-html-embed-2 w-embed"><input type="file" name="courseImg" placeholder="Choose Image" /></div><label>Course Description</label>
                            <div id="wk-description" /><label>You will learn</label>
                            <div id="wk-will-learn" /><label>Course timeline</label>
                            <div id="wk-timeline" /><input type="submit" defaultValue="Create" data-wait="Please wait..." id="submit" desc="create" className="af-class-button af-class-red w-button" /></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="New Course" className="af-class-tab-pane-courses w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-40">New </span>course</h3>
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
                    <div data-w-tab="New tutorial" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">New </span>tutorial</h3>
                        <div className="af-class-form-block-4 w-form">
                          <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="title-2">Title</label><input type="text" className="w-input" maxLength={256} name="title" data-name="Title" placeholder="Title" id="title" /><label htmlFor="description-2">Short description</label><input type="text" className="w-input" maxLength={256} name="description-2" data-name="Description 2" placeholder="Description" id="description-2" required /><label htmlFor="embed">Video Embed</label><input type="text" className="w-input" maxLength={256} name="embed" data-name="Embed" placeholder="Embed" id="embed" required /><label htmlFor="embed-2">Choose Preview Image</label>
                            <div className="af-class-html-embed-3 w-embed"><input type="file" name="video-preview" placeholder="Choose Image" /></div><label htmlFor="Category">Category</label><input type="text" className="af-class-text-field-6 w-input" maxLength={256} name="Category" data-name="Category" placeholder="Description" id="Category" required /><input type="submit" defaultValue="Create" data-wait="Please wait..." id="create-tutorial" className="af-class-button af-class-red w-button" /></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="New Material" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-16">New </span>Material</h3>
                        <div className="w-container">
                          <div className="w-form">
                            <form id="wf-form-material-form" name="wf-form-material-form" data-name="material form" className="af-class-form-6"><label htmlFor="name-2">Material Name</label><input type="text" className="w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Material name" id="name-2" required />
                              <div className="af-class-div-block-28">
                                <div><label htmlFor="email">Material Picture</label>
                                  <div className="af-class-html-embed-3 w-embed"><input type="file" name="video-preview" placeholder="Choose Image" /></div>
                                </div>
                                <div><label htmlFor="email-2">Material file</label>
                                  <div className="af-class-html-embed-3 w-embed"><input type="file" name="video-preview" placeholder="Choose Image" /></div>
                                </div>
                              </div><input type="submit" defaultValue="Create" data-wait="Please wait..." id="create-material" className="af-class-button af-class-red w-button" /></form>
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="New Preset" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">New </span>preset</h3>
                        <div className="w-form">
                          <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form-7"><label htmlFor="name-3">File name</label><input type="text" className="w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Name" id="name-3" /><label htmlFor="description-3">Short description</label><input type="text" className="w-input" maxLength={256} name="description-3" data-name="Description 3" placeholder="Description" id="description-3" required />
                            <div className="af-class-div-block-28">
                              <div><label htmlFor="embed-2">Select preset file</label>
                                <div className="af-class-html-embed-3 w-embed"><input type="file" name="video-preview" placeholder="Choose Image" /></div>
                              </div>
                              <div><label htmlFor="description-4">Select feature image</label>
                                <div className="af-class-html-embed-3 w-embed"><input type="file" name="video-preview" placeholder="Choose Image" /></div>
                              </div>
                            </div><input type="submit" defaultValue="Create" data-wait="Please wait..." id="create-preset" className="af-class-button af-class-red w-button" /></form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="New Challenge" className="af-class-tab-pane-weekly-challenge w-tab-pane w--tab-active">
                      <div className="af-class-div-block-27">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">New</span> Challenge</h3>
                      </div>
                      <div className="af-class-current-challenge">
                        <div id="course-portal" className="af-class-dropdown">
                          <div className="af-class-dropdown-content" />
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Coupons" className="w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Cou</span>pons</h3>
                      <div className="w-form">
                        <h3>Geberate Coupon</h3>
                        <form id="email-form-3" name="email-form-3" data-name="Email Form 3"><label htmlFor="name-6">Name</label><input type="text" className="w-input" maxLength={256} name="name" data-name="name" placeholder id="name-6" required /><label htmlFor="discount">Discpont Percentage</label><input type="number" className="w-input" maxLength={256} name="discount" data-name="discount" placeholder id="discount" required /><label htmlFor="code">Code</label><input type="text" className="w-input" maxLength={256} name="code" data-name="code" placeholder id="code" required /><label htmlFor="product">Product</label><select id="product" name="product" data-name="product" required className="w-select"><option value>Select one...</option><option value="workshop">Workshops</option><option value="course">Courses</option></select><label className="w-checkbox"><input type="checkbox" id="shouldExpire" name="shouldExpire" data-name="shouldExpire" data-w-id="f4baec93-a8cf-c68d-339e-1efeaa7dd39d" className="w-checkbox-input" /><span htmlFor="shouldExpire" className="af-class-checkbox-label w-form-label">Expires?</span></label>
                          <div style={{display: 'none'}} className="af-class-div-block-29"><label htmlFor="code-2">Expiration Date</label>
                            <div className="w-embed"><input type="date" name="expires" in="expires" /></div>
                          </div><label htmlFor="code-2">Usage</label>
                          <div><label className="w-radio"><input type="radio" data-name="usage" id="onetime-2" name="usage" defaultValue="onetime" className="w-form-formradioinput w-radio-input" /><span htmlFor="onetime-2" className="w-form-label">One time only</span></label><label className="w-radio"><input type="radio" data-name="usage" id="unlimited" name="usage" defaultValue="unlimited" className="w-form-formradioinput w-radio-input" /><span htmlFor="unlimited" className="w-form-label">Unlimited</span></label></div><input type="submit" defaultValue="Submit" data-wait="Please wait..." id="create-coupon" className="af-class-button af-class-red w-button" /></form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                      <div id="coupon-container" className="af-class-all-coupons">
                        <div id="coupon" className="af-class-coupon">
                          <h3 desc="name" className="af-class-cpn-heading">Coupon name</h3>
                          <h4 desc="code">CPNCODE12</h4>
                          <div className="af-class-cpn-splitter">
                            <div>Valid for:</div>
                            <div desc="product">product</div>
                          </div>
                          <div className="af-class-cpn-splitter">
                            <div>Usage: </div>
                            <div desc="usage">Unlimited</div>
                          </div>
                          <div className="af-class-cpn-splitter">
                            <div>Expires: </div>
                            <div desc="expires">Date</div>
                          </div>
                          <div className="af-class-cpn-splitter">
                            <div>Discount:</div>
                            <div desc="discount">0%</div>
                          </div>
                          <div className="af-class-cpn-splitter">
                            <div>Was used:</div>
                            <div desc="was-used">n times</div>
                          </div><a href="#" className="af-class-button af-class-red w-button">Delete</a></div>
                      </div>
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