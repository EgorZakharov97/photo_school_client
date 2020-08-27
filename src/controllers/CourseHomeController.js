import React from 'react';
import CourseHomeView from '../views/CourseHomeView';
import ReactHtmlParser from 'react-html-parser';

export default class CourseHomeController extends React.Component {

    constructor(props){
        super(props)
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        this.state = {
            monthNames: monthNames,
            course: {
                name: this.props.name,
                startDate: monthNames[new Date(this.props.importantDates.courseStarts).getUTCMonth()] + ' ' + new Date(this.props.importantDates.courseStarts).getUTCDate(),
                price: this.props.pricing.finalPrice,
                id: this.props._id,
                image: ("http://localhost:9000/" + this.props.image).replace(' ', '%20')
            }
        }
        this.handleInvokeForm = () => {
            this.props.invokeForm(this.state.course)
         }
    }

    render() {
        return (
            <CourseHomeView>
                <background style={
                    {
                        // backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url(${this.state.course.image})`,
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.state.course.image})`
                    }
                }/>
                <name>{this.props.name}</name>
                <start-date>{this.state.startDate}</start-date>
                <description><div>{ReactHtmlParser(this.props.richText.description)}</div></description>
                <will-learn><div>{ReactHtmlParser(this.props.richText.willLearn)}</div></will-learn>
                <timeline><div>{ReactHtmlParser(this.props.richText.timeline)}</div></timeline>
                <duration>{new Date(new Date(this.props.importantDates.courseEnds) - new Date(this.props.importantDates.courseStarts)).getDate()+1} Days</duration>
                <price>${this.props.pricing.finalPrice}CAD</price>
                <deadline>{this.state.monthNames[new Date(this.props.importantDates.registrationDeadline).getUTCMonth()]} { new Date(this.props.importantDates.registrationDeadline).getUTCDate()}</deadline>
                <places>{this.props.seats.total - this.props.seats.occupied}</places>
                <register onClick={this.handleInvokeForm}/>
            </CourseHomeView>
        )
    }
}