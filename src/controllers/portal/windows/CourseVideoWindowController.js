import React from 'react'
import CourseVideoWindowView from "../../../views/CourseVideoWindowView";

export default function CourseVideoWindowController(props) {

	const last = props.i >= props.length-1;

	return(
		<CourseVideoWindowView>
			<back onClick={close} />
			{!last && <next onClick={playNext} />}
			<name>{props.name}</name>
			<video dangerouslySetInnerHTML={{ __html: props.link }} />
		</CourseVideoWindowView>
	);

	function close() {
		props.setShowWindow(false)
	}

	function playNext() {
		props.setIndex(props.i+1)
	}
}