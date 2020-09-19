import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import auth from '../../Auth'

import MembersPortalView from '../../views/MembersPortalView'
import AuthController from '../AuthController'
import PortalProfileController from "../portal/PortalProfileController";
import PortalWorkshopsController from "./PortalWorkshopsController";
import MaterialsPortalController from "../portal/MaterialsPortalController";
import PortalPresetsController from '../portal/PortalPresetsController'
import PortalVideosController from "../portal/PortalVideosController";
import PortalCoursesController from "../portal/PortalCoursesController";
import LectureVideoController from "../portal/LectureVideoController";


export default function PortalController(props) {

    const history = useHistory();
    const [showTutorialVideo, setShowTutorialVideo] = useState(false);
    const [showCourseVideo, setShowCourseVideo] = useState(false);
    const [showGetSubscription, setShowGetSubscription] = useState(false);
    const [videoData, setVideoData] = useState({});

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
				{auth.isAdmin() && <admin onClick={e => {e.preventDefault(); props.history.push('/admin')}}/>}
                <logout onClick={e => logout(e)} />
                <workshops>
                    {auth.isAuthenticated() && <PortalWorkshopsController {...props} />}
                </workshops>

                <materials-portal>
                    {auth.isAuthenticated() && <MaterialsPortalController {...props} />}
                </materials-portal>

                <portal-courses>
                    {auth.isAuthenticated() && <PortalCoursesController {...props} />}
                </portal-courses>

                <presets-portal>
                    {auth.isAuthenticated() && <PortalPresetsController {...props} />}
                </presets-portal>

                <portal-videos>
                    {auth.isAuthenticated() && <PortalVideosController setShowPlay={setShowTutorialVideo} setVideoData={setVideoData} {...props} />}
                </portal-videos>

                <portal-profile>
                    {auth.isAuthenticated() && <PortalProfileController/>}
                </portal-profile>



                <watch-video>
                    <LectureVideoController setShowPlay={setShowTutorialVideo} {...videoData} />
                </watch-video>

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