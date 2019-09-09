import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import Input from './../common/input/Input'
import TextArea from '../common/textarea/textarea'
import GetToApi from '../../controler/getToApi';
import PostToApii from '../../controler/postToApi';
import LoadingComponent from '../loading/loadingComponent';


import './style.css';


class EditPRojectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="CreateNewProject">
               
                {this.state.isLoadingGetData ? <LoadingComponent/> : ''}
                <div className="PE-title" >
                    ویرایش پروژه
                </div>
                <div className="card-container">
                    <h1>hwlloooo</h1>
                </div>
            </div>
         );
    }
}
 
export default EditPRojectComponent;