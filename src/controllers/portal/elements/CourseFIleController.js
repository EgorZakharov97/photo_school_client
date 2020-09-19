import React from 'react'
import CourseFileView from "../../../views/CourseFileView";
import {URL_GET_MY_FILE} from "../../../constants";
import auth from "../../../Auth";

export default function CourseFileController(props) {

	return(
		<CourseFileView>
			<link href={getDownloadLink()} >
				<name>{props.name}</name>
			</link>
		</CourseFileView>
	);

	function getDownloadLink(){
		return URL_GET_MY_FILE + props._id + '/' + auth.getUser().token
	}
}