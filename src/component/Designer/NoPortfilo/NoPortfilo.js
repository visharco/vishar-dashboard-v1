import React, { Component } from 'react';
import { browserHistory } from 'react-router';


//
//
//


import layerempty from './../../../assets/icons/layerempty.svg'


//
//compoents
//


import './style.css';



class NoPortfilo extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        // browserHistory.push('/projects');
        window.location='http://vishar.com/projects';

    }


    render() {
        return (
            <div className="NoPortfilo">
                <div className="NoPortfiloBox" >
                    <img src={layerempty} alt="لایه ها" />
                    <h1>نمونه کاری موجود نیست </h1>
                    <p>
                    کاربر گرامی، شما تاکنون هیچ اتودی در سیستم ثبت نکردید
                </p>
                    <button onClick={this.createNewProject}>
                       اولین اتود را ثبت کنید
                    </button>
                </div>
            </div>
        );
    }
}

export default NoPortfilo;