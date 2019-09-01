import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect, Switch } from 'react-router';

import Token from './api/token';


// import RootComponent from './root';
import RootScreen from './root';
import RootLooginScreen from './rootLogin';
import LoginScreen from './container/auth/login/login';
import RegisterScreen from './container/auth/register/register';
import ForgetPasswordScreen from './container/auth/forgetPassword/forgetPassword';
import DashboardComponent from './container/dashboard/dashboard';
import ProfileScreen from './component/profile/profile';
import PaymentsScreen from './component/payments/payments';
import SingleProjectScreen from './component/singleProject/singleProject'
import CollaborateProjectScreen from './component/collaborateProject/collaborateProject';
import ProjectDetailScreen from './component/projectDetail/projectDetail';
import CreateNewProjectScreen from './component/createNewProject/createNewProject';
import NotificationScreen from './component/notification/notification';
import MessageScreen from './component/Message/Message';
import ChatBoxScreen from './component/ChatBox/ChatBox';
import successPaymentScreen from './component/createNewProject/successPayment/successPayment';
import faildPaymentScreen from './component/createNewProject/faildPayment/faildPayment';


import DesignerProfileScreen from './component/Designer/DesignerProfile/DesignerProfile'
import DesignerWalletScreen from './component/Designer/DesignerWallet/DesignerWallet'
import DesignerSingleProjectScreen from './component/Designer/DesignerSingleProject/DesignerSingleProject'
import DesignerCollaborateProjectScreen from './component/Designer/DesignerCollaborateProject/DesignerCollaborateProject'
import DesignerProjectDetailScreen from './component/Designer/DesignerProjectDetail/DesignerProjectDetail'
import DesignerMessageScreen from './component/Designer/DesignerMessage/DesignerMessage'
import DesignerChatBoxScreen from './component/Designer/DesignerChatBox/DesignerChatBox'
import DesignerPaymentsScreen from './component/Designer/DesignerPayments/DesignerPayments'
import SubmitDesignScreen from './component/Designer/SubmitDesign/SubmitDesign'
import DesignerPorfolioScreen from './component/Designer/DesignerPorfolio/DesignerPorfolio'
import DesignerLogoesScreen from './component/Designer/DesignerLogoes/DesignerLogoes'
import AllProjectScreen from './component/Designer/allProjects/allProjectsComponent'


import NotFoundScreen from './container/notFound/notFound';





class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Router history={browserHistory}>
                {/* <Route path="/login" component={LoginScreen} ></Route>
                <Route path="/register" component={RegisterScreen} ></Route>
                <Route path="forgetPassword" component={ForgetPasswordScreen} ></Route> */}

               

                                <Route path="/" component={RootLooginScreen} >
                                        <IndexRoute component={LoginScreen} />                               
                                        <Route path="/login" component={LoginScreen} ></Route>
                                        <Route path="/register" component={RegisterScreen} ></Route>
                                        <Route path="forgetPassword" component={ForgetPasswordScreen} ></Route>
                                </Route>  



                             <Route path="/" component={RootScreen} >

                                <IndexRoute component={DashboardComponent} />
         
                                <Route path="dashboard" component={DashboardComponent} />
                                <Route path="register" component={RegisterScreen} />
                                <Route path="profile" component={ProfileScreen} />
                                <Route path="payments" component={PaymentsScreen} />
                                <Route path="singleProject" component={SingleProjectScreen} />
                                <Route path="collaborateProject" component={CollaborateProjectScreen} />
                                <Route path="projectDetail/:id" component={ProjectDetailScreen} />
                                <Route path="createNewProject" component={CreateNewProjectScreen} />
                                <Route path="notification" component={NotificationScreen} />
                                <Route path="message" component={MessageScreen} />
                                <Route path="chatBox" component={ChatBoxScreen} />
                                <Route path="/success-payment" component={successPaymentScreen} />
                                <Route path="faild-payment" component={faildPaymentScreen} />
                        
                            
        
                                <Route path="DesignerProfile" component={DesignerProfileScreen} />
                                <Route path="DesignerWallet" component={DesignerWalletScreen} />
                                <Route path="DesignerSingleProject" component={DesignerSingleProjectScreen} />
                                <Route path="DesignerCollaborateProject" component={DesignerCollaborateProjectScreen} />
                                <Route path="DesignerProjectDetail/:id" component={DesignerProjectDetailScreen} />
                                <Route path="DesignerMessage" component={DesignerMessageScreen} />
                                <Route path="DesignerChatBox" component={DesignerChatBoxScreen} />
                                <Route path="DesignerPayments" component={DesignerPaymentsScreen} />
                                <Route path="SubmitDesigne/:id" component={SubmitDesignScreen} /> 
                                <Route path="DesignerPorfolio" component={DesignerPorfolioScreen} /> 
                                <Route path="DesignerLogoes" component={DesignerLogoesScreen} /> 
                                <Route path="all-projects" component={AllProjectScreen} /> 
                                
                               
                                <Route path='*' exact={true} component={NotFoundScreen} />
     
                            </Route> 
                                       
                                     
                             
                                
                               



            </Router>
        );
    }
}

export default RouterComponent;