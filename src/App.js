import React, {useState} from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthController from './controllers/AuthController'
import AdminController from './controllers/pages/AdminController'
import IndexController from './controllers/pages/IndexController'
import SubscriptionView from './views/SubscriptionView'

export default function App(){

    const [user, setUser] = useState({})
    const [shouldLogin, setShouldLogin] = useState(true)

    return(
        <Router>
            <Route exact path='/admin'>
                <AdminController user={user} />
            </Route>
            <Route path='/'>
                <IndexController/>
                <AuthController shouldLogin={shouldLogin} setShouldLogin={setShouldLogin} user={user} setUser={setUser} />
            </Route>
        </Router>
    )
}