import React, {useState} from 'react'
import auth from '../Auth'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {STRIPE_PK, URL_SUBSCRIBE, STRIPE_PRICE_SUBSCRIPTION_2} from '../constants'

import CheckoutFormView from '../views/CheckoutFormView'

const axios = auth.getAPI()

export default function CheckoutFormController(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessageInfo] = useState({})
    const stripe = useStripe();
    const elements = useElements();
    const priceId = props.priceId;

    async function handleSubmitSub(event){
        
    }

    function setMessage(message, positive=true){
        setMessageInfo({
            positive: positive,
            body: message || "Unknown event occured"
        })
    }


    return (
        <CheckoutFormView>
            {/* <price>{props.price || ""}</price>
            <close onClick={props.onClose} />
            <heading>{props.heading || ""}</heading>

            {auth.isAuthenticated() ? 
            (
                <logged-in-as>
                    <email>{auth.getUser().email}</email>
                </logged-in-as>
            ) : (
                <auth-form>
                    <email value={email} onChange={e => {setEmail(e.target.value)}}  />
                    <password value={password} onChange={e => {setPassword(e.target.value)}} />
                </auth-form>
            )}

            <stripe-card>
                <CardElement options={CARD_ELEMENT_OPTIONS} />
            </stripe-card>
            <submit onClick={e => handleSubmit(e)} />
            {message.body && <message style={message.positive ? {color: "green"} : {color: "red"}}>{message.body}</message>} */}
        </CheckoutFormView>
    )
}