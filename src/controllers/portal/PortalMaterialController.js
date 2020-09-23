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
			{(props.file && !props.dummy) && <link href={getDownloadLink()} />}
			{(!props.dummy && !props.file) && <unlock onClick={onUnlock} />}
			{props.dummy && <coming-soon/>}
		</PortalMaterialView>
	);

	function getDownloadLink(){
		return URL_GET_MY_FILE + props.file + '/' + auth.getUser().token
	}

	function onUnlock(){
		props.setObject({
			name: props.name,
			image: props.image
		});
		props.setWindow(true);
	}
}