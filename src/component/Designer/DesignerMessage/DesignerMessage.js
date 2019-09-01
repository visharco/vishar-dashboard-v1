import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import search from './../../../assets/icons/search.svg'
import plus from './../../../assets/icons/plus.svg'


import './style.css';
import NoMessageBox from '../../noMessageBox/NoMessageBox';
import DesignerMessageBox from '../DesignerMessageBox/DesignerMessageBox';


class DesignerMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }

    render() {
        return (
            <div className="DesignerMessage" >
                <div className="DesignerMessage-title" >
                    پیامها
                </div>
                <div className="DesignerMessage-body" >
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
                        <DesignerMessageBox />
                        <DesignerMessageBox />
                        <DesignerMessageBox />
                        <NoMessageBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignerMessage;


