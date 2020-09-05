import React from 'react'
import axios from 'axios'
import AdmiMaterialsView from '../views/AdminMaterialView'
import AdminFormController from './AdminFormController'
import {URL_GET_MATERIAL_NAMES, URL_POST_MATERIAL, URL_GET_MATERIAL_DATA} from '../constants'

export default class AdminMaterialsController extends AdminFormController {

    constructor(props){
        super(props)
        this.state.data.subscription = true;
        this.URL_GET_LIST = URL_GET_MATERIAL_NAMES
        this.URL_POST_OBJECT = URL_GET_MATERIAL_DATA
        this.URL_GET_OBJECT_DATA = URL_POST_MATERIAL
    }

    render() {
        console.log(this.state)
        return(
            <AdmiMaterialsView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((tutorial, i) => {
                        return <option key={i} value={tutorial.name}>{tutorial.name}</option>
                    }) }
                </selector>
                <name value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <subscription value={this.state.data.subscription} checked={this.state.data.subscription} onChange={e => this.booleanChangeHandler(e)} />
                <picture value={this.state.files[0]  || ""} onChange={e => this.onFileSelect(e)} />
                <file value={this.state.files[0]  || ""} onChange={e => this.onFileSelect(e)} />
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdmiMaterialsView>
        )
    }

    setObject(data) {
        super.setObject(data)
        this.setState(state => {
            state.data.subscription = data.accessBySubscription
            return state
        })
    }
}