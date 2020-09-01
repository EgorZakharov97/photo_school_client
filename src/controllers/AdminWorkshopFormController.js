import React from 'react';
import AdminWorkshopFormView from '../views/Work';

export default class AdminWorkshop extends React.Component {


    render() {
        return (
            <AdminWorkshopFormView>
                <selector></selector>
                <name></name>
                <starts></starts>
                <ends></ends>
                <deadline></deadline>
                <duration></duration>
                <price></price>
                <seats></seats>
                <file></file>
                <description></description>
                <timeline></timeline>
                <willLearn></willLearn>
            </AdminWorkshopFormView>
        )
    }
}