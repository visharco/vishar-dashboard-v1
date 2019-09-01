import React, { Component } from 'react';

//
//
//

import NotificationBox from '../notificationBox/notificationBox'
import NoNotificationBox from '../noNotificationBox/noNotificationBox'

//
//compoents
//


import './style.css';


class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Notification">

                
<div className="DP-title" >
                    اعلانات
                </div>
                <div className="N-body" >
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NoNotificationBox />

                </div>

                
            </div>
        );
    }
}

export default Notification;