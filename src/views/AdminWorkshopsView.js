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
      'deadline': [],
      'duration': [],
      'price': [],
      'seats': [],
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
          <form id="wf-form-courseForm" name="wf-form-courseForm" data-name="courseForm" method="post" action="/" className="af-class-form-5"><label htmlFor="workshopName">Select workshop</label>{map(proxies['selector'], props => <select id="workshopName" name="workshopName" data-name="workshopName" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name">Workshop Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="Name" placeholder="Workshop Name" id="name" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="starts">Date the workshop starts</label>
            {map(proxies['starts'], props => <div {...{...props, className: `af-class-html-embed-6 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="starts" placeholder="Date starts" required /></React.Fragment>}</div>)}<label>Date the course ends</label>
            {map(proxies['ends'], props => <div {...{...props, className: `af-class-html-embed-5 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="ends" placeholder="Date ends" required /></React.Fragment>}</div>)}<label htmlFor="registrationDeadline-3">Registration Deadline</label>
            {map(proxies['deadline'], props => <div {...{...props, className: `af-class-html-embed-4 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="date" name="deadline" placeholder="Registration deadline" required /></React.Fragment>}</div>)}<label htmlFor="duration">Duration</label>{map(proxies['duration'], props => <input type="number" maxLength={256} name="duration" data-name="duration" placeholder="Duration in hrs" id="duration" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="price-2">Price</label>{map(proxies['price'], props => <input type="text" maxLength={256} name="price" data-name="price" placeholder="Price" id="price-2" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label>Number of seats</label>{map(proxies['seats'], props => <input type="number" maxLength={256} name="numPlaces" data-name="Num Places" placeholder="Number of places" id="numPlaces" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label>Workshop preview image</label>
            {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="image" placeholder="Choose Image" /></React.Fragment>}</div>)}<label>Course Description</label>
            <div id="wk-description" /><label>You will learn</label>
            <div id="wk-will-learn" /><label>Course timeline</label>
            <div id="wk-timeline" />{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
        </span>
      </span>
    )
  }
}

export default AdminWorkshopsView

/* eslint-enable */