import React from 'react'
import ReactQuill from 'react-quill'
import AdmiChallengesView from '../views/AdminChallengesView'
import AdminFormController from './AdminFormController'
import {URL_GET_CHALLENGE_NAMES, URL_GET_CHALLENGE_DATA, URL_POST_CHALLENGE} from '../constants'
import AdminChallengesView from '../views/AdminChallengesView'

export default class AdminChallengesController extends AdminFormController {
    constructor(props) {
        super(props)
        this.URL_GET_LIST = URL_GET_CHALLENGE_NAMES
        this.URL_POST_OBJECT = URL_POST_CHALLENGE
        this.URL_GET_OBJECT_DATA = URL_GET_CHALLENGE_DATA
    }

    render() {
        console.log(this.state)
        return(
            <AdminChallengesView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((challenge, i) => {
                        return <option key={i} value={challenge.name}>{challenge.name}</option>
                    }) }
                </selector>
                <name value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <file value={this.state.files.image  || ""} onChange={e => this.onFileSelect(e)} />
                <description>
                    <ReactQuill theme="snow" value={this.state.data.description || ""} onChange={this.setDescription.bind(this)}/>
                </description>
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdminChallengesView>
        )
    }

    setDescription(val) {
        this.setState(state => {
            state.data.description = val;
        })
    }
}