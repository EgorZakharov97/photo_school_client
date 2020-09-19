import React from 'react'
import PortalCourseView from '../../views/PortalCourseView'

export default function PortalMaterialController(props) {

	const style = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image || ""}')`
	};

	return (
		<PortalCourseView>
			<background style={style} onClick={e => {props.public ? onPlay() : onLocked()}}>
				<overlay>
					{props.public ? (
						<play/>
					) : (
						<locked/>
					)}
				</overlay>
			</background>
			<name>{props.name}</name>
			<description>{props.description}</description>
		</PortalCourseView>
	);

	function onLocked() {
		props.setVideoData({
			name: props.name,
			price: props.pricing.finalPrice
		});
		props.setShowGetSubscription(true)
	}

	function onPlay() {
		props.setCourse({
			name: props.name,
			id: props._id
		});
		props.setShowCourse(true)
	}
}