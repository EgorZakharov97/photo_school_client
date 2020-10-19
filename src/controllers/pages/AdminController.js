import React from 'react'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'

import AdminView from '../../views/AdminView'
import AdminWorkshopsController from '../admin/AdminWorkshopsController'
import AdminTutorialsController from '../admin/AdminTutorialsController'
import AdminMaterialsController from '../admin/AdminMaterialsController'
import AdminPresetsController from '../admin/AdminPresetsController'
import AdminCouponsController from '../admin/AdminCouponsController'
import AdminChallengesController from '../admin/AdminChallengesController'
import AdminCoursesController from '../admin/AdminCoursesController'
import AdminUsersController from "../admin/AdminUsersController";

export default class AdminController extends React.Component {

    stateChangeHandler(dataObject) {
        const key = dataObject.name;
        const value = dataObject.value;
        this.setState({[key]: value})
    }

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f49ff0402788436a1bafc64';
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14';

        var doc = document.getElementsByTagName("html")[0];
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID);
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    };

    render() {
        return (
            auth.isAdmin() ? (
                <AdminView>
                    <username>{auth.getUser().username}</username>
                    <logout onClick={e => this.logout(e)} />
                    <admin-workshops>
                        <AdminWorkshopsController/>
                    </admin-workshops>
    
                    <admin-tutorial>
                        <AdminTutorialsController/>
                    </admin-tutorial>
    
                    <admin-material>
                        <AdminMaterialsController/>
                    </admin-material>
    
                    <admin-presets>
                        <AdminPresetsController/>
                    </admin-presets>
    
                    <admin-coupons>
                        <AdminCouponsController/>
                    </admin-coupons>
    
                    <admin-challenges>
                        <AdminChallengesController/>
                    </admin-challenges>
    
                    <admin-courses>
                        <AdminCoursesController/>
                    </admin-courses>

                    <admin-users>
                        <AdminUsersController {...this.props} />
                    </admin-users>
                </AdminView>
            ) : (
                <Redirect to={{path: '/', state: {from: this.props.location, shouldAuthenticate: true} }} />
            )
        )
    }

    logout(e){
        e.preventDefault();
        auth.logout(this.props)
    }
}