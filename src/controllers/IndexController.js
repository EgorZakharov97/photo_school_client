import React from 'react';
import IndexView from '../views/IndexView';
import CourseHomeController from './CourseHomeController';

export default class IndexController extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f3170fbba94a3'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    };

    render() {
        return (
            <IndexView>
                {/* <CourseHomeController name="Text course" start-date="20 Sept" description="description" will-learn="Will learn" timeline="timeline" duration="1day" price="$30" deadline="21 Sept" places="4" /> */}
                <leave-email {...this.props} />
            </IndexView>
        )
    }
}