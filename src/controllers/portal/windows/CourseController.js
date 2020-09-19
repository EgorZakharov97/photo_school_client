import React, {useState, useEffect} from 'react'
import auth from '../../../Auth'
import shortid from 'shortid'

import CourseView from '../../../views/CourseView'
import VideoLinkController from '../elements/VideoLinkController'
import CourseFileController from "../elements/CourseFIleController"
import CourseVideoWindowController from "./CourseVideoWindowController";

const axios = auth.getAPI();

export default function CourseController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	const [videos, setVideos] = useState([]);
	const [files, setFiles] = useState([]);
	// const [examples, setExamples] = useState([]);
	const [showPlayWindow, setShowPlayWindow] = useState(false);
	const [currentVideoIndex, setIndex] = useState(-1);

	useEffect(() => {
		axios.get('/api/v1/course/' + props.id + '/videos')
			.then(res => {
				const data = res.data;
				if(data.sucess){
					setVideos(data.body || [])
				}
			})
			.catch(e => {
				console.log(e)
			});

		axios.get('/api/v1/course/' + props.id + '/files')
			.then(res => {
				const data = res.data;
				if(data.success){
					setFiles(data.doby || [])
				}
			});

		// axios.get('/api/v1/course/' + props.location.name)
		// 	.then(res => {
		// 		const data = res.data;
		// 		if(data.success){
		// 			setExamples(data.body.examples)
		// 		}
		// 	})
		// 	.catch(e => {
		// 		console.log(e)
		// 	})
	}, []);

	if(props.show) return (
		<>
			<CourseView>
				<portal onClick={e => {props.history.push('/portal')}} />
				<exit onClock={e => {auth.logout(); props.history.push('/')}} />
				<back onClick={e => {props.history.go(-1)}} />
				<background style={style} >
					<name>{props.name}</name>
				</background>

				<videos-container>
					{videos.map((video, i) => {
						return (
							<video-link key={getShortId()} >
								<VideoLinkController
									key={getShortId()}
									setShowWindow={setShowPlayWindow}
									setIndex={setIndex}
									i={i}
									{...video}
								/>
							</video-link>
						)
					})}
				</videos-container>

				<files-container>
					{files.map(file => {
						return(
							<course-file key={getShortId()} >
								<CourseFileController key={getShortId()} {...file} />
							</course-file>
						)
					})}
				</files-container>

				<course-video-window>
					<CourseVideoWindowController
						show={showPlayWindow}
						setShowWindow={setShowPlayWindow}
						setIndex={setIndex}
						length={videos.length}
						{...videos[currentVideoIndex]}
					/>
				</course-video-window>
			</CourseView>
			{props.showWindow && <CourseVideoWindowController  />}
		</>
	);
	else return <></>;

	function getShortId(){
		shortid.generate()
	}
}