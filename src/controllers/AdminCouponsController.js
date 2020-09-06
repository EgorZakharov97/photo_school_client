import React from 'react'
import axios from 'axios'
import AdminFormController from './AdminFormController'
import CouponsFormView from '../views/CouponsFormView'
import CouponsContainerView from '../views/CouponsContainerView'
import CouponView from '../views/CouponView'
import {URL_GET_COUPONS, URL_POST_COUPON} from '../constants'

export default class AdminCouponController extends React.Component {

    state = {
        data: {
            limit: false,
        },
        coupons: [],
        message: {},
    }

    componentDidMount(){
        axios.get(URL_GET_COUPONS)
        .then(res => {
            let data = res.data;
            if(data.success){
                this.setState({coupons: data.body || []})
            } else {
                console.log(data.message)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <CouponsFormView>
                    <name value={this.state.data.name || ""} onChange={e => this.onChange(e)}/>
                    <discount value={this.state.data.discount || ""} onChange={e => this.onChange(e)}/>
                    <code value={this.state.data.code || ""} onChange={e => this.onChange(e)}/>
                    <product value={this.state.data.product || ""} onChange={e => this.onChange(e)}/>
                    <limit checked={this.state.data.limit} value={this.state.data.limit} onChange={this.onLimitChanges.bind(this)} />
                    <expieryBlock>
                        <expires value={this.state.data.expires} onChange={e => this.onExpiryDateChange(e)} />
                    </expieryBlock>
                    <once checked={this.state.data.usage === 'onetime'} onChange={e => this.onUsageChange(e)} />
                    <unlimited checked={this.state.data.usage === 'unlimited'} onChange={e => this.onUsageChange(e)} />
                    <submit onClick={this.submit()} />
                    {this.state.message.body && <message style={this.state.message.positive ? {color: "green"} : {color: "red"}}>{this.state.message.body}</message>}
                </CouponsFormView>
                
                <coupons-container>
                    <CouponsContainerView>
                        {this.state.coupons.map((coupon, i) => {
                            return (
                                <coupon key={i}>
                                    <CouponView key={i}>
                                        <name>{coupon.name}</name>
                                        <code>{coupon.code}</code>
                                        <product>{}</product>
                                        <usage>{}</usage>
                                        {/* <expires>{new Date(coupon.expiryDate).toISOString()}</expires> */}
                                        <discount>{coupon.discount}%</discount>
                                        <used>{coupon.wasUsed}</used>
                                        <delete>{}</delete>
                                    </CouponView>
                                </coupon>
                            )
                        })}
                    </CouponsContainerView>
                </coupons-container>
            </div>      
        )
    }

    submit(){

    }

    setMessage(message, positive=true){
        this.setState(state => {
            return state.message = {
                positive: positive,
                body: message || "Unknown event occured"
            }
        })
    }

    onUsageChange(e) {
        const value = e.target.value;
        this.setState(state => {
            return state.data.usage = value
        })
    }

    onExpiryDateChange(e){
        const date = e.target.value;
        this.setState(state => {
            return state.data.expires = date
        })
    }

    onLimitChanges(){
        this.setState(state => {
            return state.data.limit = !state.data.limit
        })
    }

    onChange(e){
        let name = e.target.name
        let value = e.target.value
        this.setState(state => {
            return state.data[name] = value
        })
    }
}