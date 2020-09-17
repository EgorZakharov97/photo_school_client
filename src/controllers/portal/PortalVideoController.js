import React from 'react'
import VideoPortalView from '../../views/VideoPortalView'
import {URL_GET_MY_FILE} from "../../constants";
import auth from "../../Auth";

export default function PortalMaterialController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	return (
		<VideoPortalView>
			<background style={style}>
				<heading>{props.name}</heading>
				<description>{props.description}</description>
			</background>
			{props.file && <link href={getDownloadLink()} />}
		</VideoPortalView>
	);

	function getDownloadLink(){
		return URL_GET_MY_FILE + props.file + '/' + auth.getUser().token
	}
}