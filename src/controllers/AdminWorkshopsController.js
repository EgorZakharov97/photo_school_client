import React from 'react'
import Script from 'react-load-script'
import AdminWorkshopView from '../views/AdminWorkshopsView'

export default class AdminWorkshopsController extends React.Component {

    state = {
        displayFile: true,
        quill: false,
        workshopList: []
    }

    componentDidMount(){
        fetch('/api/v1/workshops/head')
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({workshopList: data.data})
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
                <name/>
                <starts/>
                <ends/>
                <deadline/>
                <duration/>
                <price/>
                <seats/>
                { this.state.displayFile && <file/> }
                <description></description>
                <timeline></timeline>
                <willLearn></willLearn>
                <submit>{this.state.workshopList.lenath > 0 ? "Update" : "Create"}</submit>
                <Script 
                    url="https://cdn.quilljs.com/1.3.6/quill.js"
                    onCreate={this.loadQuill.bind(this)}
                />
            </AdminWorkshopView>
        )
    }

    loadQuill() {
        this.setState({quill: true})
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
        this.setName(workshop.name);
        this.setSeats(workshop.importantDates.courseStarts)
        this.setEnds(workshop.importantDates.courseEnds)
        this.setDeadline(workshop.importantDates.registrationDeadline)
        this.setDuration(workshop.duration)
        this.setPrice(workshop.pricing.finalPrice)
        this.setSeats(workshop.seats.total)
        this.setState({displayFile: false})
    }

    setName(name) {
        this.setState({name})
    }

    setStarts(starts) {
        this.setState({starts})
    }

    setEnds(ends) {
        this.setState({ends})
    }

    setDeadline(deadline) {
        this.setState({deadline})
    }

    setDuration(duration) {
        this.setState({duration})
    }

    setPrice(price) {
        this.setState({price})
    }

    setSeats(seats) {
        this.setState({seats})
    }

    setFile(file) {
        this.setState({file})
    }
}