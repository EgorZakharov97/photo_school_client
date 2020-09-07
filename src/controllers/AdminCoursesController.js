import React from 'react'
import {URL_GET_COURSES_NAMES, URL_GET_COURSE_DATA, URL_POST_COURSE} from '../constants'
import AdminFormController from './AdminFormController'
import AdminCoursesView from '../views/AdminCoursesView'
import AssetsView from '../views/AssetsView'
import VideoTableView from '../views/VideoTableView'
import AdminAssetsController from './AdminAssetsController'

export default class AdminCoursesController extends AdminFormController {
    constructor(props) {
        super(props)
        this.state.access = false;
        this.URL_GET_LIST = URL_GET_COURSES_NAMES
        this.URL_POST_OBJECT =  URL_POST_COURSE
        this.URL_GET_OBJECT_DATA = URL_GET_COURSE_DATA
    }

    render(){
        console.log(this.state)
        return (
            <AdminCoursesView>
                <info>
                    <selector value={this.state.data.name || 'new'} onChange={e => this.onSelectorChange(e)}>
                        <option value="new">New</option>
                        { this.state.itemList.map((course, i) => {
                            return <option key={i} value={course.name}>{course.name}</option>
                        }) }
                    </selector>
                    <name value={this.state.data.name || ""} onChange={e => this.changeHandler(e)}/>
                    <price value={this.state.data.price || ""} onChange={e => this.changeHandler(e)}/>
                    <description value={this.state.data.description || ""} onChange={e => this.changeHandler(e)}/>
                    <access value={this.state.data.access} onCHange={e => this.booleanChangeHandler(e)} />
                    {!this.state.busy && <submit value={this.state.data._id ? "Update" : "Create"} onClick={e => this.formSubmitHandler(e)}/>}
                    {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                </info>
                {/* {this.state.data._id &&  */}
                    <assets>
                        <AssetsView>
                            <videos-container>
                                <VideoTableView>
                                    <index/>
                                    <name/>
                                    <link/>
                                    <update/>
                                    <delete/>
                                </VideoTableView>
                            </videos-container>
                            <files-container>

                            </files-container>
                            <examples-container>
                                
                            </examples-container>
                        </AssetsView>
                    </assets>
                {/* } */}
            </AdminCoursesView>
        )
    }

    setObject(data){
        super.setObject(data);
        this.setState(state => {
            state.data.price = state.data.pricing.finalPrice
            delete state.data.pricing
            return state
        })
    }
}