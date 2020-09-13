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

            <Route path='/'
                // {...props}
                // showLogin={shouldAuthenticate}
                // setShowLogin={setShouldAuthenticate}
                render={(props) => <AuthController {...props} />}         
            />
                
            <Route exact path='/'>
                <IndexController {...props} />
            </Route>

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
        </Router>
    )


}