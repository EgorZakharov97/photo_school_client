/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import AssetsView from './AssetsView'

const scripts = [

]

let Controller

class AdminCoursesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminCoursesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminCoursesView

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
    const proxies = Controller !== AdminCoursesView ? transformProxies(this.props.children) : {
      'info': [],
      'selector': [],
      'name': [],
      'price': [],
      'description': [],
      'access': [],
      'submit': [],
      'message': [],
      'assets': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form-8">
            {map(proxies['info'], props => <div {...{...props, className: `af-class-info ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment><label htmlFor="selecrot">Select Course</label>{map(proxies['selector'], props => <select id="selecrot" name="selecrot" data-name="selecrot" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-7">Course name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Course name" id="name-7" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="price-3">Price</label>{map(proxies['price'], props => <input type="number" maxLength={256} name="price" data-name="price" placeholder="Short Description" id="price-3" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-6">Short Description</label>{map(proxies['description'], props => <input type="text" maxLength={256} name="description-6" data-name="Description 6" placeholder="Short Description" id="description-6" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-5">Publish</label><label className="w-checkbox">{map(proxies['access'], props => <input type="checkbox" id="public" name="public" data-name="public" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="public" className="w-form-label">This course can be accessed by users</span></label>
              <div>Users how bought this course will stil have access</div>
              <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
                {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
            {map(proxies['assets'], props => <div {...{...props, className: `af-class-assets ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <AssetsView.Controller />
            </React.Fragment>}</div>)}
          </form>
        </span>
      </span>
    )
  }
}

export default AdminCoursesView

/* eslint-enable */