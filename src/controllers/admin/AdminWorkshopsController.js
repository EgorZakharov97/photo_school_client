import React from 'react'
import ReactQuill from 'react-quill'
import auth from '../../Auth'
import 'react-quill/dist/quill.snow.css'
import AdminWorkshopView from '../../views/AdminWorkshopsView'
import AdminFormController from './AdminFormController'
import {URL_GET_WORKSHOP_NAMES, URL_POST_WORKSHOP, URL_GET_WORKSHOP_DATA} from '../../constants'

const axios = auth.getAPI()

export default class AdminWorkshopsController extends AdminFormController {

    constructor(props) {
        super(props)
        this.URL_GET_LIST = URL_GET_WORKSHOP_NAMES;
        this.URL_POST_OBJECT = URL_POST_WORKSHOP;
        this.URL_GET_OBJECT_DATA = URL_GET_WORKSHOP_DATA;
    }

    render() {
        return (
            <AdminWorkshopView>
                <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                    <option value="new">New</option>
                    { this.state.itemList.map((workshop, i) => {
                        return <option key={i} value={workshop.name}>{workshop.name}</option>
                    }) }
                </selector>
                <name value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                <starts value={this.state.data.starts  || ""} onChange={e => this.dateChangeHandler(e)}/>
                <ends value={this.state.data.ends  || ""} onChange={e => this.dateChangeHandler(e)} />
                <deadline value={this.state.data.deadline  || ""} onChange={e => this.dateChangeHandler(e)} />
                <duration value={this.state.data.duration  || ""} onChange={e => this.changeHandler(e)} />
                <price value={this.state.data.price  || ""} onChange={e => this.changeHandler(e)} />
                <seats value={this.state.data.seats || ""} onChange={e => this.integerChangeHandler(e)} />
                <file value={this.state.files.image  || ""} onChange={e => this.onFileSelect(e)} />
                <description>
                    <ReactQuill theme="snow" value={this.state.data.description || ""} onChange={this.setDescription.bind(this)}/>
                </description>
                <timeline>
                    <ReactQuill theme="snow" value={this.state.data.timeline || ""} onChange={this.setTimeline.bind(this)}/>
                </timeline>
                <will-learn>
                    <ReactQuill theme="snow" value={this.state.data.willLearn || ""} onChange={this.setWillLearn.bind(this)}/>
                </will-learn>
                {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
            </AdminWorkshopView>
        )
    }

    setDescription(val) {
        this.setState(state => {
            state.data.description = val;
        })
    }

    setTimeline(val) {
        this.setState(state => {
            state.data.timeline = val;
        })
    }

    setWillLearn(val) {
        this.setState(state => {
            state.data.willLearn = val;
        })
    }

    onSelectorChange(e) {
        if(e.target.value === 'new') {
            this.setState(state => {
                state.data = {};
                state.message = {};
                return state;
            })
        } else {
            const name = escape(e.target.value);
            axios.get(this.URL_GET_OBJECT_DATA + name)
            .then(res => {
                const data = res.data;
                if(data.success){
                    this.setObject(data.body)
                } else {
                    this.setMessage(data.message, false)
                }
            })
            .catch(e => alert(e))
        }
    }

    setObject(workshop) {
        this.setState(state => {
            state.data._id = workshop._id
            state.data.name = workshop.name
            state.data.starts = new Date(workshop.importantDates.courseStarts).toISOString().substr(0, 10)
            state.data.ends = new Date(workshop.importantDates.courseEnds).toISOString().substr(0, 10)
            state.data.deadline = new Date(workshop.importantDates.registrationDeadline).toISOString().substr(0, 10)
            state.data.duration = parseInt(workshop.duration)
            state.data.price = workshop.pricing.finalPrice
            state.data.seats = parseInt(workshop.seats.total)
            state.data.description = workshop.richText.description
            state.data.timeline = workshop.richText.timeline
            state.data.willLearn = workshop.richText.willLearn
            state.data.image = undefined
            state.message = {}
            state.files = []
            return state
        })
    }
}