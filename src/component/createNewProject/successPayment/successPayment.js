import React , { Component } from 'react';
import { Link } from 'react-router';
import Button from '../../common/Button/Button';


import './style.css';

//
//
//
import imgSuccess from '../../../assets/images/success.png'



class SuccessPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="CreateNewProject">
                     <div className="container">
                        <div className="success-payment-container">
                            <img src={imgSuccess} alt="success" style={{width:'150px'}} />
                            <h1>کاربر گرامی ، پرداخت با موفقیت انجام شد.</h1>
                            <Link to="/singleProject" >
                            <Button                                                                  
                                isLoading={this.state.isLoading}                                    
                                title={'بازگشت'}                                                      
                                bgcolor={'#0080FF'}                                                 
                                hoverbgcolor={'#0080FF'}                                          
                                click={this.callSubmit}
                                borderRadius="10px"
                                color="#fff"
                                id={'1'}
                            />  
                            </Link>
                        </div>
                     </div>
                </div>

            </div>
         );
    }
}
 
export default SuccessPayment;