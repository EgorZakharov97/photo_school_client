/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import CourseHomeView from './CourseHomeView'
import LeaveEmailView from './LeaveEmailView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
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
      'course-home': [],
      'leave-email': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-section-welcome">
              <div className="af-class-video-background">
                <div data-poster-url="https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-transcode.mp4,https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="af-class-background-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-transcode.mp4" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/5f1212b6860f150f9f0e6e14/5f3ee7dcde5a85d4c9d90749_introduction to portraiture_Trim-transcode.webm" data-wf-ignore="true" /></video></div>
              </div>
              <div className="af-class-container-8 w-container">
                <div data-collapse="small" data-animation="default" data-duration={400} role="banner" className="af-class-navbar-main w-nav">
                  <div className="af-class-menu-button w-nav-button"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 59.999996185302734px, (max-width: 767px) 100px, 100vw" alt className="af-class-image-5" />
                    <div className="af-class-nav-menu-icon">Menu</div>
                  </div>
                  <div className="af-class-container-2 w-container"><a href="#" className="af-class-brand w-nav-brand"><img src="images/Masterwhite.png" width={70} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 991px) 100vw, 70px" alt /></a>
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu"><a href="index.html" data-w-id="2c2591f4-9f50-3a72-5deb-6458ad5eca79" aria-current="page" className="af-class-nav-link w-nav-link w--current">What is it?</a><a href="#about" data-w-id="2c2591f4-9f50-3a72-5deb-6458ad5eca7b" className="af-class-nav-link w-nav-link">Who is it for?</a><a href="#contact" data-w-id="2c2591f4-9f50-3a72-5deb-6458ad5eca7d" className="af-class-nav-link w-nav-link">Ask Questions</a><a href="#courses" data-w-id="0a41055f-2f34-d583-b521-7a789ba44ea8" className="af-class-nav-link w-nav-link">Courses</a><a href="/portal" data-w-id="c77b1bd3-badf-0e3a-0091-1b3c49d0af2b" className="af-class-nav-link w-nav-link">Portal</a>
                      <div className="af-class-nav-divider" />
                      <h3 className="af-class-nav-help">Get Help</h3>
                      <a href="#" className="af-class-link-button w-inline-block">
                        <h3 className="af-class-link-button-text">Talk to us</h3>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <h1 className="af-class-heading-main">Photolite Academy</h1>
              <div className="af-class-container-10 w-container">
                <p className="af-class-welcome-phrase">Let's bring your photography game to the next level!<br />‍<br />We are a group of experienced photographers from different fields and we will teach you how totake truly amazing photographs! <br /></p>
              </div>
              <div className="af-class-welcome-phrase af-class-suka">Choose from an <span className="af-class-text-span-22">online studying program</span> or <span className="af-class-text-span-23">in-person workshop</span> and let's get to it! </div>
              <div className="af-class-welcome-about-container-2">
                <div className="af-class-welcome-about af-class-top">
                  <div className="af-class-about-col af-class-www">
                    <a href="#courses" className="af-class-link-block-3 w-inline-block">
                      <div className="af-class-div-block-16"><img src="images/Untitled-design.png" loading="lazy" width={120} alt className="af-class-image-3" /></div>
                      <h1 className="af-class-description-heading"><span className="af-class-text-span-20">In-person</span> Workshops</h1>
                    </a>
                  </div>
                  <div data-w-id="ea14680d-6d32-0030-8bad-5ce3201cd565" className="af-class-about-col af-class-www">
                    <a href="#" className="af-class-link-block-4 w-inline-block">
                      <div className="af-class-div-block-16"><img src="images/Untitled-design-1.png" loading="lazy" width={120} alt className="af-class-image-3" /></div>
                      <h1 className="af-class-description-heading"><span className="af-class-text-span-21">Online</span> Courses<br /><span className="af-class-text-span-19">(Coming Soon)</span></h1>
                    </a>
                  </div>
                </div>
              </div>
              <div className="af-class-welcome-buttons">
                <a href="#about" className="af-class-button af-class-red af-class-mg w-inline-block">
                  <h3 className="af-class-heading">How does it work?</h3>
                </a>
                <a href="#courses" className="af-class-button w-inline-block">
                  <h3 className="af-class-heading">Let's Study!</h3>
                </a>
              </div>
              <div className="af-class-hint-keeper"><img src="images/down.png" loading="lazy" width={40} data-w-id="fc53ee58-497c-1c1e-f20a-0262e1c19edf" style={{opacity: 1}} alt /></div>
            </div>
            <div id="about" className="af-class-section-for-whom">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-3">
                  <div id="w-node-332ec6e03eb9-fbba94a3" className="af-class-img-container af-class-w" />
                  <h3 id="w-node-332ec6e03eba-fbba94a3" className="af-class-section-heading af-class-left"><span className="af-class-text-span">How </span>does it work<span className="af-class-text-span-25">?</span></h3>
                  <p id="w-node-332ec6e03ebe-fbba94a3" className="af-class-section-main-paragraph af-class-left af-class-centered"><strong className="af-class-bold-text-3">First, you have to find and choose a workshop that you are interested in. <br /><br />When you register for a workshop you get access to a student portal with video tutorials, presets, and the most important - workshop group chats, where you can chat with other students and your coaches.<br /><br /></strong><span><strong className="af-class-vsdferhjbukl">EACH WORKSHOP IS MADE OF </strong></span><span className="af-class-text-span-26"><strong className="af-class-bold-text-5">THREE PARTS: </strong></span><strong><br /><br /></strong><span className="af-class-text-span-27"><strong className="af-class-bold-text-2">Theory</strong></span><strong className="af-class-bold-text-4"> - this is where we get to know each other and talk about theoretical background based on the workshop theme.<br /><br /></strong><span><strong className="af-class-bold-text-2">Practice</strong></span><strong className="af-class-bold-text-4"> - this is where it gets interesting. We set up a whole set for you with a model, makeup artists, stylist, and unique concept. We take pictures together, then you take pictures by yourself!<br /><br /></strong><span><strong className="af-class-bold-text-2">Feedback</strong></span><strong className="af-class-bold-text-4"> - after the workshop you will have some photos to work with. We willask you to send us your top 3 images so that we can give you some feedback on the composition, colour, light, and other aspects.</strong></p>
                </div>
              </div>
            </div>
            <div className="af-class-section-how-work-2">
              <div className="af-class-video-background">
                <div data-poster-url="videos/ready_2-poster-00001.jpg" data-video-urls="videos/ready_2-transcode.mp4,videos/ready_2-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="af-class-background-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("videos/ready_2-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="videos/ready_2-transcode.mp4" data-wf-ignore="true" /><source src="videos/ready_2-transcode.webm" data-wf-ignore="true" /></video></div>
              </div>
              <div className="af-class-welcome-about-container-2">
                <h3 className="af-class-section-heading af-class-on-black af-class-center"><span className="af-class-text-span-2">Meet </span>your coaches</h3>
                <div className="af-class-welcome-about">
                  <div className="af-class-about-col af-class-www">
                    <a href="https://www.instagram.com/shumov_danny/" className="af-class-link-wrapper w-inline-block">
                      <div className="af-class-person-avatar af-class-dani" />
                      <h4 className="af-class-person-name">@shumov_danny</h4>
                    </a>
                    <div className="af-class-rich-text af-class-on-black w-richtext">
                      <h2>Danny Shumov</h2>
                      <p>Hello! My name is Danny.<br /><br />I had a chance to study photography from the world-class artists, like Elizaveta Porodina, Dmitry Gusev, and Igor Novikov. I've gained a lot of experience working on creatives and editorial projects and now I'm ready to share this knowledge with you.<br /><br />Cheers.</p>
                    </div>
                  </div>
                  <div className="af-class-about-col af-class-www">
                    <a href="https://www.instagram.com/olya_shendrik/" className="af-class-link-wrapper w-inline-block">
                      <div className="af-class-person-avatar af-class-olya" />
                      <h4 className="af-class-person-name">@olya_shendrik</h4>
                    </a>
                    <div className="af-class-rich-text af-class-on-black w-richtext">
                      <h2>Olya Shendrik</h2>
                      <p>Hello, my creative people! My name is Olya.</p>
                      <p><br />I feel like I’ve been taking pictures my entire life, but to be honest Istarted to take actually worthy pictures only couple years ago after I had achance to learn the psychology of photography from the best&nbsp; Dmitry Gusevand now I want to share this knowledge with you.<br /><br />See you soon.</p>
                    </div>
                  </div>
                </div>
                <div className="af-class-about-quote">
                  <div className="af-class-quote-wrapper">
                    <div className="af-class-quote">"</div>
                    <div className="af-class-quote">"</div>
                  </div>
                  <blockquote className="af-class-block-quote-2"><span><strong className="af-class-bold-text">We are very excited to bring this photography workshop to life and share our experience with you. This is some kind of event we wish we had at the beginning of our photography path. We went through a bunch of mistakes by ourselves now our mission is to help you avoid them and grow with us. Hope to meet you soon!</strong></span></blockquote>
                </div>
              </div>
            </div>
            <div id="about" className="af-class-section-for-whom-2">
              <div className="w-container">
                <div className="af-class-div-block-13">
                  <h3 className="af-class-section-heading-2"><span className="af-class-text-span-10">Who </span>is it for?<br /></h3>
                </div>
              </div>
              <div className="af-class-who-blocks">
                <div className="af-class-who-block-wrapper">
                  <div className="af-class-who-block">
                    <h3 className="af-class-for-whom-heading-block">For Beginners</h3>
                    <div className="af-class-fot-whom-text">Get ready. It's time to switch into a beast mode. We will help you discover that you can shoot better. Way better. We will help you to build your portfolio and gain creativity.</div>
                  </div>
                </div>
                <div className="af-class-who-block-wrapper">
                  <div className="af-class-who-block">
                    <h3 className="af-class-for-whom-heading-block">For Professionals</h3>
                    <div className="af-class-for-whom-text"><strong>We are not here to show you some basics!</strong><br /><strong>We focus on your creativity first and there's always a challenging "out of the box" concept explained in each workshop. Get ready for a challenge!</strong></div>
                  </div>
                </div>
                <div className="af-class-who-block-wrapper">
                  <div className="af-class-who-block">
                    <h3 className="af-class-for-whom-heading-block">Not Protographers</h3>
                    <div className="af-class-for-whom-text"><strong>Looking for a new hobby? Bored? We gotch you. Explore photography and learn new skills with us. Explore the world through an artistic approach.</strong><br /><strong>It's fun!</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section-theory">
              <div className="w-container">
                <h3 className="af-class-section-heading af-class-senter"><span className="af-class-text-span">Dive into </span>the theory</h3>
                <div className="af-class-dive-into-img-wrapper" />
                <p className="af-class-section-main-paragraph af-class-centered">We will explain to you the most complicated concept of photography using the most understandable methods. We know how boring the theoretical part of education can be, that's why we divided all the information into offline and online blocks.<br /><br />You will have video tutorials, posing guides, and reading recommendations. At the same time, we will provide you with a strong base during our in-person workshops, passing the knowledge we gained from world-class artists.</p>
              </div>
            </div>
            <div className="af-class-section-videos">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-3">
                  <div id="w-node-8e4fe85ea04b-fbba94a3" className="af-class-content-col af-class-_2" />
                  <h3 id="w-node-bff495009c87-fbba94a3" className="af-class-section-heading af-class-on-black af-class-smaller"><span className="af-class-text-span-2">Watch </span>courses and vebinars</h3>
                  <p id="w-node-06861aeb8c29-fbba94a3" className="af-class-black-simple-paragraph af-class-shrink">You will have access to video tutorials, lessons and vebinars with other artists and students. This access is exclusive and limited to 1 month after your workshop date.</p>
                </div>
              </div>
              <div className="af-class-video-background">
                <div data-poster-url="videos/profile-poster-00001.jpg" data-video-urls="videos/profile-transcode.mp4,videos/profile-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="af-class-background-video w-background-video w-background-video-atom"><video autoPlay loop style={{backgroundImage: 'url("videos/profile-poster-00001.jpg")'}} muted playsInline data-wf-ignore="true" data-object-fit="cover"><source src="videos/profile-transcode.mp4" data-wf-ignore="true" /><source src="videos/profile-transcode.webm" data-wf-ignore="true" /></video></div>
              </div>
            </div>
            <div className="af-class-section-study">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-4">
                  <h3 id="w-node-a31edfce4188-fbba94a3" className="af-class-section-heading af-class-smaller"><span className="af-class-text-span">Study</span> and practice.</h3>
                  <div id="w-node-e74044531675-fbba94a3" className="af-class-div-block-12">
                    <div className="af-class-section-main-paragraph w-richtext">
                      <h2>Yes! You are going to take photos.</h2>
                      <p>During our workshops, each student is going to have some time to take pictures one on one with a model at the set that we've prepared for you.</p>
                      <p><strong>Build a unique portfolio.</strong></p>
                      <p>Each of our workshops is going to have a unique concept behind it. It means that the photos you take during the workshop are going to be "out of this world".</p>
                      <p><strong>Learn to work with a team.</strong></p>
                      <p>We will have a serious team on each workshop set. This is your chance to learn how to interact with other photographers, models, and stylists.</p>
                      <p>‍</p>
                    </div>
                    <a href="#courses" className="af-class-button w-inline-block">
                      <h4>Let's study!</h4>
                    </a>
                  </div>
                  <div id="w-node-9b4ac7bd11c7-fbba94a3" className="af-class-img-wrapper" />
                </div>
              </div>
            </div>
            <div className="af-class-section-results">
              <div className="w-container">
                <h2 className="af-class-heading-on-black af-class-large"><span className="af-class-text-span-2">Check out </span>the work of our students.</h2>
                <a href="#" className="af-class-lightbox w-inline-block w-lightbox">
                  <div className="af-class-lightbox-grid">
                    <div className="af-class-example-img-wrapper af-class-hd"><img src="images/5a4883fd-f6da-41e1-a294-445fe5f4e63a.JPG" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper"><img src="images/1474c136-683a-40e8-8b76-457b33a3e631.JPG" srcSet="images/1474c136-683a-40e8-8b76-457b33a3e631-p-500.jpeg 500w, images/1474c136-683a-40e8-8b76-457b33a3e631.JPG 683w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 200.08522033691406px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper"><img src="images/2ad95a76-5776-4136-9f28-22eb5e3cebcb.JPG" srcSet="images/2ad95a76-5776-4136-9f28-22eb5e3cebcb-p-500.jpeg 500w, images/2ad95a76-5776-4136-9f28-22eb5e3cebcb-p-1080.jpeg 1080w, images/2ad95a76-5776-4136-9f28-22eb5e3cebcb.JPG 1600w" sizes="(max-width: 767px) 450.2698669433594px, (max-width: 1279px) 375.2272644042969px, 600.3693237304688px" alt className="af-class-img-lightbox af-class-special" /></div>
                    <div className="af-class-example-img-wrapper"><img src="images/3adefa2a-7962-42e5-b036-f6ba46e94da7.JPG" srcSet="images/3adefa2a-7962-42e5-b036-f6ba46e94da7-p-500.jpeg 500w, images/3adefa2a-7962-42e5-b036-f6ba46e94da7-p-800.jpeg 800w, images/3adefa2a-7962-42e5-b036-f6ba46e94da7.JPG 1000w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 200px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper af-class-hd"><img src="images/46175b8c-eda6-4421-85ff-2876fa94e09d.JPG" srcSet="images/46175b8c-eda6-4421-85ff-2876fa94e09d-p-800.jpeg 800w, images/46175b8c-eda6-4421-85ff-2876fa94e09d.JPG 1066w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 199.8721466064453px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper af-class-hd"><img src="images/59198133-fc76-4640-a6f7-455b6e910137.JPG" srcSet="images/59198133-fc76-4640-a6f7-455b6e910137-p-500.jpeg 500w, images/59198133-fc76-4640-a6f7-455b6e910137-p-800.jpeg 800w, images/59198133-fc76-4640-a6f7-455b6e910137.JPG 1066w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 199.8721466064453px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper af-class-hd"><img src="images/69823ef2-643b-4afc-a25f-50d35edf0ac0.JPG" srcSet="images/69823ef2-643b-4afc-a25f-50d35edf0ac0-p-500.jpeg 500w, images/69823ef2-643b-4afc-a25f-50d35edf0ac0-p-800.jpeg 800w, images/69823ef2-643b-4afc-a25f-50d35edf0ac0-p-1080.jpeg 1080w, images/69823ef2-643b-4afc-a25f-50d35edf0ac0.JPG 1158w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 217.11647033691406px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                    <div className="af-class-example-img-wrapper af-class-hd"><img src="images/74438c8f-5db4-4dc9-bec2-d49a72b75e18.JPG" srcSet="images/74438c8f-5db4-4dc9-bec2-d49a72b75e18-p-500.jpeg 500w, images/74438c8f-5db4-4dc9-bec2-d49a72b75e18-p-800.jpeg 800w, images/74438c8f-5db4-4dc9-bec2-d49a72b75e18.JPG 1040w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 200px, (max-width: 991px) 174.7158966064453px, (max-width: 1279px) 225.59658813476562px, 216.19317626953125px" alt className="af-class-img-lightbox" /></div>
                  </div>
                </a>
                <div className="af-class-btn-wrapper">
                  <a href="#courses" className="af-class-button af-class-on-black w-inline-block">
                    <h4>Let's study!</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="af-class-section-mistakes">
              <div className="w-container">
                <div className="w-layout-grid af-class-grid-3 af-class-gap">
                  <div id="w-node-7163463799c2-fbba94a3" className="af-class-img-container af-class-_2" />
                  <h3 id="w-node-3e1bc47b03fd-fbba94a3" className="af-class-section-heading af-class-left"><span className="af-class-text-span">Learn </span>from your mistakes.</h3>
                  <p id="w-node-bae95e1de94e-fbba94a3" className="af-class-section-main-paragraph af-class-left">After each workshop, you will have some material to use for your portfolio and we'd love to help you understand what your images look like from an experts point of view.<br /><br />We will ask you to send us the top 3 images you took during the workshop and we will review them. We will give you some valuable feedback and personal advice.</p>
                </div>
              </div>
            </div>
            <div id="courses" className="af-class-section-courses">
              <div className="af-class-container-courses w-container">
                <h2 className="af-class-heading-on-black af-class-modified">Classes <span className="af-class-text-span-2">Calendar</span></h2>
              </div>
              <div className="af-class-container-7 w-container">
                <div className="af-class-dropdown-wrapper">
                  <CourseHomeView.Controller-af-sock-course-home />
                </div>
              </div>
            </div>
            <div id="contact" className="af-class-section-ask">
              <div className="w-container">
                <h3 className="af-class-section-heading af-class-mid">Any questions <span className="af-class-text-span-8">left</span>?</h3>
                <div className="af-class-div-block-9">
                  <a href="#" className="af-class-button af-class-red w-inline-block">
                    <div className="af-class-text-block-5">Let's talk on WhatsUp</div>
                  </a>
                </div>
              </div>
            </div>
            <footer id="footer" className="af-class-footer">
              <div className="w-container">
                <div className="af-class-footer-flex-container"><a href="#" className="af-class-footer-logo-link w-inline-block"><img src="images/Masterwhite.png" width={100} srcSet="images/Masterwhite-p-500.png 500w, images/Masterwhite.png 766w" sizes="(max-width: 479px) 100px, (max-width: 767px) 15vw, 100px" alt /></a>
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
            <div className="af-class-edit-course">
              <div className="w-container">
                <div className="af-class-window">
                  <h2 className="af-class-heading-window">Edit your comment</h2>
                  <div>
                    <div id="comment-editor" className="af-class-div-block-15" />
                  </div>
                  <div className="af-class-splitter">
                    <a href="#about" className="af-class-button af-class-red af-class-smaller w-inline-block">
                      <h3 className="af-class-heading af-class-smaller">Update</h3>
                    </a>
                    <a href="#courses" className="af-class-button af-class-on-white af-class-smaller w-inline-block">
                      <h3 className="af-class-heading af-class-black af-class-smaller">Delete!</h3>
                    </a>
                  </div>
                  <div data-w-id="2562af65-ff64-6da9-3390-16bf712dd2e9" className="af-class-close">X</div>
                </div>
              </div>
            </div>
            {map(proxies['leave-email'], props => <div data-w-id="fcd33254-ba14-2e3a-ab7c-a35cd106839b" style={{opacity: 0, display: 'none'}} {...{...props, className: `af-class-authentication-window ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <LeaveEmailView.Controller />
            </React.Fragment>}</div>)}
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */