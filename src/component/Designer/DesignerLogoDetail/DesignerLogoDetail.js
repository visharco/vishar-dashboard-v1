import React, { Component } from 'react';
import customer1 from '../../../assets/images/customer1.png';
import './style.css';


class DesignerLogoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const comment = '../../../assets/icons/comment';
        const like = '../../../assets/icons/like';
        const view = '../../../assets/icons/view';
        return (
            <div className="DesignerLogoDetail" >
                <div className="DLD-right" >
                    <div className="DLD-right-title" >
                        <h1>امید آرمانی</h1>
                        <h2>1 سطح </h2>
                    </div>
                    <img src={customer1} alt="مشتری" />

                </div>
                <p className="DLD-time" >
                    انتشار داده شده در :
                    <span> '  10:20 ب.ظ  '</span>
                    <span> '  10/10/1398  '</span>
                </p>
                <div className="DLD-icon-box" >
                    <div className="DLD-icons" >
                        <img src={like} alt="لایک" />
                        <span>12</span>
                    </div>
                    <div className="DLD-icons" >
                        <img src={view} alt="بازدید" />
                        <span>33</span>
                    </div>
                    <div className="DLD-icons" >
                        <img src={comment} alt="نظر" />
                        <span>39</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignerLogoDetail;
