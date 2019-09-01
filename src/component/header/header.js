import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

//
//
//

import logo from './../../assets/images/logo.png'
import envelope from '../../assets/icons/envelope.svg';
import bell from '../../assets/icons/bell.svg';

//
//compoents
//


import './style.css';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }


    

    goToNotification = () => {
        browserHistory.push('/notification');
    }
    render() {

        return (
            <div className="header">
                <div className="container-fluid" >
                    <div className="container" >
                        <div className="menuTablet" >
                            <div className="header-logo tabletHidden"  >
                                <Link to="/" className="menu-login " >
                                    <img src={logo} alt="لوگو"  />
                                </Link>
                            </div>
                        </div>

                        <div className="user-menu" >
                            <div className="header-logo tabletShow "  >
                                <Link to="/" className="menu-login" >
                                    <img src={logo} alt="لوگو" />
                                </Link>
                            </div>
                            <div className="envelope-boxes" >
                                {/* <div className="envelope-box" >
                                    <img className="envelope-icon" src={envelope} alt="صندوق ورودی" />
                                    <span className="envelope-number" >4</span>
                                </div> */}

                                {/* <div className="envelope-box" onClick={this.goToNotification} >
                                    <img className="envelope-icon" src={bell} alt="توجهات" />
                                    <span className="envelope-number" >1</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;