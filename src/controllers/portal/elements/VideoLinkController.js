import React from 'react'
import VideoLinkView from '../../../views/VideoLinkView'

export default function (props) {

	return(
		<VideoLinkView onClick={play}>
			<name>props.name</name>
		</VideoLinkView>
	);

	function play() {
		props.setIndex(props.i);
		props.setShowWindow(true)
	}
}