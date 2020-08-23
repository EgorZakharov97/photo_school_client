import React from 'react';
import IndexView from '../views/IndexView';
import axios from 'axios';
import CourseHomeConteroller from './CourseHomeController';

export default class IndexController extends React.Component {

    constructor(props){
        console.log('Props for IndexController: ')
        console.log(props)
        super(props)
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f3170fbba94a3'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)

        // axios.get('http://localhost:9000/courses')
        //     .then(courses => this.updateCourses(courses))
    };

    render() {
        return (
            <IndexView>
                <course-home><CourseHomeConteroller name="Test name"/></course-home>
                <leave-email></leave-email>
            </IndexView>
        )
    }

    updateCourses(courses){
        this.setState({courses: courses})
    }
}