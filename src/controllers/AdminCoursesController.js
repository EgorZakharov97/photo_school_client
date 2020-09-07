import React from 'react'
import axios from 'axios'
import {URL_GET_COURSES_NAMES, URL_GET_COURSE_DATA, URL_POST_COURSE, URL_POST_COURSE_VIDEO, URL_DELETE_COURSE_VIDEO, URL_DELETE_COURSE_FILE, URL_POST_COURSE_FILE} from '../constants'
import AdminFormController from './AdminFormController'
import AdminCoursesView from '../views/AdminCoursesView'
import TableVideoView from '../views/TableVideoView'
import TableFileView from '../views/TableFileView'
import TableExampleView from '../views/TableExampleView'

export default class AdminCoursesController extends AdminFormController {
    constructor(props) {
        super(props)
        this.state.assets = {
            videos: [],
            files: [],
        }
        this.state.newVideo = {}
        this.state.newFile = {}
        this.state.newExamples = []
        this.state.access = false
        this.URL_GET_LIST = URL_GET_COURSES_NAMES
        this.URL_POST_OBJECT =  URL_POST_COURSE
        this.URL_GET_OBJECT_DATA = URL_GET_COURSE_DATA
    }

    render(){
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
                {this.state.data._id && 
                    <assets>
                        <videos-container>
                            {this.state.assets.videos.map((video, i) => {
                                return (
                                    <video-table key={i} >
                                        <TableVideoView key={i} >
                                            <index>{i+1}.</index>
                                            <name value={video.name} onChange={e => {const val = e.target.value; this.setState(state => {return state.assets.videos[i].name = val})}} />
                                            <input value={video.link} onChange={e => {const val = e.target.value; this.setState(state => {return state.assets.videos[i].link = val})}} />
                                            <update onClick={e => {let data = this.state.assets.videos[i]; this.submitVideo(data)}} />
                                            <delete onClick={e => {this.deleteVideo(i)}}/>
                                        </TableVideoView>
                                    </video-table>
                                )
                            })}
                            
                            <vi-name value={this.state.newVideo.name || ""} onChange={e => this.onNewVideoChange(e)} />
                            <link value={this.state.newVideo.link || ""} onChange={e => this.onNewVideoChange(e)} />
                            <create onClick={e => {let data = this.state.newVideo; data.course = this.state.data._id; this.submitVideo(data)}} />

                        </videos-container>
                        <files-container>

                            {this.state.assets.files.map((file, i) => {
                                return (
                                    <video-table key={i}>
                                        <TableFileView key={i} >
                                            <index>{i+1}.</index>
                                            <name value={file.name} onChange={e => {const val = e.target.value; this.setState(state => {return state.assets.files[i].name = val})}} />
                                            <file value={file.link} onChange={e => {const file = e.target.files[0]; this.setState(state => {return state.assets.files[i].file = file})}} />
                                            <update onClick={e => {let data = this.state.assets.files[i]; this.submitFile(data)}} />
                                            <delete onClick={e => {this.deleteFile(i)}}/>
                                        </TableFileView>
                                    </video-table>
                                )
                            })}

                            <fl-name value={this.state.newFile.name || ""} onChange={e => {const name = e.target.value; this.setState(state => {return state.newFile.name = name})}} />
                            <file value={this.state.newVideo.file || ""} onChange={e => this.onNewFileChange(e)} />
                            <create onClick={e => {let data = this.state.newFile; data.course = this.state.data._id; this.submitFile(data)}} />

                        </files-container>
                        <examples-container>

                            {this.state.data.examples.map((example, i) => {
                                if (example !== "") {
                                    return (
                                        <table-example>
                                            <TableExampleView>
                                                <img src={example} />
                                                <delete onClick={e => this.deleteExample(i)} />
                                            </TableExampleView>
                                        </table-example>
                                    )
                                } else {
                                    return <div></div>
                                }
                            })}

                            <images onChange={e => {const imgs = e.target.files; this.setState({newExamples: imgs})}} />
                            <upload onClick={e => {this.uploadExamples(e)}} />
                        </examples-container>
                    </assets>
                }
            </AdminCoursesView>
        )
    }

    uploadExamples(e){
        e.preventDefault();
        console.log(this.state.newExamples)
    }

    onNewFileChange(e){
        const file = e.target.files[0];
        this.setState(state => {
            return state.newFile.file = file
        })
    }

    deleteFile(i){
        const id = this.state.assets.files[i]._id
        axios.delete(URL_DELETE_COURSE_FILE + id)
        .then(res => {
            const data = res.data
            this.setMessage(data.message, data.success)
            this.loadFiles()
        })
        .catch(e => {
            console.log(e)
            this.setMessage(e.message || e.errmsg || 'Some whired error occured')
        })
    }

    deleteVideo(i) {
        const id = this.state.assets.videos[i]._id
        axios.delete(URL_DELETE_COURSE_VIDEO + id)
        .then(res => {
            console.log(res)
            const data = res.data
            this.setMessage(data.message, data.success)
            this.loadVideos()
        })
        .catch(e => {
            console.log(e)
            this.setMessage(e.message || e.errmsg || 'Some whired error occured')
        })
    }

    submitFile(data){
            console.log(data)
            let formData = new FormData()
            if (data.file && data.file.constructor.name === 'File') formData.append('assets', data.file, 'file')

            formData.append("name", data.name)
            formData.append("course", data.course)
            if( data._id) formData.append("_id", data._id)

        axios.post(URL_POST_COURSE_FILE, formData, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            const data = res.data
            if(data.success){
                this.setMessage(data.message, true)
                this.loadFiles()
            } else {
                this.setMessage(data.message, false)
                console.log(data)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    submitVideo(data){
        axios.post(URL_POST_COURSE_VIDEO, data)
        .then(res => {
            const data = res.data
            if(data.success){
                this.setMessage(data.message, true)
                this.loadVideos()
            } else {
                this.setMessage(data.message, false)
                console.log(data)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    onNewVideoChange(e){
        const key = e.target.name
        const value = e.target.value
        this.setState(state => {
            return state.newVideo[key] = value
        })
    }

    pushFile(file) {
        this.setState(state => {
            return state.assets.files.push(file)
        })
    }

    loadVideos(){
        const id = this.state.data._id
        axios.get('/api/v1/course/' + id + '/videos')
        .then(res => {
            const data = res.data;
            if(data.success){
                this.setState(state => {
                    return state.assets.videos = data.body || []
                })
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    loadFiles(){
        const id = this.state.data._id
        axios.get('/api/v1/course/' + id + '/files')
        .then(res => {
            const data = res.data;
            if(data.success){
                console.log(this.state)
                this.setState(state => {
                    return state.assets.files = data.body || []
                })
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    async onSelectorChange(e) {
        const event = e;
        await super.onSelectorChange(event)
        if(this.state.data.name !== 'new'){
            this.loadFiles();
            this.loadVideos();
        }
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