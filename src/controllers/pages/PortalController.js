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
import TutorialVideoWindowController from "../portal/windows/TutorialVideoWindowController";
import GetSubscriptionController from "../portal/windows/GetSubscriptionController";
import CourseMediaController from "../portal/windows/CourseMediaController";
import PortalChallengesController from "../portal/PortalChallengesController";

export default function PortalController(props) {

    const history = useHistory();
    const [showTutorialVideo, setShowTutorialVideo] = useState(false);
    const [showGetSubscription, setShowGetSubscription] = useState(false);
    const [videoData, setVideoData] = useState({});
    const [showCourse, setShowCourse] = useState(false);
    const [course, setCourse] = useState({});

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
                {auth.isAuthenticated() && auth.getUser().workshops && auth.getUser().workshops.length > 0 && <workshops-link/>}
                <workshops>
                    {auth.isAuthenticated() && <PortalWorkshopsController {...props} />}
                </workshops>

                <materials-portal>
                    {auth.isAuthenticated() && <MaterialsPortalController {...props} />}
                </materials-portal>

                <portal-courses>
                    {auth.isAuthenticated() && <PortalCoursesController
                        setShowGetSubscription={setShowGetSubscription}
                        setVideoData={setVideoData}
                        setShowCourse={setShowCourse}
                        setCourse={setCourse}
                        {...props}
                    />}
                </portal-courses>

                <presets-portal>
                    {auth.isAuthenticated() && <PortalPresetsController {...props} />}
                </presets-portal>

                <portal-videos>
                    {auth.isAuthenticated() && <PortalVideosController
                        setShowGetSubscription={setShowGetSubscription}
                        setShowPlay={setShowTutorialVideo}
                        setVideoData={setVideoData}
                        {...props}
                    />}
                </portal-videos>

                <portal-profile>
                    {auth.isAuthenticated() && <PortalProfileController/>}
                </portal-profile>

                <portal-challenges>
                    {auth.isAuthenticated() && <PortalChallengesController {...props} />}
                </portal-challenges>

            </MembersPortalView>
            <AuthController {...props} shouldAuthenticate={true} />
            <GetSubscriptionController show={showGetSubscription} setShowWindow={setShowGetSubscription} {...videoData} {...props} />
            <CourseMediaController
                show={showCourse}
                setShowWindow={setShowCourse}
                {...course}
                {...props}
            />
            <TutorialVideoWindowController show={showTutorialVideo} setShowWindow={setShowTutorialVideo} {...videoData} />

        </>

    );

    function logout(e){
        e.preventDefault();
        auth.logout();
        history.push('/');
    }
}