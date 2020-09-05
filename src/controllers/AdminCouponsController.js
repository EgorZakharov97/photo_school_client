import React from 'react'
import axios from 'axios'
import AdminFormController from './AdminFormController'
import CouponsFormView from '../views/CouponsFormView'
import CouponsContainerView from '../views/CouponsContainerView'
import CouponView from '../views/CouponView'
import {URL_GET_COUPONS, URL_POST_COUPON, URL_GET_COUPON_DATA} from '../constants'

export default class AdminCouponController extends AdminFormController {
    constructor(props) {
        super(props)
        this.URL_GET_LIST = URL_GET_COUPONS
        this.URL_POST_OBJECT = URL_POST_COUPON
        this.URL_GET_OBJECT_DATA = URL_GET_COUPON_DATA
    }

    render(){
        return (
            <div>
                <CouponsFormView>
                    <name/>
                    <discount/>
                    <code/>
                    <product/>
                    <ifExpires/>
                    <expieryBlock/>
                    <expires/>
                    <once/>
                    <unlimited/>
                    <submit/>
                    <message/>
                </CouponsFormView>
                <coupons-list>
                    <coupon>
                        <CouponView>
                            
                        </CouponView>
                    </coupon>
                </coupons-list>
            </div>
            
                

                    
        )
    }
}