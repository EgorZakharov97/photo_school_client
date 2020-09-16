import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {URL_UPDATE_PAYMENT_METHOD} from "../../constants";
import auth from '../../Auth'

export default function FormUpdatePayment(props) {

	const stripe = useStripe();
	const elements = useElements();
	const setMessage = props.setMessage;
	const axios = auth.getAPI();

	const CARD_ELEMENT_OPTIONS = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#aab7c4",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	return (
		<label>
			<CardElement options={CARD_ELEMENT_OPTIONS} />
			<a onClick={updatePaymentMethod} href="#" className="af-class-login-submit w-button ">Update payment method</a>
		</label>
	);

	async function updatePaymentMethod(e) {
		e.preventDefault();
		if (!stripe || !elements) return;

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if(error){
			setMessage({
				body: "Sorry, could not update card at the moment",
				positive: false
			});
		} else {
			const paymentMethodId = paymentMethod.id;
			axios.post(URL_UPDATE_PAYMENT_METHOD, {paymentMethodId})
				.then(res => {
					const data = res.data;
					if(data.success){
						setMessage({
							body: data.message,
							positive: true
						})
					} else {
						setMessage({
							body: data.message,
							positive: false
						})
					}
				})
				.catch(badResponseHandler)
		}
	}

	function badResponseHandler(){
		setMessage({
			body: "Sorry, the operation cannot be finished at the moment",
			positive: false
		});
	}
}