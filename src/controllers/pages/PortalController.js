import React from 'react'
import auth from '../../Auth'

import MembersPortalView from '../../views/MembersPortalView'
import AuthController from '../AuthController'
import PortalProfileController from "../portal/PortalProfileController";

export default class PortalController extends React.Component {

    state = {

    };

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f317030ba94ae';
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14';

        var doc = document.getElementsByTagName("html")[0];
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID);
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID);
    };

    render() {
        return(
            <>
                <MembersPortalView>
                        <logout onClick={e => this.logout(e)} />
                        <portal-profile>
                            <PortalProfileController/>
                        </portal-profile>

                </MembersPortalView>
                <AuthController {...this.props} shouldAuthenticate={true} />
            </>
            
        )
    }

    logout(e){
        e.preventDefault();
        auth.logout();
        this.props.history.push('/');
    }
}