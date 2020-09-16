/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AdminPresetsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/admin/AdminPresetsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminPresetsView

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
    const proxies = Controller !== AdminPresetsView ? transformProxies(this.props.children) : {
      'selector': [],
      'name': [],
      'subscription': [],
      'image': [],
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
          <form id="email-form" name="email-form" data-name="Email Form" encType="multipart/form-data" className="af-class-form-7"><label htmlFor="selector">Select preset</label>{map(proxies['selector'], props => <select id="selector" name="selector" data-name="selector" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-10">File name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Name" id="name-10" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="embed-3">Access only with subscription</label><label className="w-checkbox">{map(proxies['subscription'], props => <input type="checkbox" id="subscription" name="subscription" data-name="subscription" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="subscription" className="w-form-label">Requires to have subscription</span></label>
            <div className="af-class-div-block-28">
              <div><label htmlFor="description-4">Select feature Image</label>
                {map(proxies['image'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="image" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
              <div><label htmlFor="embed-2">Select preset file</label>
                {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="file" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
            </div>
            <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
              {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
            </div>
          </form>
        </span>
      </span>
    )
  }
}

export default AdminPresetsView

/* eslint-enable */