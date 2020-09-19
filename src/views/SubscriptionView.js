/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import CheckoutFormView from './CheckoutFormView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class SubscriptionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SubscriptionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SubscriptionView

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
    const proxies = Controller !== SubscriptionView ? transformProxies(this.props.children) : {
      'subscribe-trial': [],
      'subscribe': [],
      'subscribe-coaching': [],
      'checkout-form': [],
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
            <div className="af-class-section-navbar">
              <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar-main w-nav">
                <div className="af-class-nav-container">
                  <div className="af-class-menu-button w-nav-button"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 60px, (max-width: 767px) 70px, 100vw" alt className="af-class-image-5" />
                    <div className="af-class-nav-menu-icon">Menu</div>
                  </div><a href="#" className="af-class-brand w-nav-brand"><img src="images/Masterwhite.png" width={50} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 991px) 100vw, 50px" alt /></a></div>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac6" className="af-class-nav-link w-nav-link">Home</a><a href="#" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ac8" className="af-class-nav-link w-nav-link">Lessons</a><a href="#" data-w-id="6c839d25-01c1-2534-9254-a6d36f0e57fb" className="af-class-nav-link w-nav-link">Challenges</a><a href="/portal" data-w-id="8b0eb6e1-9d29-4605-f18f-f09ff7606dfb" className="af-class-nav-link w-nav-link">Personal Coaching</a><a href="workshops.html" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8acc" className="af-class-nav-link w-nav-link">Workshops</a><a href="/portal" data-w-id="715499ef-3b9c-d96e-0b6f-2174ab9a8ace" className="af-class-nav-link w-nav-link">Portal</a>
                  <div className="af-class-nav-divider" />
                  <h3 className="af-class-nav-help">Get Help</h3>
                  <a href="https://wa.me/12048813113" className="af-class-link-button w-inline-block">
                    <h3 className="af-class-link-button-text">Talk to us</h3>
                  </a>
                </nav>
              </div>
            </div>
            <div className="af-class-subscription-content">
              <div className="af-class-div-block-43">
                <div className="af-class-container-9 w-container">
                  <div className="af-class-sebscription">Subscription Huila+</div>
                  <h1 className="af-class-heading-16">Practice photography<br />but don't shit your pants</h1>
                  <div className="af-class-btn-wrappr"><a href="#subscriptions" className="af-class-button af-class-red w-button">Start trialfor $1</a></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-sub-container w-container">
                <div className="af-class-sub-light">Our point of view</div>
                <h2 className="af-class-sub-heading">Everyone can create awesome photos</h2>
                <div className="af-class-sub-splitter">
                  <div className="af-class-sub-text-box af-class-head">This is some text inside of a div block.This is some text inside.</div>
                  <div className="af-class-sub-text-box af-class-size">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                </div>
                <div className="af-class-sub-splitter">
                  <div className="af-class-sub-text-box af-class-head">This is some text inside of a div block.This is some text inside.</div>
                  <div className="af-class-sub-text-box af-class-size">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                </div>
              </div>
            </div>
            <div className="af-class-subscription-next">
              <div className="w-container">
                <div className="af-class-sub-light">Practice</div>
                <h2 className="af-class-sub-heading">Everyone can create awesome photos</h2>
                <div className="w-layout-grid af-class-grid-10">
                  <div id="w-node-a35a7a977d4f-6516bc65" className="af-class-sub-text-block">
                    <h3 className="af-class-medium-heading">This is some text inside of a div block.</h3>
                    <div className="af-class-sub-text-box"><span className="af-class-text-span-33">This is some text inside of a div block.This is some text inside of a div block.</span>This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block. This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.<br /><br />This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                  </div>
                  <div id="w-node-08a979a5ab17-6516bc65">
                    <div className="af-class-sub-text-block">
                      <h3 className="af-class-medium-heading">This is some text inside of a div block.</h3>
                      <div className="af-class-sub-text-box"><span className="af-class-text-span-33">This is some text inside of a div block.This is some text inside of a div block.</span>This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block. This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.<br /><br />This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                    </div>
                  </div>
                  <div id="w-node-d8bcb8b8ef80-6516bc65" className="af-class-div-block-23" />
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
            <div className="af-class-section">
              <div className="af-class-sub-container w-container">
                <div className="af-class-sub-light">Practice</div>
                <h2 className="af-class-sub-heading">Everyone can create awesome photos</h2>
                <div className="af-class-sub-splitter">
                  <div className="af-class-image123" />
                  <div className="af-class-div-block-24">
                    <div className="af-class-sub-text-box af-class-head">This is some text inside of a div block.This is some text inside.</div>
                    <div className="af-class-sub-text-box">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.<br /><br />This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                  </div>
                </div>
                <div className="w-layout-grid af-class-grid-12">
                  <div id="w-node-787656915f70-6516bc65" className="af-class-prep-heading">
                    <h4 className="af-class-medium-heading">Here are out super specialsits</h4>
                  </div>
                  <div id="w-node-b51f23f0cb6a-6516bc65" data-w-id="9f8cde03-ca6a-81c2-8665-b51f23f0cb6a" style={{opacity: 0}} className="af-class-sub-prepod">
                    <div className="af-class-sub-prepod-img" /><a href="#" className="af-class-sub-link">@shumov_danny</a>
                    <div className="af-class-comment" />
                  </div>
                  <div id="w-node-a19903545c30-6516bc65" data-w-id="e5e76d85-f672-0c05-04d2-a19903545c30" style={{opacity: 0}} className="af-class-sub-prepod af-class-s af-class-wdd">
                    <div className="af-class-sub-prepod-img af-class-s" /><a href="#" className="af-class-sub-link">@shumov_danny</a>
                    <div className="af-class-comment" />
                  </div>
                  <div id="w-node-5749477c0e64-6516bc65" data-w-id="1e232de9-5cba-8663-a3b9-5749477c0e64" style={{opacity: 0}} className="af-class-sub-prepod af-class-s af-class-float">
                    <div className="af-class-sub-prepod-img af-class-m" /><a href="#" className="af-class-sub-link">@shumov_danny</a>
                    <div className="af-class-comment" />
                  </div>
                  <div id="w-node-02d98ac227fc-6516bc65" data-w-id="966d0a01-e458-d3c3-eecf-02d98ac227fc" style={{opacity: 0}} className="af-class-sub-prepod af-class-s af-class-wwa">
                    <div className="af-class-sub-prepod-img af-class-ms" /><a href="#" className="af-class-sub-link">@shumov_danny</a>
                    <div className="af-class-comment" />
                  </div>
                  <div id="w-node-1a2855cd2130-6516bc65" data-w-id="9b95720e-e5f5-d93b-84b4-1a2855cd2130" style={{opacity: 0}} className="af-class-sub-prepod af-class-s af-class-ww">
                    <div className="af-class-sub-prepod-img af-class-ms" /><a href="#" className="af-class-sub-link">@shumov_danny</a>
                    <div className="af-class-comment" />
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-sub-container af-class-less-padding w-container">
                <div className="af-class-sub-light af-class-lefy">Practice</div>
                <h2 className="af-class-sub-heading">This will give an opportunity</h2>
                <div className="af-class-sub-splitter">
                  <div className="af-class-div-block-24">
                    <div className="af-class-sub-text-box af-class-head">This is some text inside of a div block.This is some text inside.</div>
                    <div className="af-class-sub-text-box">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.<br /><br />This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
                  </div>
                  <div className="af-class-image123" />
                </div>
                <div className="w-layout-grid af-class-grid-13">
                  <h4 id="w-node-d6594034071b-6516bc65" className="af-class-sub-heading af-class-small af-class-_2">Here are out super specialsits,<br />and some more heading</h4>
                  <div id="w-node-da497fc21a04-6516bc65">
                    <div className="af-class-sub-text-box af-class-wide">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                  </div>
                  <div id="w-node-7f087b5912b8-6516bc65" className="af-class-div-block-25">
                    <div style={{paddingTop: '56.17021276595745%'}} id="w-node-ba99b0f451a7-6516bc65" className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/4KzmI2oAu9s?rel=0&controls=1&autoplay=1&mute=1&start=0" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen /></div>
                  </div>
                  <div id="w-node-8ce4d310033f-6516bc65">
                    <h4 className="af-class-sub-heading af-class-small af-class-_2">Courses that teach and study for courses?</h4>
                    <div className="af-class-sub-text-box af-class-wide af-class-_2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="subscriptions" className="af-class-section-subscriptions">
              <div className="w-container">
                <div className="af-class-div-block-26">
                  <h2 className="af-class-sub-heading af-class-on-black"><span className="af-class-text-span-35">Try our</span> approach to training</h2>
                </div>
                <div className="af-class-subscriptions">
                  <div className="af-class-subscription af-class-on-black">
                    <h4 className="af-class-sub-heading af-class-small af-class-_3">taste <span className="af-class-text-span-39">the adventure</span></h4>
                    <h4 className="af-class-sub-heading af-class-small af-class-on-black af-class-sm">free<br />for 7 days</h4>
                    <div className="af-class-features">
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                    </div>
                    <div className="af-class-btn-wrapper af-class-sub">{map(proxies['subscribe-trial'], props => <a href="#" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Subscribe</React.Fragment>}</a>)}</div>
                    <p className="af-class-paragraph-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                  </div>
                  <div className="af-class-subscription af-class-on-black af-class-red">
                    <h4 className="af-class-sub-heading af-class-small af-class-_3">one month <span className="af-class-text-span-39">access</span></h4>
                    <h4 className="af-class-sub-heading af-class-small af-class-on-black af-class-sm">$99<br />per month</h4>
                    <div className="af-class-features">
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                    </div>
                    <div className="af-class-btn-wrapper af-class-sub">{map(proxies['subscribe'], props => <a href="#" {...{...props, className: `af-class-button af-class-on-black w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Subscribe</React.Fragment>}</a>)}</div>
                  </div>
                  <div className="af-class-subscription af-class-on-black af-class-green">
                    <h4 className="af-class-sub-heading af-class-small af-class-_3">specia <span className="af-class-text-span-45">coaching</span></h4>
                    <div className="af-class-text-block-26">99 places left</div>
                    <h4 className="af-class-sub-heading af-class-small af-class-on-black af-class-sm">$1200<br />per month</h4>
                    <div className="af-class-features">
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                      <div className="af-class-feature"><span className="af-class-text-span-37">This is some</span> inside of a div block.</div>
                    </div>
                    <div className="af-class-btn-wrapper af-class-sub">{map(proxies['subscribe-coaching'], props => <a href="#" {...{...props, className: `af-class-button af-class-on-black w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Subscribe</React.Fragment>}</a>)}</div>
                  </div>
                </div>
              </div>
              {map(proxies['checkout-form'], props => <div style={{display: 'flex', opacity: 1}} {...{...props, className: `af-class-popup-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <CheckoutFormView.Controller />
              </React.Fragment>}</div>)}
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

export default SubscriptionView

/* eslint-enable */