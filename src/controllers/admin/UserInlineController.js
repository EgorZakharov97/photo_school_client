import React, {useEffect, useState} from 'react'
import UserInlineView from "../../views/UserInlineView";

export default function UserInlineController(props){

	const [selected, setSelected] = useState(false);

	return(
		<UserInlineView>
			<select checked={props.user.selected} onChange={e => {props.selectUser(e, props.user.email)}} />
			<name>{props.user.username || 'Has no name'}</name>
			<email>{props.user.email}</email>
			<phone>{props.user.phoneNumber || 'Has no phone'}</phone>
			<subscription onClick={props.subscribeUser} />
		</UserInlineView>
	)
}