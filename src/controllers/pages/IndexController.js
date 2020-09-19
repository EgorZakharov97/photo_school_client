import React, {useEffect} from 'react'
import IndexView from '../../views/IndexView'
import LoginView from '../../views/LoginView'

export default function IndexController(){
    useEffect(() => {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f3170fbba94a3';
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14';
    
        var doc = document.getElementsByTagName("html")[0];
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID);
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID);
    });

    return(
        <IndexView/>
    )
}