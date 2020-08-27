import React from 'react';
import IndexView from '../views/IndexView';
import axios from 'axios';
import CourseHomeController from './CourseHomeController';
import shortid from 'shortid';
import BuyFormController from './BuyFormController';

export default class IndexController extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            courses: [],
            registerForm: {
                show: false,
                course: {}
            }
        }
        this.invokeForm = this.invokeForm.bind(this);
        this.closeBuyForm = this.closeBuyForm.bind(this);
    }

    componentDidMount() {
        const WEBFLOW_PAGE_ID = '5f3ee1d6fc0f3170fbba94a3'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)

        axios.get('http://localhost:9000/courses')
            .then(res => this.updateCourses(res.data))
    };

    render() {
        return (
            <IndexView>
                {this.state.courses.map(course => {
                    return (
                        <course-home key={shortid.generate()}>
                            <CourseHomeController invokeForm={this.invokeForm.bind(this)} key={shortid.generate()} {...course}/>
                        </course-home>
                    )
                })}
                {/* <leave-email/> */}
                {/* {this.state.registerForm.show ? <BuyFormController closeForm={this.closeForm} /> : false} */}
            </IndexView>
        )
    }

    updateCourses(courses){
        this.setState({courses: courses})
    }

    invokeForm(course){
        console.log(this.state)
        this.setState(state => {
            return state.registerForm = {
                show: true,
                course: course
            }
        })
    }

    closeBuyForm(){
        this.setState(state => {
            return state.registerForm = {
                show: false,
                course: {}
            }
        })
    }
}