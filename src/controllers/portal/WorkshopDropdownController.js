import React from 'react'
import shortid from 'shortid'
import WorkshopDropdownView from "../../views/WorkshopDropdownView";

export default function	WorkshopDropdownController(props) {
	console.log(props)
	// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	// const starts =  monthNames[(new Date(props.importantDates.courseStarts)).getUTCMonth()] + ' ' + (new Date(props.importantDates.courseStarts)).getUTCDate();
	// const STYLE = {
	// 	backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('${props.image}')`,
	// 	backgroundImage2: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props.image}')`
	// };

	return (
		<WorkshopDropdownView key={shortid.generate()}>
			<background>
				<name></name>
				<starts></starts>
			</background>
			<description>{props.richText.description}</description>
			<timeline>{props.richText.willLearn}</timeline>
			<will-learn>{props.richText.timeline}</will-learn>
			{props.chatLink && <chat-link href={props.chatLink} />}
		</WorkshopDropdownView>
	)
}