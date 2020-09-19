import React, {useState, useEffect} from 'react'
import auth from '../../../Auth'
import shortid from 'shortid'

import CourseMediaView from "../../../views/CourseMediaView";
import VideoLinkController from '../elements/VideoLinkController'
import CourseFileController from "../elements/CourseFIleController"
import CourseVideoWindowController from "./CourseVideoWindowController";

const axios = auth.getAPI();

export default function CourseMediaController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	const [videos, setVideos] = useState([]);
	const [files, setFiles] = useState([]);
	// const [examples, setExamples] = useState([]);
	const [showPlayWindow, setShowPlayWindow] = useState(false);
	const [currentVideoIndex, setIndex] = useState(-1);
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		if(!props.show) return;

		axios.get('/api/v1/course/' + props.id + '/videos')
			.then(res => {
				const data = res.data;
				if(data.success){
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
					setFiles(data.body || [])
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
	}, [props.show]);
	if(props.show) return (
		<>
			<CourseMediaView>
				<portal onClick={e => {e.preventDefault(); props.setShowWindow(false)}} />
				<exit onClick={e => {e.preventDefault(); props.setShowWindow(false)}} />
				<back onClick={e => {e.preventDefault(); props.setShowWindow(false)}} />
				<background style={style} >
					<name>{props.name}</name>
				</background>

				<videos-container>
					{videos.map((video, i) => {
						return (
							<video-link key={getShortId()} >
								<VideoLinkController
									key={getShortId()}
									setShowVideo={setShowVideo}
									setIndex={setIndex}
									i={i}
									{...video}
									{...props}
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
			</CourseMediaView>
			{showVideo && <CourseVideoWindowController
				show={showPlayWindow}
				setShowWindow={setShowVideo}
				setIndex={setIndex}
				length={videos.length}
				i={currentVideoIndex}
				{...videos[currentVideoIndex]}
			/>}
		</>
	);
	else return <></>;

	function getShortId(){
		return shortid.generate()
	}
}