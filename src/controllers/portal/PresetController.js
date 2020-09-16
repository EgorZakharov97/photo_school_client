import React from 'react'
import PresetPortalView from '../../views/PresetPortalView'

export default function PresetController(props) {

	return (
		<PresetPortalView>
			<background style={`background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image}');`}>
				<link href={props.file || ""}>{props.name}</link>
			</background>
		</PresetPortalView>
	)
}