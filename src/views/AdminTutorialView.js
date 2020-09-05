/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AdminTutorialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminTutorialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminTutorialView

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
    const proxies = Controller !== AdminTutorialView ? transformProxies(this.props.children) : {
      'selector': [],
      'title': [],
      'description': [],
      'category': [],
      'category-name': [],
      'link': [],
      'accessBySubscription': [],
      'file': [],
      'submit': [],
      'message': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="email-form" name="email-form" data-name="Email Form" encType="multipart/form-data"><label htmlFor="tutorial">Select Tutorial</label>{map(proxies['selector'], props => <select id="tutorial" name="tutorial" data-name="tutorial" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-8">Title</label>{map(proxies['title'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Title" id="name-8" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-5">Short description</label>{map(proxies['description'], props => <input type="text" maxLength={256} name="description" data-name="description" placeholder="Description" id="description-5" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="category">Category</label>{map(proxies['category'], props => <select id="category" name="category" data-name="category" required {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="new">New</option></React.Fragment>}</select>)}{map(proxies['category-name'], props => <input type="text" maxLength={256} name="category" data-name="category" placeholder="New category name" id="category-2" required {...{...props, className: `af-class-text-field-6 w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="link">Video Link</label>{map(proxies['link'], props => <input type="text" maxLength={256} name="link" data-name="link" placeholder="Link" id="link" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="embed">Access only with subscription</label><label className="w-checkbox">{map(proxies['accessbysubscription'], props => <input type="checkbox" id="subscription" name="subscription" data-name="subscription" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="subscription" className="w-form-label">Requires to have subscription</span></label><label htmlFor="embed-2">Choose Preview Image</label>
            {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="video-preview" placeholder="Choose Image" /></React.Fragment>}</div>)}
            <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
              {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
            </div>
          </form>
        </span>
      </span>
    )
  }
}

export default AdminTutorialView

/* eslint-enable */