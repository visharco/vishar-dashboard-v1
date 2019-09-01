import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import Cover from '../../../component/cover/cover';
import Input from './../../../component/common/input/Input';
import Button from './../../../component/common/Button/Button';

import EmailChecker from '../../../component/EmailChecker/EmailChecker'


import logo from '../../../assets/images/logo.png'

import './style.css'


class ForgetPasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetPasswordError:'',
            emailnumber:'',
            resetPasswordValid:false
        }
    }
    goToLogin = () => {
        browserHistory.push('/login');
    }

    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(isNaN(this.state.emailnumber))
    }

    _resetPassword = () =>{
        this.setState({
            isLoading: true,
            resetPasswordError:''
        })

        if( isNaN(this.state.emailnumber) === false){
            this.setState({
                resetPasswordValid:true
            })
        }else if (EmailChecker(this.state.emailnumber) === true){
            this.setState({
                resetPasswordValid:true
            })
        }else {
            this.setState({
                resetPasswordValid:false,
                resetPasswordError:'شماره همراه یا ایمیل اشتباه است '
            })
        }

        
    }



    render() {
        return (
            <div className="registerLogin" >
                <div className="container-fluid" >
                    <div className="container" >
                        
                            {/* <Cover /> */}
                            <div className="forget-password-container">
                                <h2>بازیابی رمز عبور</h2>
                                
                                <p className="change-page-text" >
                                    حساب کاربری داری ؟
                                    <span onClick={this.goToLogin} >ورود </span>
                                </p>
                            </div>
                      
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgetPasswordComponent;