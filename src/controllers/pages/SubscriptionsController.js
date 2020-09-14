import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import auth from '../../Auth'
import {STRIPE_PK, URL_SUBSCRIBE, STRIPE_PRICE_SUBSCRIPTION_2} from '../../constants'

import SubscriptionView from '../../views/SubscriptionView'

const axios = auth.getAPI()

export default function SubscriptionController(props) {

    useEffect(() => {
        const WEBFLOW_PAGE_ID = '5f48dc3d6aff25786516bc65'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    }, [])

    const [showBuy, setShowBuy] = useState(false)
    const [subsData, setSubsData] = useState({})
    const [authData, setAuth] = useState({email: "", password: ""})

    const stripePromise = loadStripe(STRIPE_PK)

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
        <SubscriptionView>
            <subscribe-trial/>
            <subscribe onClick={e => onSub2Pressed(e)} />
            <subscribe-coaching/>
            {showBuy && 
                <subscribe-form>
                    <price>{subsData.price || ""}</price>
                    <close/>
                    <heading>{subsData.heading || ""}</heading>

                    {auth.isAuthenticated() ? 
                    (
                        <logged-in-as>
                            <email>{auth.getUser().email}</email>
                        </logged-in-as>
                    ) : (
                        <auth-form>
                            <email value={authData.email} onChange={e => {setAuth({email: e.target.value})}}  />
                            <password value={authData.password} onChange={e => {setAuth({password: e.target.value})}} />
                        </auth-form>
                    )}

                    <stripe-card>
                        <Elements stripe={stripePromise} >
                            <CardElement options={CARD_ELEMENT_OPTIONS} />
                        </Elements>
                    </stripe-card>
                    <submit onClick={e => handleSubmit(e)} />
                </subscribe-form>
            }
        </SubscriptionView>
    )

    async function handleSubmit(event){
        event.preventDefault();
        if (!stripe || !elements) return

        const cardElement = elements.getElement(CardElement);
        const latestInvoicePaymentIntentStatus = localStorage.getItem('latestInvoicePaymentIntentStatus');
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if(error) return console.log('[createPaymentMethod error]', error);
        console.log('[PaymentMethod]', paymentMethod);
        const paymentMethodId = paymentMethod.id;
        if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
            // Update the payment method and retry invoice payment
            const invoiceId = localStorage.getItem('latestInvoiceId');
            retryInvoiceWithNewPaymentMethod({
            customerId,
            paymentMethodId,
            invoiceId,
            priceId,
            });
        } else {
            // Create the subscription
            createSubscription(paymentMethodId);
        }
    }

    function retryInvoiceWithNewPaymentMethod(customerId, paymentMethodId, invoiceId, priceId){
        
    }

    function createSubscription(paymentMethodId) {
        const data = {
            auth: authData,
            paymentMethodId: paymentMethodId,
            priceId: subsData.priceId
        }
        axios.post(URL_SUBSCRIBE, data)
        .then(res => {
            console.log(res.data)
        })
    }

    function onSub2Pressed(e) {
        e.preventDefault()
        setShowBuy(true)
        setSubsData({
            heading: "Subscription 2",
            price: "$200",
            priceId: STRIPE_PRICE_SUBSCRIPTION_2
        })
    }
}