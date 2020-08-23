import React from 'react';
import LeaveEmailFormView from '../views/LeaveEmailView';

export default class LeaveEmailForm extends React.Component {
    render() {
        return (
            <LeaveEmailFormView>
                <email onChange={this.setEmail} />
                <submit onClick={this.submit} />
            </LeaveEmailFormView>
        )
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    submit = () => {
        console.log("")
        // fetch('http://localhost/leave-email')
    }
}