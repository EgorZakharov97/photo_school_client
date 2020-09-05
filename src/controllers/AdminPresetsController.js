import React from 'react'
import AdmiPresetsView from '../views/AdminPresetsView'
import AdminFormController from './AdminFormController'
import {URL_GET_PRESET_NAMES, URL_POST_PRESET, URL_GET_PRESET_DATA} from '../constants'

export default class AdminPresetsController extends AdminFormController {

    constructor(props){
        super(props)
        this.state.data.subscription = true
        this.URL_GET_LIST = URL_GET_PRESET_NAMES
        this.URL_POST_OBJECT = URL_POST_PRESET
        this.URL_GET_OBJECT_DATA = URL_GET_PRESET_DATA
    }

    render() {
        console.log(this.state)
        return(
            <AdmiPresetsView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((preset, i) => {
                        return <option key={i} value={preset.name}>{preset.name}</option>
                    }) }
                </selector>
                <name value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <subscription checked={this.state.data.subscription} onChange={e => this.booleanChangeHandler(e)} />
                <image value={this.state.files[0]  || ""} onChange={e => this.onFileSelect(e)} />
                <file value={this.state.files[0]  || ""} onChange={e => this.onFileSelect(e)} />
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdmiPresetsView>
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