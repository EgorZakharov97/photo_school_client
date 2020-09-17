import React from 'react'
import PlayVideoVindowView from '../../views/PlayVideoVindowView'

export default function PlayVideoWindowController(props) {

	return(
		<PlayVideoVindowView>
			<back onClick={onBack} />
			<name>{props.name}</name>
			<video>{props.link}</video>
			<next onClick={props.setNextVideo} />
		</PlayVideoVindowView>
	);

	function onBack(){
		setTimeout(() => {
			props.setShowPlay(false)
		}, 300)
	}
}