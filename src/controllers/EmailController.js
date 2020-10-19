import React from 'react'
import EmailView from '../views/EmailView'

export default function EmailController(props){
	return(
		<EmailView>
			<email>{props.email || 'undefined'}</email>
			<delete onClick={props.delete} />
		</EmailView>
	)
}