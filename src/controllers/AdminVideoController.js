import React, {useState} from 'react'
import axios from 'axios'
import TableVideoView from '../views/TableVideoView'
import {URL_POST_COURSE_VIDEO, URL_DELETE_COURSE_VIDEO} from '../constants'

export default function AdminVideoController(props) {

    const [name, setName] = props.video.name;
    const [link, setLink] = props.video.link;

    return (
        <TableVideoView>
            <index>{props.index}</index>
            <name value={name} onChange={e => setName(e.tartget.value)} />
            <input value={link} onChange={e => setLink(e.target.value)} />
            <update onClick={e => submit(e)} />
            <delete onClich={e => deleteVideo(e)}/>
        </TableVideoView>
    )

    function deleteVideo(e) {
        axios.delete(URL_DELETE_COURSE_VIDEO + props.id)
        .then(res => {
            const data = res.data
            props.setMessage(data.message, data.success)
            props.popVideo(props.index)
        })
        .catch(e => {
            console.log(e)
            props.setMessage(e.message || e.errmsg || 'Some whired error occured')
        })
    }

    function submit(e){
        axios.post(URL_POST_COURSE_VIDEO, data)
        .then(res => {
            const data = res.data
            if(data.success){
                delete data._id
                props.pushVideo(data)
                props.setMessage(data.message, true)
            } else {
                props.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }
}