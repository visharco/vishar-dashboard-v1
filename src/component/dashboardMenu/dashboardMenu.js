import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//
//
//

import userblack from '../../assets/icons/userblack.svg';
import employee from '../../assets/icons/employee.svg';
import employees from '../../assets/icons/employees.svg';
import message from '../../assets/icons/message.svg';
import payment from '../../assets/icons/payment.svg';
import logout from '../../assets/icons/logout.svg';
import user from '../../assets/icons/user.svg';

//
//compoents
//

import GetApi from '../../controler/getToApi';
import defualtAvata from '../../assets/icons/user.svg'
import loadinggif from '../../assets/images/loading-image.gif'


import './style.css';


class DashboardMenu extends Component {
    humberger = React.createRef()


    constructor(props) {
        super(props);
        this.state = {
            openHumberger: false,
            nameFamily:'',
            email:'',
            avatar:loadinggif,
            type:''
        }


        // let self = this
        // let lastScroll = 0;

        // window.onscroll = function () {
        //     let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

        //     if (currentScroll > 0 && lastScroll <= currentScroll) {
        //         lastScroll = currentScroll;
        //         self.humberger.current.style.display = 'none'
        //     } else {
        //         lastScroll = currentScroll; 
        //     }
        // };
    }


    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        const  res = await GetApi('profile/init');
        console.log(res.data)
        if(res.status === 200){
            await this.setState({
                nameFamily:res.data.name,
                email:res.data.email,
                type:res.data.type,
                avatar:res.data.image_thumb || defualtAvata,
            })
        } else if(res.status === 401) {

            localStorage.removeItem('@authorization_vishar');   // remove local storage.
            //  browserHistory.push('/login');      
            window.location.reload();

        }
        


    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        
    }

    DashboardMenu = React.createRef();

    handleScroll = () => {

        if(window.innerWidth > 900){
            if (window.scrollY >= 100 ) {
                this.DashboardMenu.current.style.top = `0px`;
                this.DashboardMenu.current.style.height = `100vh`;
            } else if(window.scrollY < 100) {
                this.DashboardMenu.current.style.top = `80px`;
                this.DashboardMenu.current.style.height = `calc(100vh - 80px)`;
            }

        }
    };


    goTpDashboard = () => {
        browserHistory.push('/dashboard');
    }    
    goToProfile = () => {
        browserHistory.push('/profile');
    }
    goToSingleProject = () => {
        browserHistory.push('/singleProject');
    } 
    gotoCreateProject = () => {
        browserHistory.push('/createNewProject');
    }
    goToCollaborateProject = () => {
        browserHistory.push('/collaborateProject');
    }
    goToMessage = () => {
        browserHistory.push('/Message');
    }

    goToPayments = (e) => {
        browserHistory.push('/payments');
    }

    menuTablet = React.createRef()

    openCloseHumbergerMenu = () =>{
        if(window.innerWidth < 900){

            this.setState((prevState) => {
                return {
                    openHumberger: !prevState.openHumberger
                }
            })
            if (!this.state.openHumberger) {
                this.menuTablet.current.className = 'DB-menuLeft'
                this.DashboardMenu.current.style.backgroundColor = '#000000d4'
                this.DashboardMenu.current.style.width = '100%'
            } else {
                this.menuTablet.current.className = 'DB-menuRight'
                this.DashboardMenu.current.style.backgroundColor = 'unset'
                this.DashboardMenu.current.style.width = 'inherit'
            }
        }
       
    }

    //
    // Log Out Press
    //

    _logOut = () => {

        localStorage.removeItem('@authorization_vishar');   // remove local storage.
        browserHistory.push('/login');                      // Navigate to login page.
        window.location.reload();                           // Refresh Component, to refresh rout.

    }

    render() {
        let line1 = ['line line1']
        let line2 = ['line line2']
        let line3 = ['line line3']
        if (this.state.openHumberger) {
            line1 = ['lineX line1move']
            line2 = ['lineX line2move']
            line3 = ['lineX line3move']
        } else {
            line1 = ['line line1']
            line2 = ['line line2']
            line3 = ['line line3']
        }
        return (
            <div className="DashboardMenu" ref={this.DashboardMenu} onClick={this.openCloseHumbergerMenu}>
                <div className="hamburger"  ref={this.humberger}>
                    <span className={line1.join(' ')}></span>
                    <span className={line2.join(' ')} ></span>
                    <span className={line3.join(' ')} ></span>
                </div>
                <div ref={this.menuTablet} className="DB-menuRight"  >


                    <div >
                        <div className="DM-title" >
                            {/* <img src={this.state.avatar} alt="طراح" /> */}
                            <div className="profile-image-side-menu" style={{backgroundImage:'url(' + this.state.avatar +')'}}></div>
                            <div className="DM-title-name">
                                <h1>{this.state.nameFamily}</h1>
                                <h2>{this.state.email}</h2>
                                <span>{this.state.type === 'customer' ? 'پنل مدیریت مشتری' : 'پنل مدیریت طراح'}</span>
                            </div>
                        </div>
                        <div className="DM-body" >
                            <div className="DM-body-child" onClick={this.goTpDashboard} >
                                <p>داشبورد</p>
                                <i class="fas fa-tachometer-alt"></i>
                            </div>  
                            <div className="DM-body-child" onClick={this.goToProfile} >
                                <p>پروفایل</p>
                                {/* <img src={userblack} alt="کاربر" /> */}
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="DM-body-child" onClick={this.gotoCreateProject} >
                                <p>معرفی پروژه جدید</p>
                                {/* <img src={employee} alt="فردی" /> */}
                                <i class="fas fa-project-diagram"></i>
                            </div>
                            <div className="DM-body-child" onClick={this.goToSingleProject} >
                                <p>پروژه های من</p>
                                {/* <img src={employee} alt="فردی" /> */}
                                <i class="fas fa-layer-group"></i>
                            </div>
                            {/* <div className="DM-body-child" onClick={this.goToCollaborateProject} >
                                <p>پروژه های همکاری</p>
                                <img src={employees} alt="همکاری" />
                            </div> */}
                            {/* <div className="DM-body-child" onClick={this.goToMessage} >
                                <p>پیامها</p>
                                <img src={message} alt="پیام ها" />
                            </div> */}
                            <div className="DM-body-child" onClick={this.goToPayments} >
                                <p>تراکنشها</p>
                                {/* <img src={payment} alt="تراکنش" /> */}
                                <i class="fas fa-file-invoice-dollar"></i>

                            </div>

                        </div>
                    </div>

                    <div className="logout"  onClick={this._logOut}  >
                        <p>
                            <span>خروج</span>
                            <img src={logout} alt="خروج" />
                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardMenu;