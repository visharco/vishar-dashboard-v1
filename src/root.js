// import React, {Component} from 'react';
// // import {browserHistory } from 'react-router'
//  import Header from "./component/header/header";
// //  import Footer from "./component/footer/footer";
 
 
// export default class Root extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

  

    
  

//     render() { 
//         return ( 
//             <div>
//                 <Header />
//                 <div> 
                    
//                     { this.props.children}
//                 </div>
//                 {/* <Footer /> */}
              
//             </div>
//          );
//     }
// }
 










import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import GetApi from './controler/getToApi';


 
import DashboardMenu from './component/dashboardMenu/dashboardMenu';
import HeaderComponent from './component/header/header';
import DesignerDashboardMenu from './component/Designer/DesignerDashboardMenu/DesignerDashboardMenu';
import LoadingComponent from './component/loading/loadingComponent';


class RootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            isLoading: true
        }
    }

    componentWillMount = async() => {
        try {
            const res = await GetApi('profile/init');
            if(res.status === 200)
                await this.setState({
                  
                    userInfo: res.data,
                    isLoading: false,
                    
                })
            else if(res.status === 400 || res.status === 401)
               {
                localStorage.removeItem('@authorization_vishar');   // remove local storage.
                browserHistory.push('/login')
               }
        } catch (error) {
            
            
        }

    }



    render() {

      

        return (
            <div className="container-fluid" >
               
               {this.state.isLoading === true ?  <LoadingComponent /> : ''}
               <HeaderComponent />
                <div className="dashboard" >

                    
                        <div className="container" >
                            <div className="dashboard-left" >
                                {this.props.children}
                            </div>
                            <div className="dashboard-right" >
                            {this.state.userInfo.type ==='customer' ?  <DashboardMenu /> :   <DesignerDashboardMenu data={this.state.userInfo} />}
                               
                   
                                
                            </div>




                        </div>
                   
                </div>
            </div>
        );
    }
}

export default RootComponent;