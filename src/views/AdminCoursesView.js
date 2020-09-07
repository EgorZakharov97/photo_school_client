/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import TableVideoView from './TableVideoView'
import TableFileView from './TableFileView'
import TableExampleView from './TableExampleView'

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
      'videos-container': [],
      'video-table': [],
      'vi-name': [],
      'link': [],
      'create': [],
      'files-container': [],
      'video-table': [],
      'fl-name': [],
      'file': [],
      'create': [],
      'examples-container': [],
      'table-example': [],
      'submit': [],
      'upload': [],
      'images': [],
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
            {map(proxies['info'], props => <div {...{...props, className: `af-class-info ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment><label htmlFor="selecrot">Select Course</label>{map(proxies['selector'], props => <select id="selecrot" name="selecrot" data-name="selecrot" {...{...props, className: `w-select ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><option value="!new">New</option></React.Fragment>}</select>)}<label htmlFor="name-7">Course name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Course name" id="name-7" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="price-3">Price</label>{map(proxies['price'], props => <input type="number" maxLength={256} name="price" data-name="price" placeholder="Price" id="price-3" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-7">Short Description</label>{map(proxies['description'], props => <input type="text" maxLength={256} name="description" data-name="description" placeholder="Short Description" id="description-7" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="description-5">Publish</label><label className="w-checkbox">{map(proxies['access'], props => <input type="checkbox" id="access" name="access" data-name="access" {...{...props, className: `w-checkbox-input ${props.className || ''}`}}>{props.children}</input>)}<span htmlFor="access" className="w-form-label">This course can be accessed by users</span></label>
              <div>Users how bought this course will stil have access</div>
              <div className="af-class-submission">{map(proxies['submit'], props => <input type="submit" value="Create" data-wait="Please wait..." id="submit" {...{...props, className: `af-class-button af-class-red w-button ${props.className || ''}`}}>{props.children}</input>)}
                {map(proxies['message'], props => <div {...{...props, className: `af-class-text-block-24 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
            {map(proxies['assets'], props => <div {...{...props, className: `af-class-assets ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
              <div className="af-class-videos">
                {map(proxies['videos-container'], props => <div {...{...props, className: `af-class-table-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                  <h2 className="af-class-table-heading">Videos</h2>
                  {map(proxies['video-table'], props => <div {...{...props, className: `af-class-table-element af-class-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <TableVideoView.Controller />
                  </React.Fragment>}</div>)}
                  <div className="af-class-table-element">
                    <div className="af-class-table-index">New</div>{map(proxies['vi-name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="Video Name" id="name-17" required {...{...props, className: `af-class-table-input af-class-title w-input ${props.className || ''}`}}>{props.children}</input>)}{map(proxies['link'], props => <input type="text" maxLength={256} name="link" data-name="link" placeholder="Link" id="link-4" required {...{...props, className: `af-class-table-input w-input ${props.className || ''}`}}>{props.children}</input>)}
                    <div className="af-class-table-buttons">{map(proxies['create'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Create</React.Fragment>}</a>)}</div>
                  </div>
                </React.Fragment>)}</div>)}
              </div>
              <div className="af-class-files">
                {map(proxies['files-container'], props => <div {...{...props, className: `af-class-table-container ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                  <h2 className="af-class-table-heading">Files</h2>
                  {map(proxies['video-table'], props => <div {...{...props, className: `af-class-table-element af-class-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <TableFileView.Controller />
                  </React.Fragment>}</div>)}
                  <div className="af-class-table-element">
                    <div className="af-class-table-index">New</div>{map(proxies['fl-name'], props => <input type="text" maxLength={256} name="name" data-name="name" placeholder="File name" id="name-20" required {...{...props, className: `af-class-table-input af-class-title w-input ${props.className || ''}`}}>{props.children}</input>)}
                    {map(proxies['file'], props => <div {...{...props, className: `af-class-html-embed-2 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="file" /></React.Fragment>}</div>)}
                    <div className="af-class-table-buttons">{map(proxies['create'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Create</React.Fragment>}</a>)}</div>
                  </div>
                </React.Fragment>)}</div>)}
              </div>
              <div className="af-class-examples">
                <div className="af-class-table-container">
                  <h2 className="af-class-table-heading">Examples</h2>
                  {map(proxies['examples-container'], props => <div {...{...props, className: `af-class-table-element af-class-image ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                    {map(proxies['table-example'], props => <div {...{...props, className: `af-class-table-element-wrapper ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                      <TableExampleView.Controller />
                    </React.Fragment>}</div>)}
                    <div className="af-class-table-element-image af-class-new">
                      {map(proxies['submit'], props => <div {...{...props, className: `af-class-div-block-40 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>{map(proxies['upload'], props => <a href="#" {...{...props, className: `af-class-button af-class-update w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Save</React.Fragment>}</a>)}</React.Fragment>)}</div>)}
                      {map(proxies['images'], props => <div {...{...props, className: `af-class-html-embed-8 w-embed ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><input type="file" name="images" multiple /></React.Fragment>}</div>)}
                    </div>
                  </React.Fragment>)}</div>)}
                </div>
              </div>
            </React.Fragment>)}</div>)}
          </form>
        </span>
      </span>
    )
  }
}

export default AdminCoursesView

/* eslint-enable */