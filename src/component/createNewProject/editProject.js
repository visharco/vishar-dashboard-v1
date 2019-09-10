import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import Input from './../common/input/Input'
import Button from '../../component/common/Button/Button';
import TextArea from '../common/textarea/textarea' 
import PostToApii from '../../controler/postToApi';
import LoadingComponent from '../loading/loadingComponent';
import GetToApi from '../../controler/getToApi';
import { browserHistory } from 'react-router';

import './style.css';


class EditPRojectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount = async() => {
        let id = window.location.pathname.split('/')[2]
        const res = await GetToApi('projects/'+ id);  
        await this.setState({
            projectId: id ,
            data:res.data ,
            title:res.data.title ,
            description:res.data.desc ,
            otherDescription:res.data.desc_more ,

        }) 
    }
    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //
    // Save action -------------------------------------------------------------------------------
    _CallSave = async() => {
        const data = new FormData();
        data.append('title',this.state.title);
        data.append('desc',this.state.description);
        data.append('desc_more',this.state.otherDescription);
        
        const res = await PostToApii(data, 'projects/update/' + this.state.projectId);
        if(res.status === 200 ){
            // this.setState({
            //     show: true,
            //     errorMessage:'تغیرات با موفقیت ذخیره شد'
            // });
            browserHistory.push('/projectDetail/' + this.state.projectId)
        } else{
            this.setState({
                show: true,
                errorMessage:res.error
            })
        }
    }
    render() { 
        return ( 
            <div className="CreateNewProject">
               
               <SweetAlert
                    show={this.state.show}
                    title=""
                    text={this.state.errorMessage}
                    onConfirm={() => this.setState({show: false})}
                />

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

                    <div className="PE-btns" >
                            <div className="PE-cancel" >
                                انصراف
                            </div>
                            <Button
                                isLoading={this.state.isLoading}
                                title={'ذخیره'}
                                bgcolor={'#0080FF'}
                                hoverbgcolor={'#rgb(160, 160, 160)'}
                                click={this._CallSave}
                                borderRadius="30px"
                                color="#fff"
                            />
                        </div>


                </div>
            </div>
         );
    }
}
 
export default EditPRojectComponent;