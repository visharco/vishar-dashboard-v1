import React, { Component } from 'react';

//
//
//

import close from '../../assets/icons/close.svg'
import bell from '../../assets/icons/bell.svg'

import './style.css';


class NotificationBox extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="NotificationBox">
                <div className="NB-body" >
                <img className="NB-bell"  src={bell} alt="اعلان" />
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                        <span>برای دیدن این اعلان اینجا کلیک کنید </span>
                    </p>
                </div>
                <img className="NB-close" src={close} alt="بستن" />
            </div>
        );
    }
}

export default NotificationBox;