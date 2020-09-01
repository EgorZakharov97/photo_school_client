import React from 'react';
import WorkshopsView from '../views/WorkshopsView';
import Workshop from './Workshop.controller';

export default class Workshops extends React.Component {


    render() {
        return (
            <WorkshopsView>
               <workshop> <Workshop/></workshop>
               <workshop> <Workshop/></workshop>
               <workshop> <Workshop/></workshop>
            </WorkshopsView>
        )
    }
}