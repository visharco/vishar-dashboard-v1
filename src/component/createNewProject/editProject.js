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
                    <div className="CNP-project-title">
                        <h2>عنوان پروژه</h2>
                        <Input
                            type={'text'}
                            name={'title'}
                            placeholder={'عنوان پروژه '}
                            changed={this.changedHandler}
                            error={this.state.errorTitle}
                            val={this.state.title}
                        />
                    </div>

                    <div className="CNP-project-title">
                        <h2>اطلاعات مربوط به پروژه</h2>
                        <TextArea
                            type={'text'}
                            name={'description'}
                            placeholder={'اطلاعات مربوط به پروژه'}
                            changed={this.changedHandler}
                            error={this.state.errorDescription}
                            val={this.state.description}
                        />
                    </div>

                    <div className="CNP-project-title">
                        <h2>اطلاعات مربوط به طراح</h2>
                        <TextArea
                            type={'text'}
                            name={'otherDescription'}
                            placeholder={'اطلاعات که طراح باید بداند'}
                            changed={this.changedHandler}
                            error={this.state.errorOtherDescription}
                            val={this.state.otherDescription}
                        />
                    </div> 
                </div>
            </div>
         );
    }
}
 
export default EditPRojectComponent;