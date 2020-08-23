import React from 'react';

export default class BuyFormController extends React.Component {
    
    render() {
        return (
            <section id="section-by" class="section-buy">
                <div class="payment-container w-container">
                    <div class="payment-block">
                        <div id="buy-close" class="close-btn">
                            <div onClick={this.props.closeForm} class="text-block-15">X</div>
                        </div>
                        <div id="coursePic" class="course-buy-pic"></div>
                        <div class="but-description">Wokshop + 1 month of portal access</div>
                        <h1 id="courseName" class="buy-course-name">Male Pornography</h1>
                        <div id="courseStarts" class="but-description low">Aug 14</div>
                        <div id="blockLoggedIn" class="buy-email">
                            <div class="buy-hint">You are logged in as:</div>
                            <div id="usrEmail" class="buy-user-email">skymailsenter@gmail.com</div>
                        </div>
                        <div class="dateblock checkout">
                            <div class="date-phrase">Final Price</div>
                            <div id="finPrice" class="date-duration">$200</div>
                        </div>

                        <div id="email-form" class="form-block-3 w-form">

                        <form method="post" action="/auth/local/fastRegister">
                            <label for="email" class="field-label-5">Email</label>
                            <input type="email" class="w-input" maxlength="256" name="email" data-name="email" placeholder="" id="email"/>
                            <label for="pwrd" class="field-label-6">Create Password</label>
                            <input id="courseID" type="text" name="courseID" value="" style="display: none"/>
                            <input type="password" class="text-field-4 w-input" maxlength="256" name="password" data-name="password" placeholder="" id="pwrd" required=""/>
                            <div style="margin-top: 20px;" class="have-coupon">
                            <input id="cpnInput" type="text" class="text-field-4 w-input" maxlength="256" name="coupon" data-name="coupon" placeholder="Have a coupon?" id="coupon"/>
                            <input id="cpnSubmitForm" type="submit" value="Apply" data-wait="Please wait..." class="submit-button-4 w-button"/>
                        </div>
                            <input type="submit" value="Proceed to Checkout" data-wait="Please wait..." class="submit-button-3 w-button"/>
                        </form>

                        </div>
                        <div class="w-form">

                        <form id="couponForm" name="email-form-2" data-name="Email Form 2" method="post" action="/buy/checkCoupon"><label for="name-2" class="field-label-6">Have a coupon?</label>
                            <div class="have-coupon">
                                <input type="text" class="text-field-4 w-input" maxlength="256" name="coupon" data-name="coupon" placeholder="" id="coupon" required=""/>
                                <input id="cpnSubmit" type="submit" value="Apply" data-wait="Please wait..." class="submit-button-4 w-button"/>
                            </div>
                        </form>
                        </div>

                        <a href="#" id="logCheckout" class="buy-buy">Proceed to Checkout</a>
                        <p id="user-message"> </p>
                    </div>
                </div>
            </section>
        )
    }
}