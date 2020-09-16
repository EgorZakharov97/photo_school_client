import React from 'react'
import MaterialView from '../../views/MaterialView'

export default function MaterialController(props) {

	return (
		<MaterialView>
			<background style={`background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image}');`} />
			<name>{props.name}</name>
			{props.file && <link href={props.file} />}
		</MaterialView>
	)
}