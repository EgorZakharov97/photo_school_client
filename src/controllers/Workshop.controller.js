import React from 'react';
import WorkshopView from '../views/WorkshopView';

export default class Workshop extends React.Component {


    render() {
        return (
            <WorkshopView>
                <name>Course</name>
                <starts>Date</starts>
                <duration>5 hours</duration>
                <price>$10</price>
                <discount>%10</discount>
                <deadline>date</deadline>
                <places>10</places>
            </WorkshopView>
        )
    }
}