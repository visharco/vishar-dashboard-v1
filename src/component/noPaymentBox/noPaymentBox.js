import React, { Component } from 'react';

//
//
//

import paymentgrey from '../../assets/icons/paymentgrey.svg'

import './style.css';


class NoPaymentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="NoPaymentBox">
                <div className="NoPaymentBoxBox" >
                    <img src={paymentgrey} alt=" اعلان" />
                    <h1>تراکنشی برای نمایش وجود ندارد</h1>
                </div>
            </div>
        );
    }
}

export default NoPaymentBox;