import React, { Component } from 'react';
import { browserHistory } from 'react-router';


//
//
//


import layerempty from './../../assets/icons/layerempty.svg'


//
//compoents
//


import './style.css';



class NoProject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }


    render() {
        return (
            <div className="noProject">
                <div className="noProjectBox" >
                    <img src={layerempty} alt="لایه ها" />
                    <h1>پروژه ثبت نشده است</h1>
                    <p> 
                        برای سفارش و ثبت اولین پروژه خود ، برروی لینک <b>ایجاد پروژه جدید</b> کلیک نمایید
                    </p>
                    <button onClick={this.createNewProject}>
                        ایجاد پروژه جدید
                    </button>
                </div>
            </div>
        );
    }
}

export default NoProject;