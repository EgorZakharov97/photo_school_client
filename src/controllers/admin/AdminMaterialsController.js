import React from 'react'
import AdmiMaterialsView from '../../views/AdminMaterialView'
import AdminFormController from './AdminFormController'
import {URL_GET_MATERIAL_NAMES, URL_POST_MATERIAL, URL_GET_MATERIAL_DATA} from '../../constants'

export default class AdminMaterialsController extends AdminFormController {

    constructor(props){
        super(props)
        this.state.data.subscription = true;
        this.URL_GET_LIST = URL_GET_MATERIAL_NAMES
        this.URL_POST_OBJECT = URL_POST_MATERIAL
        this.URL_GET_OBJECT_DATA = URL_GET_MATERIAL_DATA
    }

    render() {
        return(
            <AdmiMaterialsView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((material, i) => {
                        return <option key={i} value={material.name}>{material.name}</option>
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