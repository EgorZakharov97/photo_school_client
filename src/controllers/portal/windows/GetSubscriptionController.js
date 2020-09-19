import React from 'react'
import GetSubscriptionView from '../../../views/GetSubscriptionView'

export default function GetSubscriptionController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	if(props.show) return (
		<GetSubscriptionView>
			<close onClick={onClose} />
			<name>{props.name}</name>
			<background style={style} />
			<name2>{props.name}</name2>
			{props.price && <price>{props.price}</price>}
			<submit onClick={onSubmit} />
		</GetSubscriptionView>
	);
	else return (
		<></>
	);

	function onClose() {
		setTimeout(() => {
			props.setShowWindow(false)
		}, 300)
	}

	function onSubmit() {
		props.history.push('/subscription')
	}
}