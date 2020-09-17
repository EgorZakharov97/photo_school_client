import React from 'react'
import PresetPortalView from "../../views/PresetPortalView";
import {URL_GET_MY_FILE} from '../../constants'
import auth from '../../Auth'
const axios = auth.getAPI();

export default function PortalMaterialController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	return (
		<PresetPortalView>
			<background href={getDownloadLink()} style={style}>
				<link>{props.name}</link>
			</background>
		</PresetPortalView>
	);

	function getDownloadLink(){
		return URL_GET_MY_FILE + props.file + '/' + auth.getUser().token
	}
}