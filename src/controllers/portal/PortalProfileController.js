import React from 'react'
import auth from '../../Auth'

import PortalProfileView from '../../views/PortalProfileView'

const axios = auth.getAPI();

export default function PortalProfileController(props) {
	const user = auth.getUser();

	return (
		<PortalProfileView>
			<resetPassword/>
			<email>{user.email}</email>
			<name></name>
			<phoneNumber></phoneNumber>
			<experience></experience>
			<sex></sex>
			<update-user-info/>
			<stripePayment></stripePayment>
			<updatePayment/>

		</PortalProfileView>
	)
}