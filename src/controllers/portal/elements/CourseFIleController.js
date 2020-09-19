import React from 'react'
import CourseFileView from "../../../views/CourseFileView";

export default function CourseFileController(props) {

	return(
		<CourseFileView>
			<name>{props.name}</name>
		</CourseFileView>
	)
}