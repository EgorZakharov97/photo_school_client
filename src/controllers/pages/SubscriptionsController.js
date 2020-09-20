import React, {useState, useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import auth from '../../Auth'
import {loadStripe} from '@stripe/stripe-js'
import {STRIPE_PK, URL_SUBSCRIBE, STRIPE_PRICE_SUBSCRIPTION_2} from '../../constants'

import SubscriptionView from '../../views/SubscriptionView'
import CheckoutFormController from '../CheckoutFormController'

const axios = auth.getAPI()

export default function SubscriptionController(props) {

    useEffect(() => {
        const WEBFLOW_PAGE_ID = '5f48dc3d6aff25786516bc65';
        const WEBFLOW_SITE_ID = '5f1212b6860f150f9f0e6e14';
    
        var doc = document.getElementsByTagName("html")[0];
        doc.setAttribute('data-wf-page', WEBFLOW_PAGE_ID);
        doc.setAttribute('data-wf-site', WEBFLOW_SITE_ID)
    }, []);

    const stripePromise = loadStripe(STRIPE_PK);
    const [showBuy, setShowBuy] = useState(false);
    const [subsData, setSubsData] = useState({});

    return (
        <SubscriptionView>
            <subscribe-trial/>
            <subscribe onClick={e => onSub2Pressed(e)} />
            <subscribe-coaching/>
            {showBuy && 
                <checkout-form>
                    <Elements stripe={stripePromise}>
                        <CheckoutFormController onClose={close} {...subsData} />
                    </Elements>
                </checkout-form>
            }
        </SubscriptionView>
    );

    function close(e) {
        setShowBuy(false);
        setSubsData({
            heading: "",
            price: "",
            priceId: "",
        })
    }

    function onSub2Pressed(e) {
        e.preventDefault();
        setShowBuy(true);
        setSubsData({
            heading: "Subscription 2",
            price: "$200",
            priceId: STRIPE_PRICE_SUBSCRIPTION_2
        })
    }
}