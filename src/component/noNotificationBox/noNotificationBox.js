import React, { Component } from 'react';

//
//
//

import bell from '../../assets/icons/bell.svg'

import './style.css';


class NoNotificationBox extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="NoNotificationBox">
                <div className="noProjectBox" >
                    <img src={bell} alt=" اعلان" />
                    <h1>اعلان جدیدی برای نمایش وجود ندارد</h1>
                </div>
            </div>
        );
    }
}

export default NoNotificationBox;