import React from 'react'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'

import AdminView from '../../views/AdminView'
import AdminWorkshopsController from '../AdminWorkshopsController'
import AdminTutorialsController from '../AdminTutorialsController'
import AdminMaterialsController from '../AdminMaterialsController'
import AdminPresetsController from '../AdminPresetsController'
import AdminCouponsController from '../AdminCouponsController'
import AdminChallengesController from '../AdminChallengesController'
import AdminCoursesController from '../AdminCoursesController'

export default class AdminController extends React.Component {

    stateChangeHandler(dataObject) {
        const key = dataObject.name;
        const value = dataObject.value;
        this.setState({key: value})
    }

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f49ff0402788436a1bafc64'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'

        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    };

    render() {
        return (
            auth.isAuthenticated() ? (
                <AdminView>
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
                </AdminView>
            ) : (
                <Redirect to={{path: '/', state: {from: this.props.location, shouldAuthenticate: true} }} />
            )
        )
    }
}