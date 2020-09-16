import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import auth from '../../Auth'

import MembersPortalView from '../../views/MembersPortalView'
import AuthController from '../AuthController'
import PortalProfileController from "../portal/PortalProfileController";
import PortalWorkshopsController from "./PortalWorkshopsController";
import MaterialsPortalController from "../portal/MaterialsPortalController";
import PortalPresetsController from "../portal/PortalPresetController";

export default function PortalController(props) {

    const history = useHistory();

    useEffect(() => {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f317030ba94ae';
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14';

        let doc = document.getElementsByTagName("html")[0];
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID);
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID);
    }, []);

    return(
        <>
            <MembersPortalView>
                <logout onClick={e => logout(e)} />
                {/*<workshops>*/}
                {/*    {auth.isAuthenticated() && <PortalWorkshopsController {...props} />}*/}
                {/*</workshops>*/}
                <materials-portal>
                    <MaterialsPortalController {...props} />
                </materials-portal>
                <presets>
                    <PortalPresetsController {...props} />
                </presets>
                <portal-profile>
                    {auth.isAuthenticated() && <PortalProfileController/>}
                </portal-profile>
            </MembersPortalView>
            <AuthController {...props} shouldAuthenticate={true} />
        </>

    );

    function logout(e){
        e.preventDefault();
        auth.logout();
        history.push('/');
    }
}