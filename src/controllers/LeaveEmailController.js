import React from 'react';
import LeaveEmailFormView from '../views/LeaveEmailView';
import axios from 'axios';

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
        let req = {
            email: this.state.email
        }
        axios.post('http://localhost:9000/leave-email', req)
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }
}