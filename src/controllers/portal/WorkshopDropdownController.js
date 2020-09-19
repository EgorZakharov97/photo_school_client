import React from 'react'
import shortid from 'shortid'
import WorkshopDropdownView from "../../views/WorkshopDropdownView";

export default function	WorkshopDropdownController(props) {
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	const starts =  monthNames[(new Date(props.importantDates.courseStarts)).getUTCMonth()] + ' ' + (new Date(props.importantDates.courseStarts)).getUTCDate();
	const STYLE = {
		backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image}')`,
		backgroundImage2: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props.image}')`
	};
	return (
		<WorkshopDropdownView key={shortid.generate()}>
			<background>
				<name>{props.name}</name>
				<starts>{starts}</starts>
			</background>
			<description><div dangerouslySetInnerHTML={{ __html: props.richText.description }}></div></description>
			<timeline><div dangerouslySetInnerHTML={{ __html: props.richText.willLearn }}></div></timeline>
			<will-learn><div dangerouslySetInnerHTML={{ __html: props.richText.timeline }}></div></will-learn>
			{props.chatLink && <chat-link href={props.chatLink} />}
		</WorkshopDropdownView>
	)
}