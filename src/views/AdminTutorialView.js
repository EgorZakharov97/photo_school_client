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
      'subscription': [],
      'file': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="email-form" name="email-form" data-name="Email Form" encType="multipart/form-data"><label htmlFor="tutorial">Title</label>{map(proxies['selector'], props => <select id="tutorial" name="tutorial" data-name="tutorial" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="title-2">Title</label>{map(proxies['title'], props => <input type="text" maxLength={256} name="title" data-name="Title" placeholder="Title" id="title" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-2">Short description</label>{map(proxies['description'], props => <input type="text" maxLength={256} name="description-2" data-name="Description 2" placeholder="Description" id="description-2" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="category">Category</label>{map(proxies['category'], props => <select id="category" name="category" data-name="category" required {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="new">New</option></React.Fragment>}</select>)}{map(proxies['category-name'], props => <input type="text" maxLength={256} name="new_category" data-name="new_category" placeholder="New category name" id="new_category" required {...{...props, className: `af-class-text-field-6 w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="link">Video Link</label>{map(proxies['link'], props => <input type="text" maxLength={256} name="link" data-name="link" placeholder="Link" id="link" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="embed">Access only with subscription</label><label className="w-checkbox">{map(proxies['subscription'], props => <input type="checkbox" id="subscription" name="subscription" data-name="subscription" checked {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="subscription" className="w-form-label">Requires to have subscription</span></label><label htmlFor="embed-2">Choose Preview Image</label>
            {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="video-preview" placeholder="Choose Image" /></React.Fragment>}</div>)}<input type="submit" defaultValue="Create" data-wait="Please wait..." id="create-tutorial" className="af-class-button af-class-red w-button" /></form>
        </span>
      </span>
    )
  }
}

export default AdminTutorialView

/* eslint-enable */