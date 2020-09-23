import React from 'react'
import UserInlineView from "../../views/UserInlineView";

export default function UserInlineController(props){

	return(
		<UserInlineView>
			<select checked={true} onClick={props.selectUser} />
			<name>{props.username || 'Has no name'}</name>
			<email>{props.email}</email>
			<phone>{props.phoneNumber || 'Has no phone'}</phone>
			<subscription onClick={props.subscribeUser} />
		</UserInlineView>
	)
}