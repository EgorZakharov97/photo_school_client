import React from 'react';
import CourseHomeView from '../views/CourseHomeView';

export default class CourseHomeController extends React.Component {
    render() {
        console.log('Props for CourseHomeController: ')
        console.log(this.props)
        return (
            <CourseHomeView>
                <name>{this.props.name}</name>
                <star-dtate />
                <description />
                <will-learn />
                <timeline />
                <duration />
                <price />
                <deadline />
                <places />
            </CourseHomeView>
        )
    }
}