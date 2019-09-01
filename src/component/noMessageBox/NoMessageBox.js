import React, { Component } from 'react';

//
//
//

import envelope from '../../assets/icons/envelope.svg'

import './style.css';


class NoMessageBox extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="noMessageBox">
                <div className="noMessageBoxBox" >
                    <img src={envelope} alt=" اعلان" />
                    <h1>پیام جدیدی برای نمایش وجود ندارد</h1>
                </div>
            </div>
        );
    }
}

export default NoMessageBox;