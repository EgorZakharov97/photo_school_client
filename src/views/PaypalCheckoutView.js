/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f1212b6860f150f9f0e6e14").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PaypalCheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PaypalCheckoutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PaypalCheckoutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== PaypalCheckoutView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/photolite-academy.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-node-type="commerce-paypal-checkout-form-container" data-wf-checkout-query data-wf-page-link-href-prefix className="w-commerce-commercepaypalcheckoutformcontainer">
              <div className="w-commerce-commercelayoutcontainer w-container">
                <div className="w-commerce-commercelayoutmain">
                  <form data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper">
                    <div className="w-commerce-commercecheckoutblockheader">
                      <h4>Shipping Method</h4>
                    </div>
                    <fieldset>
                      <div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-5f228d014c594816350487ce000000000012"><label className="w-commerce-commercecheckoutshippingmethoditem"><input type="radio" required name="shipping-method-choice" /><div className="w-commerce-commercecheckoutshippingmethoddescriptionblock"><div className="w-commerce-commerceboldtextblock" /><div /></div><div /></label></div>
                      <div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{display: 'none'}} className="w-commerce-commercecheckoutshippingmethodsemptystate">
                        <div>No shipping methods are available for the address given.</div>
                      </div>
                    </fieldset>
                  </form>
                  <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Customer Information</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Email</label>
                            <div />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Shipping Address</label>
                            <div />
                            <div />
                            <div />
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="w-commerce-commercecheckoutpaymentsummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Payment Info</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutrow">
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Payment Info</label>
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutcolumn">
                          <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Billing Address</label>
                            <div />
                            <div />
                            <div />
                            <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                            </div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="w-commerce-commercecheckoutorderitemswrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Items in Order</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-5f228d014c594816350487ce000000000050" />
                    </fieldset>
                  </div>
                </div>
                <div className="w-commerce-commercelayoutsidebar">
                  <div className="w-commerce-commercecheckoutordersummarywrapper">
                    <div className="w-commerce-commercecheckoutsummaryblockheader">
                      <h4>Order Summary</h4>
                    </div>
                    <fieldset className="w-commerce-commercecheckoutblockcontent">
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Subtotal</div>
                        <div />
                      </div>
                      <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-5f228d014c594816350487ce00000000006a">
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                          <div />
                          <div />
                        </div>
                      </div>
                      <div className="w-commerce-commercecheckoutsummarylineitem">
                        <div>Total</div>
                        <div className="w-commerce-commercecheckoutsummarytotal" />
                      </div>
                    </fieldset>
                  </div><a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton" data-loading-text="Placing Order...">Place Order</a>
                  <div data-node-type="commerce-checkout-error-state" style={{display: 'none'}} className="w-commerce-commercepaypalcheckouterrorstate">
                    <div className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info.  Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided.  Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order.  Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment.  Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default PaypalCheckoutView

/* eslint-enable */