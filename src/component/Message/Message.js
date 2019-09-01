import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import search from './../../assets/icons/search.svg'
import plus from './../../assets/icons/plus.svg'


import './style.css';
import MessageBox from '../MessageBox/MessageBox';
import NoMessageBox from '../noMessageBox/NoMessageBox';


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }

    render() {
        return (
            <div className="Message" >
                <div className="M-title" >
                    پیامها
                </div>
                <div className="M-body" >
                    <div className="CP-up" >
                        <div className="CP-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>
                        <div className="CP-create-project-btn" onClick={this.createNewProject}>
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div>
                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <NoMessageBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;


