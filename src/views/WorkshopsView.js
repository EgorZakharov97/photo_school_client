/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import WorkshopView from './WorkshopView'
import WorkshopPastView from './WorkshopPastView'
import FormBuyView from './FormBuyView'

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
      'workshop-past': [],
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
                    <div className="af-class-menu-button w-nav-button"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 60px, (max-width: 767px) 100px, 100vw" alt className="af-class-image-5" />
                      <div className="af-class-nav-menu-icon">Menu</div>
                    </div><a href="#" className="af-class-brand w-nav-brand"><img src="images/Masterwhite.png" width={50} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 991px) 100vw, 50px" alt /></a></div>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac6" className="af-class-nav-link w-nav-link">Home</a><a href="#" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac8" className="af-class-nav-link w-nav-link">Lessons</a><a href="workshops.html" data-w-id="6c839d25-01c1-2534-9254-a6d36f0e57fb" aria-current="page" className="af-class-nav-link w-nav-link w--current">Challenges</a><a href="workshops.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8acc" aria-current="page" className="af-class-nav-link w-nav-link w--current">Workshops</a><a href="/portal" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ace" className="af-class-nav-link w-nav-link">Portal</a>
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
                <div className="w-layout-grid af-class-grid-11">
                  <div id="w-node-0e71b916cca4-b916cca1">
                    <h3 className="af-class-sub-heading af-class-small">Work of our students</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                  </div>
                  <div id="w-node-12470eb5d3dc-b916cca1" className="af-class-div-block-30" />
                  <div id="w-node-3ba1944598e3-b916cca1" className="af-class-div-block-31" />
                  <div id="w-node-ffaf0c63bebc-b916cca1" className="af-class-div-block-32" />
                  <div id="w-node-8299f943c090-b916cca1" className="af-class-div-block-33" />
                  <div id="w-node-6e25bc863e5c-b916cca1" className="af-class-div-block-34" />
                  <div id="w-node-5017b7a63705-b916cca1" className="af-class-div-block-35" />
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
                {map(proxies['workshop-past'], props => <div {...props}>{props.children ? props.children : <React.Fragment>
                  <WorkshopView.Controller-past />
                </React.Fragment>}</div>)}
              </div>
            </div>
            <div id="section-buy" className="af-class-section-buy">
              <FormBuyView.Controller />
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