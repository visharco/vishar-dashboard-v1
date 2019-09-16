import React, {Component} from 'react';
import './style.css';
import logo from '../../../assets/images/logo.png'
import Button from '../../../component/common/Button/Button';
import {browserHistory} from 'react-router';
import PostData from '../../../controler/postToApi';
import EmailChecker from '../../../component/EmailChecker/EmailChecker'
import SweetAlert from 'sweetalert-react';
import Token from '../../../api/token';
import IconDesginer from '../../../assets/icons/desginer.svg'
import IconCustomer from '../../../assets/icons/customer.svg';

import iconPassword from '../../../assets/icons/login/lock.svg'
import iconUser from '../../../assets/icons/login/user.svg'
import iconEmail from '../../../assets/icons/login/email.svg'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'login', 
            emailLogin: '',
            passwordLogin: '',
            emailLoginError: '',
            passwordLoginError: '',
            isLoading:false,

            isLoadingRegister: false,
            emailErrorRegister: '',
            nameFamilyErrorRegister: '',
            passwordErrorRegister: '',
            userTypeErrorText: '',
            name: '',
            emailRegister: '',
            passwordRegister: '',


        }
    }

    Modal = React.createRef();



    componentDidMount(){
        document.getElementById('register').classList.add ( "activeTab");
        document.getElementById('registerForm').classList.add ( "activeForm");

    }
    componentWillMount(){
        if(Token !== null)
            browserHistory.push('/dashboard');
    }
    // show image priview and big
    //-------------------------------------------------------------------------------------------------------------------------------------------------
    _actionModal = (val) => { 
        if(val === 'open')
            this.Modal.current.style.display = 'flex';
        else if (val === 'close')
            this.Modal.current.style.display = 'none';

    }

    //
    //
    enterPressed =  (event) => { 
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            if(event.target.name === 'passwordRegisterTwo') // if is from phone input. the name get by event
                this._onClickRegister();             
            else if(event.target.name === 'passwordLogin') // if is from sms activity code input. the name get by event
                this._callLogin();
        } 
    }
    
    goToLogin = () => {
        browserHistory.push('/register');
    }
    goToForgetPassword = () => {
      //  browserHistory.push('/forgetPassword');
    }

    _callLogin = async () => {
        this.setState({
            isLoading: true,
            emailLoginError: '',
            passwordLoginError: ''
        })
 
        if (this.state.emailLogin.trim() === '') {
            return  this.setState({
                show:true,
                errorMessage: 'ایمیل را وارد نکردید',
                isLoading:false
            })
        }
        
        if (EmailChecker(this.state.emailLogin) === false) {
            return   this.setState({
                show:true,
                errorMessage: 'ایمیل را اشتباه وارد کرده اید',
                isLoading:false
            })
        }
         
        if (this.state.passwordLogin.trim() === '') {
            return  this.setState({
                show:true,
                errorMessage: 'پسورد را وارد نکردید',
                isLoading:false
            })
        }

        //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();

        data.append('email', this.state.emailLogin);
        data.append('password', this.state.passwordLogin);


        const res = await PostData(data, 'auth/email/login', null) 

        if (res.status === 200) {
            localStorage.setItem('@authorization_vishar', res.data.token);
            document.cookie = "auth=" + res.data.token+"; path=/; Domain=.vishar.com";
           
            window.location.reload();
        }
        else{
            this.setState({
                show:true,
                errorMessage : res.error,
                isLoading: false, 
            })
        }
    }


    _opentabs =async(val) => {
        document.getElementById('login').classList.remove ( "activeTab");
        document.getElementById('register').classList.remove ( "activeTab");
        document.getElementById('loginForm').classList.remove ( "activeForm");
        document.getElementById('registerForm').classList.remove ( "activeForm");

       await this.setState({
            type: val,
        }) 
        document.getElementById(val).classList.add ( "activeTab");
        document.getElementById(val + 'Form' ).classList.add ( "activeForm");
        // document.getElementById("MyElement").classList.add('MyClass');

    }

    changedHandler = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showPassword = () => { 
        document.getElementById('passwordLogin').type="text"
    }    
    hidePassword = () => {
        document.getElementById('passwordLogin').type="password"
    }

    //
    // -------------------------------------------------- register ------------------------------------------------
    //


    changedHandlerRadio = (e) => {
        // console.log(e.target.id);
        this.setState({
            userType: e.target.id
        })
    }


    _onClickRegister = async () => {

        this.setState({
            isLoadingRegister: true, 
            nameError: '', 
        })

 
         if (this.state.name === '') {
            
            return this.setState({
                show:true,
                errorMessage: 'نام و نام خانوادگی را وارد نکرده اید',
                 isLoadingRegister: false
             })
         } 
         
      
         if (this.state.emailRegister.trim() === '') {
             return this.setState({
                show:true,
                errorMessage: 'ایمیل را وارد نکرده اید ',
                 isLoadingRegister: false
             })
         } else {
             if (EmailChecker(this.state.emailRegister) === false) {
                 return  this.setState({
                     show:true,
                errorMessage: 'ایمیل را اشتباه وارد کرده اید ',
                     isLoadingRegister: false
                 })
             }
         }

         if(this.state.passwordRegister !== this.state.passwordRegisterTwo){
            return  this.setState({
                show: true,
                errorMessage: 'رمز عبور شما با یکدیگر یکسان نمی باشد',
                isLoadingRegister: false
            })
         } 

        const data = new FormData();

        data.append('name', this.state.name);
        data.append('email', this.state.emailRegister);
        data.append('password', this.state.passwordRegister);
        data.append('rePassword', this.state.passwordRegister);
        data.append('type', this.state.userType);


       
      
            const res = await PostData(data, 'auth/email/register');
            if (res.status === 200) {
                await localStorage.setItem('@authorization_vishar', res.data.token);
                await sessionStorage.setItem('@authorization_vishar', res.data.token)
                  document.cookie = "auth=" + res.data.token+"; path=/; Domain=.vishar.com";
                // browserHistory.push('/dashboard');
                window.location.reload();
            }
            else
            {
                this.setState({
                    show:true,
                    errorMessage: res.error,
                    isLoadingRegister: false
                })
            }
     

        this.setState({
            isLoadingRegister: false
        })


    }

    forgetpassword = async() => {

        this.setState({
            isLoadingRegister : true
        })
        const data = new FormData();
        data.append('email', this.state.emailForget);

        const res = await PostData(data, 'auth/email/forgetPassword') 
        // console.log(res)
        if( res.status === 200){
            this.setState({
                isLoadingRegister : false,
                show: true,
                errorMessage:'لینک تغیر کلمه عبور به ایمیل شما ارسال گردیده است',
                emailForget:''
            })
            this._actionModal('close');

        } else { 
           await this.setState({
                isLoadingRegister : false,
                show: true,
                errorMessage: res.error
            })
        }



    }


    render() {

        const _renderLogin = (
            <div  id="registerForm" className=" login-form ">
                <h2>ورود به سیستم</h2>
                <p style={{paddingBottom:'20px'}}>جهت ورود به سیستم ، لطفا اطلاعات زیر را وارد نمایید</p>
                {/* <Input
                    type={'text'}
                    name={'emailLogin'}
                    placeholder={'پست الکترونیک'}
                    changed={this.changedHandler}
                    error={this.state.emailLoginError} 
                    val={this.state.emailLogin}
                /> */}
                 <div className="password-container">
                    <img src={iconEmail}  className="login-input-icon"/>
                    <input className="login-input" id="emailLogin" name="emailLogin"  type="text" value={this.state.emailLogin} onChange={this.changedHandler} placeholder="پست الکترونیک" />
                </div>

                <div className="password-container">
                    {/* <Input
                        type={'password'}
                        name={'passwordLogin'}
                        placeholder={'رمز عبور'}
                        changed={this.changedHandler}
                        error={this.state.passwordLoginError}
                        val={this.state.passwordLogin} 
                    /> */}
                    <img src={iconPassword}  className="login-input-icon"/>
                    <input className="login-input" id="passwordLogin" name="passwordLogin" onKeyPress={this.enterPressed}   type="password" value={this.state.passwordLogin} onChange={this.changedHandler} placeholder="کلمه عبور" />
                    <div className="eye-show" onMouseDown={this.showPassword} onMouseUp={this.hidePassword}></div>
                </div>
                <p onClick={() => this._actionModal('open')} className="forget-password-link">رمز عبور خود را فراموش کرده اید؟</p>
                

                <Button
                    isLoading={this.state.isLoading}
                    title={'ورود'}
                    bgcolor={'#2d9cdb'}
                    hoverbgcolor={'#2d9cdb'}
                    click={this._callLogin}
                    borderRadius="100px"
                    color="#fff"
                    width="100%"
                />
            </div>
        )


        const _renderRegister = (
            <div id="loginForm" className=" register-form " >
                <h2> ثبت نام در ویشار</h2>
                <p>جهت عضویت در ویشار لطفا اطلاعات زیر را وارد نمایید</p>
                <br/>
    


                <div className="slect-type-conatiner">
                    <ul>
                        <li>
                            <input type="radio" id="customer" name="radio-group" className="login-hide-radio" onChange={this.changedHandlerRadio}/>
                            <label htmlFor="customer">
                                <img src={IconCustomer} className="login-select-image" alt="desginer" />
                                مشتری
                            </label>
                         </li>
                        <li>
                            <input type="radio" id="designer" name="radio-group"  className="login-hide-radio" onChange={this.changedHandlerRadio}/>
                            <label htmlFor="designer">
                                <img src={IconDesginer} className="login-select-image" alt="desginer" />
                                طراح
                            </label>
                        </li>
                    </ul>
                </div>



                {/* <Input
                    type={'text'}
                    name={'name'}
                    placeholder={'نام و نام خانوادگی'}
                    changed={this.changedHandler}
                    error={this.state.nameError}  
                    vla={this.state.name}
                /> */}

                <div className="password-container">
                    <img src={iconUser}  className="login-input-icon"/>
                    <input 
                        className="login-input" 
                        id="name" 
                        name="name"  
                        type="text" 
                        value={this.state.name} 
                        onChange={this.changedHandler} 
                        placeholder="نام و نام خانوادگی" 
                    />
                </div>


                {/* <span>لطفا نام و نام خانودادگی خود را به صورت فارسی وارد نمایید</span> */}
                {/* <Input
                    type={'email'}
                    name={'emailRegister'}
                    placeholder={'پست الکترونیک'}
                    changed={this.changedHandler}
                    error={this.state.emailErrorRegister}
                    vla={this.state.emailRegister}
                    autocomplete="off"
                /> */}

                <div className="password-container">
                    <img src={iconEmail}  className="login-input-icon"/>
                    <input 
                        className="login-input" 
                        id="emailRegister" 
                        name="emailRegister"  
                        type="text" 
                        value={this.state.emailRegister} 
                        onChange={this.changedHandler} 
                        placeholder="پست الکترونیک"
                    />
                </div>


                {/* <Input
                    type={'password'}
                    name={'passwordRegister'}
                    placeholder={'رمز عبور'}
                    changed={this.changedHandler}
                    error={this.state.passwordErrorRegister}
                    autocomplete="off"
                    vla={this.state.passwordRegister}
                /> */}

                <div className="password-container">
                    <img src={iconPassword}  className="login-input-icon"/>
                    <input 
                        className="login-input" 
                        id="passwordRegister" 
                        name="passwordRegister"  
                        type="password" 
                        value={this.state.passwordRegister} 
                        onChange={this.changedHandler} 
                        placeholder="رمز عبور"
                        maxLength="12"
                    />
                </div>
                <div className="password-container">
                    <img src={iconPassword}  className="login-input-icon"/>
                    <input 
                        className="login-input" 
                        id="passwordRegisterTwo" 
                        name="passwordRegisterTwo"  
                        type="password" 
                        value={this.state.passwordRegisterTwo} 
                        onChange={this.changedHandler} 
                        placeholder="تکرار رمز عبور"
                        maxLength="12"
                        onKeyPress={this.enterPressed}
                    />
                </div>

 
                <br/>
                <Button
                    isLoading={this.state.isLoadingRegister}
                    title={'ثبت نام'}
                    bgcolor={'#2d9cdb'}
                    hoverbgcolor={'#2d9cdb'}
                    click={this._onClickRegister}
                    borderRadius="100px"
                    color="#fff"
                    width="100%"
                />

            </div>
        )


        return (
            <div className="cover">
                       <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.errorMessage}
                            onConfirm={() => this.setState({show: false})}
                        />
                 <div ref={this.Modal} className="modal-fff fadeInDown">
                     <div className="close-modal"  onClick={() => this._actionModal('close')}></div>
                    <div className="forget-password-form">
                        <h3>بازیابی کلمه عبور</h3>
                        <p>جهت بازیابی کلمه عبور ، لطفا پست الکترونیک خود را وارد نمایید</p>
                        < br />
                        <div className="password-container">
                            <img src={iconEmail}  className="login-input-icon"/>
                            <input 
                                className="login-input" 
                                id="emailForget" 
                                name="emailForget"  
                                type="text" 
                                value={this.state.emailForget} 
                                onChange={this.changedHandler} 
                                placeholder="پست الکترونیک"
                            /> 
                        </div>
                                
                        <br/>
                            <Button
                                isLoading={this.state.isLoadingRegister}
                                title={'بازیابی رمز عبور'}
                                bgcolor={'#2d9cdb'}
                                hoverbgcolor={'#2d9cdb'}
                                click={this.forgetpassword}
                                borderRadius="100px"
                                color="#fff"
                                width="100%"
                            />
                    </div>
                 </div>
        
                <a href="http://www.vishar.com">
                    <img src={logo} className="login-logo" alt="لوگو"/>
                </a>
                <div className="login-container">
                    <div className="login-header">
                        <div id="register" className={"col-50 login-header-item " }  onClick={() => this._opentabs('login')}>ثبت نام
                        </div>
                        <div id="login" className={"col-50 login-header-item "  } onClick={() => this._opentabs('register')}>ورود</div>
                    </div>

                    {/* {this.state.type !== 'login' ?    :} */}

                    {_renderRegister}
                    {_renderLogin}

         
                </div>


            </div>
        );
    }
}

export default LoginComponent;