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
import IndexView from './views/IndexView'
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
                <IndexView/>
                <AuthController shouldLogin={shouldLogin} setShouldLogin={setShouldLogin} user={user} setUser={this.setUser} />
            </Route>
        </Router>
    )
}