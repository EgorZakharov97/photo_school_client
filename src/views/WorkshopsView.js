/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import WorkshopView from './WorkshopView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  Promise.resolve("jQuery.loadScript=function(a,c){jQuery.ajax({url:a,dataType:\"script\",success:c,async:!0})};"),
]

let Controller

class WorkshopsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/WorkshopsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = WorkshopsView

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
    const proxies = Controller !== WorkshopsView ? transformProxies(this.props.children) : {
      'workshop': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
            <div className="af-class-section-nav">
              <div className="w-container">
                <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar-main w-nav">
                  <div className="af-class-nav-container">
                    <div className="af-class-menu-button w-nav-button"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 60px, (max-width: 767px) 70px, 100vw" alt className="af-class-image-5" />
                      <div className="af-class-nav-menu-icon">Menu</div>
                    </div><a href="#" className="af-class-brand w-nav-brand"><img src="images/Masterwhite.png" width={50} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 991px) 100vw, 50px" alt /></a></div>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac6" className="af-class-nav-link w-nav-link">Home</a><a href="#" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac8" className="af-class-nav-link w-nav-link">Lessons</a><a href="workshops.html" data-w-id="6c839d25-01c1-2534-9254-a6d36f0e57fb" aria-current="page" className="af-class-nav-link w-nav-link w--current">Challenges</a><a href="/portal" data-w-id="8b0eb6e1-9d29-4605-f18f-f09ff7606dfb" className="af-class-nav-link w-nav-link">Personal Coaching</a><a href="workshops.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8acc" aria-current="page" className="af-class-nav-link w-nav-link w--current">Workshops</a><a href="/portal" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ace" className="af-class-nav-link w-nav-link">Portal</a>
                    <div className="af-class-nav-divider" />
                    <h3 className="af-class-nav-help">Get Help</h3>
                    <a href="https://wa.me/12048813113" className="af-class-link-button w-inline-block">
                      <h3 className="af-class-link-button-text">Talk to us</h3>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div id="about" className="af-class-section-for-whom">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-9">
                  <div id="w-node-c657c6dc4ae0-067bab8e" className="af-class-img-container-2" />
                  <h3 id="w-node-c657c6dc4ae1-067bab8e" className="af-class-section-heading-3 af-class-left"><span className="af-class-text-span-10">How </span>does it work<span className="af-class-text-span-32">?</span></h3>
                  <p id="w-node-c657c6dc4ae7-067bab8e" className="af-class-section-main-paragraph-2 af-class-left af-class-centered"><strong className="af-class-bold-text-3">First, you have to find and choose a workshop that you are interested in. <br /><br />When you register for a workshop you get access to a student portal with video tutorials, presets, and the most important - workshop group chats, where you can chat with other students and your coaches.<br /><br /></strong><span><strong className="af-class-vsdferhjbukl-2">EACH WORKSHOP IS MADE OF </strong></span><span className="af-class-text-span-32"><strong className="af-class-bold-text-6">THREE PARTS: </strong></span><strong><br /><br /></strong><span className="af-class-text-span-27"><strong className="af-class-bold-text-2">Theory</strong></span><strong className="af-class-bold-text-4"> - this is where we get to know each other and talk about theoretical background based on the workshop theme.<br /><br /></strong><span><strong className="af-class-bold-text-2">Practice</strong></span><strong className="af-class-bold-text-4"> - this is where it gets interesting. We set up a whole set for you with a model, makeup artists, stylist, and unique concept. We take pictures together, then you take pictures by yourself!<br /><br /></strong><span><strong className="af-class-bold-text-2">Feedback</strong></span><strong className="af-class-bold-text-4"> - after the workshop you will have some photos to work with. We willask you to send us your top 3 images so that we can give you some feedback on the composition, colour, light, and other aspects.</strong></p>
                </div>
              </div>
            </div>
            <div className="af-class-section-videos">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-100">
                  <div id="w-node-4ed7a935562e-067bab8e" className="af-class-content-col af-class-_2" />
                  <h3 id="w-node-4ed7a935562f-067bab8e" className="af-class-section-heading af-class-on-black af-class-smaller"><span className="af-class-text-span-2">Watch </span>courses and vebinars</h3>
                  <p id="w-node-4ed7a9355633-067bab8e" className="af-class-black-simple-paragraph af-class-shrink">You will have access to video tutorials, lessons and vebinars with other artists and students. This access is exclusive and limited to 1 month after your workshop date.</p>
                </div>
              </div>
              <div className="af-class-video-background">
                <div data-poster-url="videos/profile-poster-00001.jpg" data-video-urls="videos/profile-transcode.mp4,videos/profile-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="af-class-background-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("videos/profile-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="videos/profile-transcode.mp4" data-wf-ignore="true" /><source src="videos/profile-transcode.webm" data-wf-ignore="true" /></video></div>
              </div>
            </div>
            <div className="af-class-section-theory">
              <div className="w-container">
                <h3 className="af-class-section-heading-3 af-class-senter"><span className="af-class-text-span-10">Dive into </span>the theory</h3>
                <div className="af-class-dive-into-img-wrapper" />
                <p className="af-class-section-main-paragraph-2 af-class-centered"><span className="af-class-text-span-31">We will explain to you the most complicated concept of photography</span> using the most understandable methods. We know how boring the theoretical part of education can be, that's why we divided all the information into offline and online blocks.<br /><br />You will have video tutorials, posing guides, and reading recommendations. At the same time, we will provide you with a strong base during our in-person workshops, passing the knowledge we gained from world-class artists.</p>
              </div>
            </div>
            <div className="af-class-section-work-studetns">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-102">
                  <div id="w-node-92c55c826c7f-b916cca1">
                    <h3 className="af-class-sub-heading-2 af-class-small">Student's Work</h3>
                    <p className="af-class-paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                  </div>
                  <div id="w-node-92c55c826c84-b916cca1" className="af-class-div-block-61" />
                  <div id="w-node-92c55c826c85-b916cca1" className="af-class-div-block-60" />
                  <div id="w-node-92c55c826c86-b916cca1" className="af-class-div-block-56" />
                  <div id="w-node-92c55c826c87-b916cca1" className="af-class-div-block-57" />
                  <div id="w-node-92c55c826c88-b916cca1" className="af-class-div-block-59" />
                  <div id="w-node-92c55c826c89-b916cca1" className="af-class-div-block-58" />
                  <div id="w-node-5d5764e061b4-b916cca1" className="af-class-div-block-62" />
                </div>
                <div className="af-class-div-block-64">
                  <div className="af-class-div-block-65">
                    <h3 className="af-class-sub-heading-2 af-class-small">Student's Work</h3>
                    <p className="af-class-paragraph-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                  </div>
                </div>
                <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider w-slider">
                  <div className="w-slider-mask">
                    <div className="af-class-slide-2 w-slide">
                      <div className="af-class-div-block-60 af-class-wwwwww" />
                    </div>
                    <div className="af-class-slide-3 w-slide">
                      <div className="af-class-div-block-61" />
                    </div>
                    <div className="af-class-slide-4 w-slide">
                      <div className="af-class-div-block-56" />
                    </div>
                    <div className="af-class-slide-5 w-slide">
                      <div className="af-class-div-block-57" />
                    </div>
                    <div className="af-class-slide-6 w-slide">
                      <div className="af-class-div-block-59" />
                    </div>
                    <div className="af-class-slide-7 w-slide">
                      <div className="af-class-div-block-58" />
                    </div>
                    <div className="af-class-slide-8 w-slide">
                      <div className="af-class-div-block-62" />
                    </div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="w-icon-slider-left" />
                  </div>
                  <div className="w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="w-slider-nav w-round" />
                </div>
              </div>
            </div>
            <div className="af-class-section-mistakes">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-9 af-class-gap">
                  <div id="w-node-5463182df733-067bab8e" className="af-class-img-container-2 af-class-_2" />
                  <h3 id="w-node-5463182df734-067bab8e" className="af-class-section-heading-3 af-class-left"><span className="af-class-text-span-10">Learn </span>from your mistakes.</h3>
                  <p id="w-node-5463182df738-067bab8e" className="af-class-section-main-paragraph-2 af-class-left">After each workshop, you will have some material to use for your portfolio and we'd love to help you understand what your images look like from an experts point of view.<br /><br />We will ask you to send us the top 3 images you took during the workshop and we will review them. We will give you some valuable feedback and personal advice.</p>
                </div>
              </div>
            </div>
            <div id="courses" className="af-class-section-courses">
              <div className="af-class-container-courses w-container">
                <h2 className="af-class-heading-on-black">Classes <span className="af-class-text-span-2">Calendar</span></h2>
              </div>
              <div id="courses-container" className="af-class-container-7 w-container">
                {map(proxies['workshop'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                  <WorkshopView.Controller />
                </React.Fragment>}</div>)}
              </div>
            </div>
            <div id="courses" className="af-class-section-courses">
              <div className="af-class-container-courses w-container">
                <h2 className="af-class-heading-on-black">Past <span className="af-class-text-span-2">Classes</span></h2>
              </div>
              <div id="courses-container-past" className="af-class-container-7 w-container">
                <div>
                  <div id="course-past" className="af-class-dropdown">
                    <div className="af-class-dropdown-trigger">
                      <div className="af-class-text-block">Course Name</div>
                      <div className="af-class-date">Aug 20</div>
                    </div>
                    <div className="af-class-dropdown-content">
                      <div className="af-class-cladd-desc-wrapper">
                        <div className="w-layout-grid af-class-grid_course_past">
                          <div id="w-node-00a980c730e8-067bab8e" className="af-class-course-card">
                            <div className="af-class-rich-text-block-7 w-richtext">
                              <h2>What’s a Rich Text element?</h2>
                              <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                              <h4>Static and dynamic content editing</h4>
                              <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                              <h4>How to customize formatting for each rich text</h4>
                              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="section-buy" className="af-class-section-buy">
              <div className="af-class-payment-container w-container">
                <div className="af-class-payment-block">
                  <div className="af-class-close-btn">
                    <div className="af-class-text-block-19">X</div>
                  </div>
                  <div className="af-class-course-buy-pic" />
                  <div className="af-class-but-description">Wokshop + 1 month of portal access</div>
                  <h1 className="af-class-buy-course-name">Workshop name</h1>
                  <div className="af-class-but-description af-class-low">Aug 14</div>
                  <div className="af-class-dateblock af-class-checkout">
                    <div className="af-class-date-phrase">Final Price</div>
                    <div desc="price" className="af-class-date-duration">$200</div>
                  </div>
                  <div className="af-class-buy-email">
                    <div className="af-class-buy-hint">You are logged in as:</div>
                    <div desc="email" className="af-class-buy-user-email">skymailsenter@gmail.com</div>
                  </div>
                  <div className="af-class-form-block-3 w-form">
                    <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="name" className="af-class-field-label-6">Email</label><input type="text" className="w-input" maxLength={256} name="name" data-name="Name" placeholder id="name" /><label htmlFor="email" className="af-class-field-label-6">Password</label><input type="email" className="af-class-text-field-4 w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Create new if not registered" id="email-2" required /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                  <div id="spn-success" className="w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form-4"><label htmlFor="email" className="af-class-field-label-6">Coupon</label>
                      <div className="af-class-div-block-17"><input type="text" className="af-class-text-field-5 w-input" maxLength={256} name="coupon" data-name="Coupon" desc="apply-cpn" required /><input type="submit" defaultValue="Apply" data-wait="Please wait..." desc="apply-cpn" className="af-class-submit-button-4 w-button" /></div>
                    </form>
                    <div className="w-form-done">
                      <div>Your coupon has been applied</div>
                    </div>
                    <div className="w-form-fail">
                      <div id="cpn-error">Sorry, this is not a valid coupon.</div>
                    </div>
                  </div><a href="#" className="af-class-buy-buy">Proceed to Checkout</a></div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default WorkshopsView

/* eslint-enable */