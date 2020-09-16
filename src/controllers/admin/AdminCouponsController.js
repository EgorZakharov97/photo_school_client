import React from 'react'
import auth from '../../Auth'
import AdminFormController from './AdminFormController'
import CouponsFormView from '../../views/CouponsFormView'
import CouponsContainerView from '../../views/CouponsContainerView'
import CouponView from '../../views/CouponView'
import {URL_DELETE_COUPON, URL_GET_COUPONS, URL_POST_COUPON} from '../../constants'

const axios = auth.getAPI()

export default class AdminCouponController extends React.Component {

    state = {
        data: {
            limit: false,
        },
        coupons: [],
        message: {},
    }

    componentDidMount(){
        this.fetchCoupons()
    }

    render(){
        return (
            <div>
                <CouponsFormView>
                    <name value={this.state.data.name || ""} onChange={e => this.onChange(e)}/>
                    <discount value={this.state.data.discount || ""} onChange={e => this.onChange(e)}/>
                    <code value={this.state.data.code || ""} onChange={e => this.onChange(e)}/>
                    <product value={this.state.data.product || ""} onChange={e => this.onChange(e)}/>
                    <expires value={this.state.data.expires} onChange={e => this.onExpiryDateChange(e)} />
                    <once checked={this.state.data.usage === 'onetime'} onChange={e => this.onUsageChange(e)} />
                    <unlimited checked={this.state.data.usage === 'unlimited'} onChange={e => this.onUsageChange(e)} />
                    <submit onClick={e => this.onFormSubmit(e)} />
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
                                        <product>{coupon.product}s</product>
                                        <usage>{coupon.singleUse ? "One time" : "Unlimited"}</usage>
                                        {coupon.expieryDate && <expires>{new Date(coupon.expiryDate).toISOString()}</expires>}
                                        <discount>{coupon.discount}%</discount>
                                        <used>{coupon.wasUsed} times</used>
                                        <delete id={coupon._id} onClick={e => this.onCouponDelete(e)} />
                                    </CouponView>
                                </coupon>
                            )
                        })}
                    </CouponsContainerView>
                </coupons-container>
            </div>      
        )
    }

    onCouponDelete(e){
        axios.delete(URL_DELETE_COUPON + e.target.id)
        .then(res => {
            const data = res.data
            console.log(data)
            if(data.success){
                this.fetchCoupons()
                this.setMessage(data.message, true)
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
    }

    fetchCoupons(){
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

    onFormSubmit(e){
        e.preventDefault();
        axios.post(URL_POST_COUPON, this.state.data)
        .then(res => {
            const data = res.data
            if(data.success) {
                this.setMessage(data.message, true)
                this.setState(state => {
                    return state.data = {}
                })
                this.fetchCoupons()
            } else {
                this.setMessage(data.message, false)
            }
        })
        .catch(e => {
            console.log(e)
        })
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

    onChange(e){
        let name = e.target.name
        let value = e.target.value
        this.setState(state => {
            return state.data[name] = value
        })
    }
}