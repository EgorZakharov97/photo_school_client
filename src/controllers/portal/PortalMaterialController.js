import React from 'react'
import PortalMaterialView from '../../views/PortalMaterialView'
import {URL_GET_MY_FILE} from "../../constants";
import auth from "../../Auth";

export default function PortalMaterialController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	return (
		<PortalMaterialView>
			<background style={style} />
			<name>{props.name}</name>
			{props.file && <link href={getDownloadLink()} />}
		</PortalMaterialView>
	);

	function getDownloadLink(){
		return URL_GET_MY_FILE + props.file + '/' + auth.getUser().token
	}
}