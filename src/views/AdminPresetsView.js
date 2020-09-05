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
      Controller = require('../controllers/AdminPresetsController')
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
      'description': [],
      'image': [],
      'file': [],
      'submit': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="email-form" name="email-form" data-name="Email Form" encType="multipart/form-data" className="af-class-form-7"><label htmlFor="name-3">Select preset</label>{map(proxies['selector'], props => <select id="tutorial-2" name="tutorial-2" data-name="Tutorial 2" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-7">File name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name-3" data-name="Name 3" placeholder="Name" id="name-3" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-3">Short description</label>{map(proxies['description'], props => <input type="text" maxLength={256} name="description-3" data-name="Description 3" placeholder="Description" id="description-3" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}
            <div className="af-class-div-block-28">
              <div><label htmlFor="description-4">Select feature Image</label>
                {map(proxies['image'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="video-preview" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
              <div><label htmlFor="embed-2">Select preset file</label>
                {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-3 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="video-preview" placeholder="Choose Image" /></React.Fragment>}</div>)}
              </div>
            </div>{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="create-preset" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
        </span>
      </span>
    )
  }
}

export default AdminPresetsView

/* eslint-enable */