import React, {useState} from 'react'
import auth from '../../Auth'
import {URL_UPDATE_USER_PROFILE, URL_PASSWORD_RESET, STRIPE_PK, URL_UPDATE_PAYMENT_METHOD} from "../../constants";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import PortalProfileView from '../../views/PortalProfileView'
import FormUpdatePayment from '../portal/FormUpdatePayment'

export default function PortalProfileController(props) {

	const axios = auth.getAPI();

	const stripePromise = loadStripe(STRIPE_PK);

	const [user, setUser] = useState(auth.getUser());
	const [message, setMessage] = useState({body: "", positive: false});

	return (
		<PortalProfileView>
			<reset-password onClick={e => onResetPassword()} />
			<message style={message.positive ? {color: "green"} : {color: "red"}} >{message.body || " "}</message>
			<email>{user.email || ""}</email>
			<name value={user.username || ""} onChange={e => changeHandler(e)} />
			<phone-number value={user.phoneNumber || ""} onChange={e => changeHandler(e)} />
			<experience value={user.experience || ""} onChange={e => changeHandler(e)} />
			<sex value={user.sex || ""} onChange={e => changeHandler(e)} />
			<update-user-info onClick={e => updateUserProfile(e)} />
			<stripe-payment>
				<Elements stripe={stripePromise}>
					<FormUpdatePayment setMessage={setMessage.bind(this)} />
				</Elements>
			</stripe-payment>
		</PortalProfileView>
	);

	function updateUserProfile(e){
		e.preventDefault();
		axios.post(URL_UPDATE_USER_PROFILE, user)
			.then(res => {
				const data = res.data;
				if(data.success){
					setMessage({
						body: data.message,
						positive: true
					});
					auth.saveUser(data.body);
				} else {
					setMessage({
						body: data.message,
						positive: false
					});
				}
			})
			.catch(badResponseHandler)
	}

	function badResponseHandler(){
		setMessage({
			body: "Sorry, the operation cannot be finished at the moment",
			positive: false
		});
	}

	function onResetPassword() {
		axios.post(URL_PASSWORD_RESET, {email: user.email})
			.then(res => {
				const data = res.data;
				if(data.success){
					setMessage({
						body: "Link with password reset has been sent to your email. It will expire in 10 minutes",
						positive: true
					})
				} else {
					setMessage({
						body: "Sorry, could not reset password at the moment",
						positive: false
					})
				}
			})
			.catch(e => {
				setMessage({
					body: "Sorry, could not reset password at the moment",
					positive: false
				})
			})
	}

	function changeHandler(e){
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}
}