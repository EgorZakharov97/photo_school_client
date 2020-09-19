import React from 'react'
import TutorialVideoWindowView from "../../../views/TutorialVideoWindowView";

export default function TutorialVideoWindowController(props) {

	if(props.show) return (
		<TutorialVideoWindowView>
			<name>{props.name || "No name"}</name>
			<video dangerouslySetInnerHTML={{ __html: props.link }} />
			<close onClick={close} />
		</TutorialVideoWindowView>
	);
	else return (
		<> </>
	);

	function close(){
		props.setShowWindow(false)
	}
}