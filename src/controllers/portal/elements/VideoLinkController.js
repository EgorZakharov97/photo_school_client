import React from 'react'
import VideoLinkView from '../../../views/VideoLinkView'

export default function (props) {
	return(
		<VideoLinkView>
			<link onClick={play} >
				<name>{props.name}</name>
			</link>
		</VideoLinkView>
	);

	function play() {
		props.setIndex(props.i);
		props.setShowVideo(true)
	}
}