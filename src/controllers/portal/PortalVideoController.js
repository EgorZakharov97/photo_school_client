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
				<overlay onClick={e => {props.link ? onPlay() : onLocked()}}>
					{props.link ? (
						<play/>
					) : (
						<loched/>
					)}
				</overlay>
			</background>
		</VideoPortalView>
	);

	function onLocked() {
		props.setVideoData({
			name: props.name,
		});
		props.setShowGetSubscription(true)
	}

	function onPlay() {
		props.setVideoData({
			name: props.name,
			link: props.link,
			description: props.description
		});
		props.setShowPlay(true)
	}

	function getDownloadLink(){
		return URL_GET_MY_FILE + props.file + '/' + auth.getUser().token
	}
}