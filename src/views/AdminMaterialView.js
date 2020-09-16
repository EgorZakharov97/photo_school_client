/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AdminMaterialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminMaterialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminMaterialView

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
    const proxies = Controller !== AdminMaterialView ? transformProxies(this.props.children) : {
      'selector': [],
      'name': [],
      'subscription': [],
      'picture': [],
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
          <form id="wf-form-material-form" name="wf-form-material-form" data-name="material form" encType="multipart/form-data" className="af-class-form-6"><label htmlFor="name-2">Select Material</label>{map(proxies['selector'], props => <select id="tutorial-2" name="tutorial-2" data-name="Tutorial 2" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-9">Material Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Material name" id="name-9" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="embed-3">Access only with subscription</label><label className="w-checkbox">{map(proxies['subscription'], props => <input type="checkbox" id="subscription" name="subscription" data-name="subscription" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="subscription" className="w-form-label">Requires to have subscription</span></label>
            <div className="af-class-div-block-28">
              <div><label htmlFor="email">Material Image</label>
                {map(proxies['picture'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="image" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
              <div><label htmlFor="email-2">Material file</label>
                {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="file" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
            </div>
            <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
              {map(proxies['message'], props => <div {...{...props, className: `af-class-user-message ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
            </div>
          </form>
        </span>
      </span>
    )
  }
}

export default AdminMaterialView

/* eslint-enable */