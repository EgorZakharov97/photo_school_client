import React, {useState, useEffect} from 'react'
import CourseView from '../../../views/CourseView'
import auth from '../../../Auth'


const axios = auth.getAPI();

export default function CourseViewController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	const [videos, setVideos] = useState([]);
	const [files, setFiles] = useState([]);
	const [examples, setExamples] = useState([]);

	useEffect(() => {
		axios.get('/api/v1/course/' + props.location.id + '/videos')
			.then(res => {
				const data = res.data;
				if(data.sucess){
					setVideos(data.body || [])
				}
			})
			.catch(e => {
				console.log(e)
			});

		axios.get('/api/v1/course/' + props.location.id + '/files')
			.then(res => {
				const data = res.data;
				if(data.success){
					setFiles(data.doby || [])
				}
			});

		axios.get('/api/v1/course/' + props.location.name)
			.then(res => {
				const data = res.data;
				if(data.success){
					setExamples(data.body.examples)
				}
			})
			.catch(e => {
				console.log(e)
			})
	}, []);

	return (
		<CourseView>
			<portal onClick={e => {props.history.push('/portal')}} />
			<exit onClock={e => {auth.logout(); props.history.push('/')}} />
			<back onClick={e => {props.history.go(-1)}} />
			<background style={style} >
				<name>{props.name}</name>
			</background>

			<videos-container>
				{videos.map(video => {
					return (
						<></>
					)
				})}
			</videos-container>
		</CourseView>
	)
}