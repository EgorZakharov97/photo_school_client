import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import auth from './Auth'

import AuthController from './controllers/AuthController'
import AdminController from './controllers/pages/AdminController'
import IndexController from './controllers/pages/IndexController'
import SubscriptionView from './views/SubscriptionView'
import PortalController from './controllers/pages/PortalController'
import SubscriptionsController from './controllers/pages/SubscriptionsController'
import CourseVideoWindowController from "./controllers/portal/windows/CourseVideoWindowController";
import EmailEditorController from "./controllers/pages/EmailEditorController";
import EmailsController from "./controllers/pages/EmailsController";

export default function App(props){

    return(
        <Router>
            <Route
                exact path="/admin"
                render={(props) => {
                    return <AdminController {...props} />
                }}
            />

            <Route
                exact path='/subscription'
                render={(props) => {
                    return <SubscriptionsController {...props} />
                }}
            />

            <Route
                exact path='/portal'
                render={(props) => {
                    return <PortalController {...props} />
                }}
            />

            <Route
                exact path='/portal/course'
                render={(props) => {
                    return <CourseVideoWindowController {...props} />
                }}
            />
                
            <Route exact path='/'
                render={props => {
                    return (
                        <>
                            <IndexController {...props} />
                            <AuthController {...props} />
                        </>
                    )
                }}
            />

            <Route exact path='/auth/reset/:secret'
                render={(props) => {
                    return <Redirect to={{path: '/', state:{secret: props.match.params.secret} }} />
                }}        
            />

            <Route exact path='/auth/confirm/:link'
                render={(props) => {
                    return <Redirect to={{path: '/', state:{link: props.match.params.link} }} />
                }}        
            />

            <Route exact path='/emails'
                   render={(props) => {
                       return <EmailsController {...props} />
                   }}
            />

            <Route ecact path='/emails/editor'
                   render={(props) => {
                        return <EmailEditorController {...props} />
                   }}
            />
        </Router>
    )


}