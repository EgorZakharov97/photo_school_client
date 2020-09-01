/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AdminWorkshopsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AdminWorkshopsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AdminWorkshopsView

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
    const proxies = Controller !== AdminWorkshopsView ? transformProxies(this.props.children) : {
      'selector': [],
      'name': [],
      'starts': [],
      'ends': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="wf-form-courseForm" name="wf-form-courseForm" data-name="courseForm" method="post" action="/" className="af-class-form-5"><label htmlFor="workshopName">Select workshop</label>{map(proxies['selector'], props => <select id="workshopName" name="workshopName" data-name="workshopName" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name">Workshop Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="Name" placeholder="Workshop Name" id="name" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="starts">Date the workshop starts</label>
            {map(proxies['starts'], props => <div {...{...props, className: `af-class-html-embed-6 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="starts" placeholder="Date starts" required /></React.Fragment>}</div>)}<label>Date the course ends</label>
            {map(proxies['ends'], props => <div {...{...props, className: `af-class-html-embed-5 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="ends" placeholder="Date ends" required /></React.Fragment>}</div>)}<label htmlFor="registrationDeadline-3">Registration Deadline</label>
            <div className="af-class-html-embed-4 w-embed"><input type="date" name="deadline" placeholder="Registration deadline" required /></div><label htmlFor="duration">Duration</label><input type="number" className="w-input" maxLength={256} name="duration" data-name="duration" desc="name" placeholder="Duration in hrs" id="duration" required /><label htmlFor="price-2">Price</label><input type="text" className="w-input" maxLength={256} name="price" data-name="price" desc="price" placeholder="Price" id="price-2" required /><label>Number of seats</label><input type="number" className="w-input" maxLength={256} name="numPlaces" data-name="Num Places" desc="seats" placeholder="Number of places" id="numPlaces" required /><label>Workshop preview image</label>
            <div desc="file" className="af-class-html-embed-2 w-embed"><input type="file" name="image" placeholder="Choose Image" /></div><label>Course Description</label>
            <div id="wk-description" /><label>You will learn</label>
            <div id="wk-will-learn" /><label>Course timeline</label>
            <div id="wk-timeline" /><input type="submit" defaultValue="Create" data-wait="Please wait..." id="submit" desc="create" className="af-class-button af-class-red w-button" /></form>
        </span>
      </span>
    )
  }
}

export default AdminWorkshopsView

/* eslint-enable */