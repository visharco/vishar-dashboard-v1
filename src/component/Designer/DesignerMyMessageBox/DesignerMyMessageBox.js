import React, { Component } from 'react';


import usergrey from '../../../assets/icons/usergrey.svg'

import './style.css';


class DesignerMyMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="DesignerMyMessageBox"  >
                <div className="DMMB-left" >
                    <p className="DMMB-text" >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <span className="DMMB-date" >10:20 ب.ظ 1398/01/01</span>
                </div>
                <div className="DMMB-right" >
                    <img src={usergrey} alt="طرح" />
                    <span className="DMMB-name" >ماریو</span>
                </div>
            </div>
        );
    }
}

export default DesignerMyMessageBox;


