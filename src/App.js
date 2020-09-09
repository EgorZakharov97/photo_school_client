import React, {useState, useEffect} from 'react'
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

    useEffect(() => {
        getUserFromStorage()
    })

    return(
        <Router>
            <Route exact path='/admin'>
                <AdminController user={user} />
            </Route>
            <Route exact path='/'>
                <IndexController/>
            </Route>
            <Router path='/'>
                <AuthController shouldLogin={shouldLogin} setShouldLogin={setShouldLogin} user={user} setUser={saveUser} />
            </Router>
        </Router>
    )

    function getUserFromStorage() {
        const LSUser = JSON.parse(window.localStorage.getItem('user'))
        if (LSUser && LSUser != {}) setUser(LSUser)
    }

    function saveUser(newUser){
        if(newUser) setUser(newUser)
        window.localStorage.setItem('user', JSON.stringify(user))
    }
}