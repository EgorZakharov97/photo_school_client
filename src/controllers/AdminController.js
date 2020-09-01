import React from 'react'
import AdminView from '../views/AdminView'
import AdminWorkshopsController from './AdminWorkshopsController'

export default class AdminController extends React.Component {

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f49ff0402788436a1bafc64'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
      };


    render() {
        return(
            <AdminView>
                <adminWorkshops><AdminWorkshopsController/></adminWorkshops>
            </AdminView>
        )
    }
}