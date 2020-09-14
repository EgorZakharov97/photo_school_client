import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import auth from '../../Auth'
import {STRIPE_PK} from '../../constants'

import SubscriptionView from '../../views/SubscriptionView'

export default function SubscriptionController(props) {

    useEffect(() => {
        const WEBFLOW_PAGE_ID = '5f48dc3d6aff25786516bc65'
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14'
    
        var doc = document.getElementsByTagName("html")[0]
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID)
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    }, [])

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
            <subscribe onClick={e => subscribe(e)} />
            <subscribe-coaching/>
            <subscribe-form>
                <close/>
                <heading/>
                <stripe-form>
                    <Elements stripe={stripePromise} >
                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </Elements>
                </stripe-form>
            </subscribe-form>
        </SubscriptionView>
    )

    function subscribe(e) {
        e.preventDefault()
        alert('was pressed')
    }
}