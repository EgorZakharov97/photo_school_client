import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminWorkshopView from '../views/AdminWorkshopsView'

export default class AdminWorkshopsController extends React.Component {

    state = {
        displayFile: true,
        quill: false,
        workshopList: [],
        workshop: {}
    }

    componentDidMount(){
        fetch('/api/v1/workshops/head')
        .then(res => {
            return res.json()
        })
        .then(data => {
            if(data.success){
                this.setState(state => {
                    state.workshopList = data.data
                })
            } else {
                console.log(data.error)
            }
        })
    }

    render() {
        return (
            <AdminWorkshopView>
                <selector onChange={this.selectorChange.bind(this)}>
                    <option value="new">New</option>
                    { this.state.workshopList.map(workshop => {
                        return <option value={workshop.name}>{workshop.name}</option>
                    }) }
                </selector>
                <name value={this.state.workshop.name} onChange={this.setName.bind(this)}/>
                <starts value={this.state.workshop.starts} onChange={this.setStarts.bind(this)}/>
                <ends value={this.state.workshop.ends} onChange={this.setEnds.bind(this)} />
                <deadline value={this.state.workshop.deadline} onChange={this.setDeadline.bind(this)} />
                <duration value={this.state.workshop.duration} onChange={this.setDuration.bind(this)} />
                <price value={this.state.workshop.price} onChange={this.setPrice.bind(this)} />
                <seats value={this.state.workshop.seats} onChange={this.setSeats.bind(this)} />
                { this.state.displayFile && <file/> }
                <description>
                    <ReactQuill theme="snow" value={this.state.workshop.description} onChange={this.setDescription.bind(this)}/>
                </description>
                <timeline>
                    <ReactQuill theme="snow" value={this.state.workshop.timeline} onChange={this.setTimeline.bind(this)}/>
                </timeline>
                <will-learn>
                    <ReactQuill theme="snow" value={this.state.workshop.willLearn} onChange={this.setWillLearn.bind(this)}/>
                </will-learn>
                <submit value={this.state.workshopList.lenath > 0 ? "Update" : "Create"} onClick={this.submitForm.bind(this)}></submit>
            </AdminWorkshopView>
        )
    }

    setDescription(val) {
        this.setState(state => {
            state.workshop.description = val;
        })
    }

    setTimeline(val) {
        this.setState(state => {
            state.workshop.Timeline = val;
        })
    }

    setWillLearn(val) {
        this.setState(state => {
            state.workshop.willLearn = val;
        })
    }

    submitForm(e){
        e.preventDefault();
        fetch('/api/v1/admin/workshop', {
            method: 'post',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        console.log(this.state)
    }

    selectorChange(name) {
        fetch('/api/v1/workshop/' + name)
        .then(res => {
            JSON.parse(res).then(data => {
                if(data.success) this.setWorkshop(data.data)
            })
        })

    }

    setWorkshop(workshop) {
        if(workshop === "new"){
            this.setState(state => {
                state.workshop = {}
                state.displayFile = true
            })
        } else {
            this.setState(state => {
                state.workshop.name = workshop.name;
                state.workshop.starts = workshop.importantDates.courseStarts;
                state.workshop.ends = workshop.importantDates.courseEnds
                state.workshop.deadline = workshop.importantDates.registrationDeadline
                state.workshop.duration = workshop.duration
                state.workshop.price = workshop.pricing.finalPrice
                state.workshop.seats = workshop.seats.total
            })
        }
    }

    setName(e) {
        let name = e.target.value
        this.setState(state => {
            state.workshop.duration = name
        })
    }

    setStarts(e) {
        let date = new Date(e.target.value)
        this.setState(state => {
            state.workshop.starts = date
        })
    }

    setEnds(e) {
        let date = new Date(e.target.value)
        this.setState(state => {
            state.workshop.ends = date
        })
    }

    setDeadline(e) {
        let date = new Date(e.target.value)
        this.setState(state => {
            state.workshop.deadline = date
        })
    }

    setDuration(e) {
        let duration = e.target.value
        this.setState(state => {
            state.workshop.duration = duration
        })
    }

    setPrice(e) {
        let price = e.target.value
        this.setState(state => {
            state.workshop.price = price
        })
    }

    setSeats(e) {
        let seats = e.target.value
        this.setState(state => {
            state.workshop.seats = seats
        })
    }

    setFile(e) {
        let file = e.target.value
        this.setState(state => {
            state.workshop.file = file
        })
    }
}