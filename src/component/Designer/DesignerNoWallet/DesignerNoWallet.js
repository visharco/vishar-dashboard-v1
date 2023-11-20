import React, { Component } from 'react';
import './style.css';


class DesignerNoWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const walletgrey = './../../../assets/icons/walletgrey';

        return (
            <div className="DesignerNoWallet">
                <div className="DesignerNoWalletBox" >
                    <img src={walletgrey} alt=" اعلان" />
                    <h1> کیف پول شما خالیست</h1>
                </div>
            </div>
        );
    }
}

export default DesignerNoWallet;