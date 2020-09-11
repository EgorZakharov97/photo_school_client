/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

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
            <div className="af-class-play-video">
              <div className="af-class-course-video">
                <div className="af-class-back-wrapper"><a href="http://javascript:history.back()" className="af-class-back">⟵ Back</a></div>
                <h2 className="af-class-table-heading">Course "course name"</h2>
                <div className="af-class-text-block-21 af-class-video">Click to access</div>
                <div className="af-class-video-2 w-video w-embed" />
                <div className="af-class-divider af-class-fat" />
              </div>
            </div>
            <div className="af-class-section-portal">
              <div className="af-class-portal-container">
                <div data-collapse="medium" data-animation="over-left" data-duration={400} role="banner" className="af-class-portal-nav w-nav">
                  <div>
                    <div className="af-class-window-nav">
                      <div className="af-class-menu-button-2 w-nav-button">
                        <div className="af-class-icon w-icon-nav-menu" />
                      </div>
                      <a href="index.html" target="_blank" className="af-class-login-nav-link af-class-portal w-inline-block">
                        <h3 className="af-class-heading-13">HOME</h3>
                      </a><a href="#" className="w-nav-brand"><img src="images/Masterwhite.png" width={60} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 100vw, 60px" alt className="af-class-image-4" /></a>
                      {map(proxies['logout'], props => <a href="#" {...{...props, className: `af-class-login-nav-link w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                        <h3 className="af-class-heading-13">Exit</h3>
                      </React.Fragment>}</a>)}
                    </div>
                  </div>
                  <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                    <h1 id="username" className="af-class-member-name-heading" />
                    <div className="af-class-portal-tab-links"><a id="nav-workshops" data-w-id="35e95c24-2a78-7c37-9a14-36416311b6c5" href="#" className="af-class-tab-button af-class-tab-button-active w-button">Workshops</a><a id="nav-tutorials" data-w-id="855b3228-1593-9d07-6d1c-8b8c19a15555" href="#" className="af-class-tab-button w-button">Tutorials</a><a id="nav-courses" data-w-id="fad969ac-8ee0-4af1-0d61-da2a77b820c8" href="#" className="af-class-tab-button w-button">Courses</a><a id="nav-materials" data-w-id="2fa5e394-bbd3-fb74-e84b-42e476298583" href="#" className="af-class-tab-button w-button">Materials</a><a id="nav-presets" data-w-id="97d85560-c95d-b340-727d-83b5ba47cfed" href="#" className="af-class-tab-button w-button">Presets</a><a id="nav-profile" data-w-id="f6e306c2-e50a-6d6d-a5d9-5e39c8ac9a10" href="#" className="af-class-tab-button w-button">Profile</a>
                      <div className="af-class-slecial"><a id="nav-challenge" data-w-id="66cf1bc1-a188-62eb-a97b-bb330800f686" href="#" className="af-class-tab-button af-class-button af-class-on-black af-class-portal w-button">Weekly Challenge</a><a href="#" className="af-class-button af-class-red af-class-portal w-button">Join Chat</a><a desc="admin-btn" href="admin.html" className="af-class-button af-class-red af-class-portal w-button">Admin</a></div>
                    </div>
                  </nav>
                </div>
                <div data-duration-in={300} data-duration-out={100} className="af-class-tabs-2 w-tabs">
                  <div className="af-class-tabs-menu-3 w-tab-menu">
                    <a data-w-tab="Workshops" className="w-inline-block w-tab-link">
                      <div>Workshops</div>
                    </a>
                    <a data-w-tab="Courses" className="w-inline-block w-tab-link w--current">
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
                    <a data-w-tab="Profile" className="w-inline-block w-tab-link">
                      <div>Profile</div>
                    </a>
                  </div>
                  <div className="af-class-tabs-content w-tab-content">
                    <div data-w-tab="Workshops" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <div className="af-class-splitter">
                          <h3 className="af-class-section-heading"><span className="af-class-text-span-10">My </span>Workshops</h3>
                          <div desc="progress" className="w-embed">
                            <div className="af-class-progress-wrapper">
                              <h3 desc="heading" className="af-class-progress-header">
                                Sample heading
                              </h3>
                              <ul className="af-class-progressbar">
                                <li desc="one" className="af-class-active">10% Discount</li>
                                <li desc="two" className="af-class-half-complete">15% Discount</li>
                                <li desc="three" className="af-class-half-complete">20% Discount</li>
                                <li desc="four" className="af-class-half-complete">25% Discount</li>
                                <li desc="five" className="af-class-complete">Free Course</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-class-wrapper-portal">
                          <a href="/home" className="af-class-cors-register-now-2 af-class-courses w-inline-block">
                            <div className="af-class-text-block-2">Browse courses</div>
                          </a>
                        </div>
                        <div id="workshops-container" desc="workshopContainer" className="w-layout-grid af-class-grid-6">
                          <div id="workshop" className="af-class-dropdown">
                            <div desc="background" data-w-id="96f267f8-825f-e856-30b6-9a5b1e1bca4a" className="af-class-dropdown-trigger">
                              <div desc="name" className="af-class-text-block">Male Pornogtaphy</div>
                              <div desc="starts" className="af-class-date">Aug 20</div>
                            </div>
                            <div style={{height: '0PX', display: 'block'}} className="af-class-dropdown-content">
                              <div className="af-class-cladd-desc-wrapper">
                                <div className="w-layout-grid af-class-grid-5">
                                  <div id="w-node-9a5b1e1bca52-30ba94ae" className="af-class-course-card">
                                    <div desc="description" className="af-class-rich-text-block-7 w-richtext">
                                      <h2>What’s a Rich Text element?</h2>
                                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                                      <h4>Static and dynamic content editing</h4>
                                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                                      <h4>How to customize formatting for each rich text</h4>
                                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                                    </div>
                                  </div>
                                  <div id="w-node-9a5b1e1bca60-30ba94ae" className="af-class-course-card">
                                    <div desc="willLearn" className="w-richtext">
                                      <h2>What’s a Rich Text element?</h2>
                                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                                      <h4>Static and dynamic content editing</h4>
                                      <ul role="list">
                                        <li>A rich text element can be used with static or dynamic content.</li>
                                        <li>A rich text element can be used with static or dynamic content.</li>
                                        <li>A rich text element can be used with static or dynamic content.</li>
                                        <li>A rich text element can be used with static or dynamic content.</li>
                                      </ul>
                                      <h4>How to customize formatting for each rich text</h4>
                                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                                    </div>
                                  </div>
                                  <div id="w-node-9a5b1e1bca75-30ba94ae" className="af-class-course-card">
                                    <div desc="timeLine" className="w-richtext">
                                      <h2>What’s a Rich Text element?</h2>
                                      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                                      <h4>Static and dynamic content editing</h4>
                                      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                                      <h4>How to customize formatting for each rich text</h4>
                                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                                    </div>
                                  </div><a desc="chatLink" id="w-node-5dabce7edb67-30ba94ae" href="#" className="af-class-cors-register-now-2 af-class-courses">Join workshop chat</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Courses" className="af-class-tab-pane-courses w-tab-pane w--tab-active">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-40">Co</span>urses</h3>
                      <div className="af-class-course-topic">
                        <h1 className="af-class-heading-20">Your courses</h1>
                        <div id="courses-container" className="af-class-portal-courses">
                          <a id="course" href="#" className="af-class-course w-inline-block">
                            <div desc="background" className="af-class-course-img">
                              <div className="af-class-course-overlay">
                                <div className="af-class-course-play"><img src="images/output-onlinepngtools.png" loading="lazy" width={70} alt className="af-class-course-hint" /></div>
                                <div className="af-class-course-locked"><img src="images/output-onlinepngtools-1.png" loading="lazy" width={70} alt className="af-class-course-hint" />
                                  <div className="af-class-text-block-22">Unlock with subscription / buy for $n</div>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-course-desc">
                              <h3 desc="name" className="af-class-course-title">Course Name</h3>
                              <h3 desc="title" className="af-class-course-subheading">Course Name</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="af-class-course-topic">
                        <h1>Available with subscription</h1>
                        <div id="courses-container" className="af-class-portal-courses">
                          <a id="course" href="#" className="af-class-course w-inline-block">
                            <div desc="background" className="af-class-course-img">
                              <div className="af-class-course-overlay">
                                <div className="af-class-course-play"><img src="images/output-onlinepngtools.png" loading="lazy" width={70} alt className="af-class-course-hint" /></div>
                                <div className="af-class-course-locked"><img src="images/output-onlinepngtools-1.png" loading="lazy" width={70} alt className="af-class-course-hint" />
                                  <div className="af-class-text-block-22">Unlock with subscription / buy for $n</div>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-course-desc">
                              <h3 desc="name" className="af-class-course-title">Course Name</h3>
                              <h3 desc="title" className="af-class-course-subheading">Course Name</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tutorials" className="af-class-tab-pane-tutorials w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">Video </span>tutorials</h3>
                        <a href="/home" className="af-class-cors-register-now-2 af-class-courses w-inline-block">
                          <div className="af-class-text-block-2">Browse courses</div>
                        </a>
                        <div id="videos-container" className="af-class-all-videos">
                          <div className="af-class-course-topic">
                            <h1 className="af-class-heading-20">Topic</h1>
                            <div id="courses-container" className="af-class-portal-courses">
                              <a desc="video-link-background" href="#" className="af-class-video-wrapper w-inline-block">
                                <h3 desc="video-name" className="af-class-video-heading">Lecture 1</h3>
                                <div desc="diver-desc" className="af-class-text-block-11"> - a short course on how to be a debil</div>
                                <div className="af-class-course-overlay">
                                  <div data-w-id="e62b7494-6153-08fa-7fe2-e6f9a4ce7a7a" className="af-class-tutorial-play"><img src="images/output-onlinepngtools.png" loading="lazy" width={70} alt className="af-class-course-hint" /></div>
                                  <div className="af-class-course-locked"><img src="images/output-onlinepngtools-1.png" loading="lazy" width={70} alt className="af-class-course-hint" />
                                    <div className="af-class-text-block-22">Unlock with subscription</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Materials" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-16">Mat</span>erials</h3>
                        <a href="/home" className="af-class-cors-register-now-2 af-class-courses w-inline-block">
                          <div className="af-class-text-block-2">Browse courses</div>
                        </a>
                        <div className="af-class-portal-files">
                          <div id="material-container" className="w-layout-grid af-class-grid-7">
                            <div className="af-class-reading-container">
                              <div desc="img" className="af-class-reading-pic" />
                              <div id="material" className="af-class-reading-content">
                                <h1 desc="name" className="af-class-heading-14">Posing Guide by Olya Shendrik</h1>
                                <h3 desc="link" className="af-class-heading-15">Read</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Presets" className="w-tab-pane">
                      <div className="af-class-tab-wrapper">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-10">Pre</span>sets</h3>
                        <a href="/home" className="af-class-cors-register-now-2 af-class-courses w-inline-block">
                          <div className="af-class-text-block-2">Browse courses</div>
                        </a>
                        <div className="af-class-portal-files">
                          <div id="preset-container" className="w-layout-grid af-class-grid-7">
                            <a id="preset" desc="link" href="#" className="af-class-preset w-inline-block">
                              <h3 desc="name" className="af-class-preset-heading">Heading</h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Weekly challenge" className="af-class-tab-pane-weekly-challenge w-tab-pane">
                      <div className="af-class-div-block-27">
                        <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Weekly</span> Challenge</h3>
                      </div>
                      <div className="af-class-current-challenge">
                        <h1 className="af-class-heading-20">Current Challenge</h1>
                        <div className="af-class-challenge">
                          <div className="af-class-challenge-img" />
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Profile" className="af-class-tab-pane-profile w-tab-pane">
                      <h3 className="af-class-section-heading af-class-portal"><span className="af-class-text-span-41">Pro</span>file</h3>
                      <div className="af-class-window-body">
                        <div className="af-class-login-heading">
                          <h2 className="af-class-heading-9">Update user info</h2>
                        </div>
                        <div className="af-class-text-block-10">Your email:</div>
                        <div className="af-class-login-form">
                          <div className="w-form">
                            <form id="update-profile" name="wf-form-Register" data-name="Register" action="/auth/update" method="post">
                              <div desc="email" className="af-class-text-block-10">email@gmail.com</div><input type="text" className="af-class-login-input w-input" autofocus="true" maxLength={256} name="username" data-name="Username" desc="name" placeholder="Name" id="username" required /><input type="tel" className="af-class-login-input w-input" maxLength={256} name="phoneNumber" data-name="Phone Number" desc="phone" placeholder="Phone Number" id="phoneNumber" required /><input type="email" className="af-class-login-input af-class-invisible w-input" maxLength={256} name="email" data-name="Email" placeholder="email" id="email" required /><select id="Level" name="Level" required data-name="Level" desc="level" className="af-class-login-input w-select"><option value="beginner">Beginner</option><option value="advanced">Advanced</option><option value="intermediate">Intermediate</option><option value="professional">Professional</option></select><select id="sex" name="sex" required data-name="Sex" desc="sex" className="af-class-login-input w-select"><option value="Prefer not to say">Sex</option><option value="Male">Male</option><option value="Female">Female</option><option value="Hybrid">Hybrid</option></select><input type="submit" defaultValue="Update" data-wait="Please wait..." className="af-class-login-submit w-button" /></form>
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </div>
                        </div><a href="/auth/local/reset" className="af-class-login-submit w-button">Reset Password</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-popup-window af-class-portal af-class-hidden">
              <div className="af-class-buy-popup">
                <div data-w-id="e68580ff-afac-28b5-9c08-e8f295d81101" className="af-class-close">X</div>
                <h1 className="af-class-puy-heading">Unlock <span desc="name" className="af-class-text-span-43">thing</span></h1>
                <div className="af-class-item-container">
                  <h4 className="af-class-heading-19">Thing</h4>
                  <div className="af-class-text-block-23">$nn</div>
                </div>
                <div className="af-class-buy-option"><a href="#" className="af-class-button af-class-buy w-button">Get it with subscription</a></div>
                <div className="af-class-buy-option"><a href="#" className="af-class-button af-class-red af-class-buy w-button">Get it forever for $nn</a></div>
              </div>
            </div>
            <div style={{opacity: 0, display: 'none'}} className="af-class-vatch-video">
              <div className="af-class-watch-popup">
                <div data-w-id="0c62797a-747e-8f2a-0393-c2c3264de722" className="af-class-close">X</div>
                <h1 className="af-class-puy-heading">Watch <span desc="name" className="af-class-text-span-44">Lecture 1</span></h1>
                <div className="af-class-video-3 w-video w-embed" />
              </div>
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