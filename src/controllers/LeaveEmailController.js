import React from 'react';
import LeaveEmailFormView from '../views/LeaveEmailView';
import axios from 'axios';

export default class LeaveEmailForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            success: false,
            failure: false
        }
    }

    render() {
        return (
            <LeaveEmailFormView>
                <email onChange={this.setEmail} />
                <submit onClick={this.submit} />
                {this.state.success && <success />}
                {this.state.failure && this.state.wasSent && <error />}
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
            .then(res => this.success())
            .catch(e => this.failure())
    }

    success() {
        this.setState({success: true, failure: false})
    }

    failure() {
        this.setState({success: false, failure: true})
    }
}