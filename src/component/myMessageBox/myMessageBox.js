import React, { Component } from 'react';


import usergrey from '../../assets/icons/usergrey.svg'

import './style.css';


class MyMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="MyMessageBox"  >
                <div className="MMB-left" >
                    <p className="MMB-text" >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <span className="MMB-date" >10:20 ب.ظ 1398/01/01</span>
                </div>
                <div className="MMB-right" >
                    <img src={usergrey} alt="طرح" />
                    <span className="MMB-name" >ماریو</span>
                </div>
            </div>
        );
    }
}

export default MyMessageBox;


