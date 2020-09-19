/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
  fetch("https://code.jquery.com/jquery-3.3.1.min.js").then(body => body.text()),
  fetch("/public/js/jquery.instagramFeed.js").then(body => body.text()),
  Promise.resolve("$(window).on(\"load\",function(){$.instagramFeed({username:\"shumov_danny\",container:\"#instagram-feed-dany\",display_profile:!0,display_biography:!0,display_igtv:!1,display_gallery:!0,items:16}),$.instagramFeed({username:\"olya_shendrik\",container:\"#instagram-feed-olya\",display_profile:!0,display_biography:!0,display_igtv:!1,display_gallery:!0,items:16})});"),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);


          	.instagram_profile {
            	display: none;
            }
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-section-2">
              <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar-main w-nav">
                <div className="af-class-nav-container">
                  <div className="af-class-menu-button w-nav-button"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 60px, (max-width: 767px) 70px, 100vw" alt className="af-class-image-5" />
                    <div className="af-class-nav-menu-icon">Menu</div>
                  </div><a href="#" className="af-class-brand w-nav-brand"><img src="images/Masterwhite.png" width={50} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 991px) 100vw, 50px" alt /></a></div>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac6" aria-current="page" className="af-class-nav-link w-nav-link w--current">Home</a><a href="#" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac8" className="af-class-nav-link w-nav-link">Lessons</a><a href="workshops.html" data-w-id="6c839d25-01c1-2534-9254-a6d36f0e57fb" className="af-class-nav-link w-nav-link">Challenges</a><a href="/portal" data-w-id="8b0eb6e1-9d29-4605-f18f-f09ff7606dfb" className="af-class-nav-link w-nav-link">Personal Coaching</a><a href="workshops.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8acc" className="af-class-nav-link w-nav-link">Workshops</a><a href="/portal" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ace" className="af-class-nav-link w-nav-link">Portal</a>
                  <div className="af-class-nav-divider" />
                  <h3 className="af-class-nav-help">Get Help</h3>
                  <a href="https://wa.me/12048813113" className="af-class-link-button w-inline-block">
                    <h3 className="af-class-link-button-text">Talk to us</h3>
                  </a>
                </nav>
              </div>
            </div>
            <div className="af-class-section-welcome">
              <div className="af-class-welcome-headers">
                <h1 className="af-class-heading-main">Photolite Academy</h1>
                <div className="af-class-welcome-subheader">
                  <h1 className="af-class-heading-2">For photographers.<br />From photographers</h1>
                  <p className="af-class-welcome-phrase">Practice. Create. Compete. Every day.<br /></p>
                  <div className="af-class-buttons w-container"><a href="#" className="af-class-button af-class-on-black af-class-red w-button">Try 7 days for $1*</a><a href="subscription.html" className="af-class-button af-class-on-black w-button">Learn More</a></div>
                </div>
              </div>
              <div className="af-class-container-bottom">
                <div className="af-class-welcome-down"><img src="images/down.png" loading="lazy" width={40} data-w-id="fc53ee58-497c-1c1e-f20a-0262e1c19edf" style={{opacity: 1}} alt /></div>
              </div>
              <div className="af-class-video-background">
                <div data-poster-url="videos/Mockup_03-poster-00001.jpg" data-video-urls="videos/Mockup_03-transcode.mp4,videos/Mockup_03-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="af-class-background-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("videos/Mockup_03-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="videos/Mockup_03-transcode.mp4" data-wf-ignore="true" /><source src="videos/Mockup_03-transcode.webm" data-wf-ignore="true" /></video></div>
              </div>
            </div>
            <div data-w-id="c02f50b3-70d9-54e1-1dfb-eefe454ed46a" className="af-class-subscription-welcome af-class-nah">
              <div className="w-layout-grid af-class-grid-8">
                <div id="w-node-59e5d36c871a-fbba94a3" className="af-class-presentation-card">
                  <h1 className="af-class-presentation-heading">Community</h1>
                  <div className="af-class-text-block-20">Become a part of our community, ask questions,help others with answers</div><a href="#" className="af-class-presentation-link">Read more →</a>
                  <div className="af-class-div-block-19" />
                </div>
                <div id="w-node-1a7a37f29d37-fbba94a3" className="af-class-presentation-card">
                  <h1 className="af-class-presentation-heading">Challenges</h1>
                  <div className="af-class-text-block-20">Try to repeat references<br />and get professionals' feedback</div><a href="subscription.html" className="af-class-presentation-link">Read more→</a>
                  <div className="af-class-div-block-19" />
                </div>
                <div id="w-node-3aaf28746a2f-fbba94a3" className="af-class-presentation-card">
                  <h1 className="af-class-presentation-heading">Online Lessons</h1>
                  <div className="af-class-text-block-20">Try to repeat references<br />and get professionals' feedback</div><a href="subscription.html" className="af-class-presentation-link">Read more→</a>
                  <div className="af-class-div-block-19" />
                </div>
                <div id="w-node-4ab3a8b17650-fbba94a3" className="af-class-presentation-card">
                  <h1 className="af-class-presentation-heading">Workshops</h1>
                  <div className="af-class-text-block-20">Meet your coaches in Winnipeg, learn and apply your knowledge</div><a href="#" className="af-class-presentation-link">Read more →</a>
                  <div className="af-class-div-block-19" />
                </div>
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
            <div className="af-class-section-how-work-2">
              <div className="af-class-home-container">
                <h3 className="af-class-section-heading"><span className="af-class-text-span-2">Meet </span>your coaches:</h3>
              </div>
              <div className="af-class-welcome-about">
                <div className="af-class-about-col">
                  <div className="af-class-div-block-22">
                    <a href="https://www.instagram.com/shumov_danny/" target="_blank" className="af-class-link-wrapper w-inline-block">
                      <div className="af-class-person-avatar af-class-dani" />
                      <h4 className="af-class-person-name">@ shumov_danny</h4>
                    </a>
                    <p className="af-class-paragraph-2">"Fly like a baterfly,<br />bite like an asshole"</p>
                  </div>
                  <div className="af-class-insta-wrapper">
                    <div className="af-class-html-embed w-embed">
                      <div id="instagram-feed-dany" className="af-class-instagram_feed" />
                    </div>
                  </div>
                </div>
                <div className="af-class-about-col">
                  <div className="af-class-div-block-22">
                    <a href="https://www.instagram.com/shumov_danny/" target="_blank" className="af-class-link-wrapper w-inline-block">
                      <div className="af-class-person-avatar af-class-olya" />
                      <h4 className="af-class-person-name">@ olya_shendrik</h4>
                    </a>
                    <p className="af-class-paragraph-2">"Fly like a stone,<br />cry like a baby"</p>
                  </div>
                  <div className="af-class-html-embed w-embed">
                    <div id="instagram-feed-olya" className="af-class-instagram_feed" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-3">
              <div className="af-class-home-container">
                <h3 className="af-class-section-heading af-class-on-black"><span className="af-class-text-span-2">What's </span> the deal:</h3>
                <div className="w-container">
                  <div className="w-layout-grid af-class-grid-101">
                    <div id="w-node-d37d0b0bceee-fbba94a3" className="af-class-div-block-52-copy">
                      <div className="af-class-div-block-55"><img src="images/Masterwhite.png" loading="lazy" width={200} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 62vw, (max-width: 991px) 150px, 200px" alt className="af-class-image-9" /></div>
                      <div className="af-class-text-block-27 af-class-reverse">This is some text inside of a div block</div>
                    </div>
                    <div id="w-node-e2ec500a1525-fbba94a3" className="af-class-div-block-52">
                      <div className="af-class-div-block-54"><img src="images/Masterwhite.png" loading="lazy" width={200} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 62vw, (max-width: 991px) 150px, 200px" alt className="af-class-image-9 af-class-right" /></div>
                      <div className="af-class-text-block-27">This is some text inside of a div block</div>
                    </div>
                    <div id="w-node-03a82a9d1e12-fbba94a3" className="af-class-awawdwa">
                      <div className="af-class-div-block-55"><img src="images/Masterwhite.png" loading="lazy" width={200} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 62vw, (max-width: 991px) 150px, 200px" alt className="af-class-image-9" /></div>
                      <div className="af-class-text-block-27 af-class-reverse">This is some text inside of a div block</div>
                    </div>
                    <div id="w-node-6ca177d3e0c3-fbba94a3" className="af-class-wdawdad">
                      <div className="af-class-div-block-54"><img src="images/Masterwhite.png" loading="lazy" width={200} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 62vw, (max-width: 991px) 150px, 200px" alt className="af-class-image-9 af-class-right" /></div>
                      <div className="af-class-text-block-27">This is some text inside of a div block</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className="af-class-section-ask">
              <div className="w-container">
                <h3 className="af-class-section-heading af-class-mid af-class-qs">Any questions <span className="af-class-text-span-8">left</span>?</h3>
                <div className="af-class-div-block-9">
                  <a href="https://wa.me/12048813113" className="af-class-button af-class-red w-inline-block">
                    <div className="af-class-text-block-5">Let's talk</div>
                  </a>
                </div>
              </div>
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

export default IndexView

/* eslint-enable */