import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import msg1 from '../../../assets/images/msg1.png'

import './style.css';


class DesignerMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToDesginerMessage = () => {
        browserHistory.push('/DesignerChatBox');
    }

    render() {
        return (
            <div className="DesignerMessageBox" onClick={this.goToDesginerMessage} >
                <div className="DMBX-right" >
                    <img src={msg1} alt="طرح" />
                    <span className="DMBX-name" >جک جینلهال</span>
                </div>
                <div className="DMBX-left" >
                    <p className="DMBX-text" >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                    <span className="DMBX-date" >10:20 ب.ظ 1398/01/01</span>
                </div>
            </div>
        );
    }
}

export default DesignerMessageBox;


