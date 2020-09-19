import React from 'react'
import LectureVideoView from "../../views/LectureVideoView";

export default function LectureVideoController(props) {

	return(
		<LectureVideoView>
			<name>{props.name}</name>
			<video>{props.link}</video>
			<close onClick={close} />
		</LectureVideoView>
	);

	function close(){
		props.setShowWindow(false)
	}
}