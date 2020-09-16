import React from 'react'
import PortalMaterialView from '../../views/PortalMaterialView'

export default function PortalMaterialController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	return (
		<PortalMaterialView>
			<background style={style} />
			<name>{props.name}</name>
			{props.file && <link href={props.file} />}
		</PortalMaterialView>
	)
}