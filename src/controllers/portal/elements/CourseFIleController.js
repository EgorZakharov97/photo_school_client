import React from 'react'
import CourseFileView from "../../../views/CourseFileView";

export default function CourseFileController(props) {

	return(
		<CourseFileView>
			<link>
				<name>{props.name}</name>
			</link>
		</CourseFileView>
	)
}