import React, { Component } from 'react';

//
// Internal Component
//

import Input from '../../component/common/input/Input';
import Button from '../../component/common/Button/Button';
import EnglishChecker from '../../component/EnglishChecker/EnglishChecker'
import SweetAlert from 'sweetalert-react'
//
// ّIcons -------------------->
//
import usergrey from '../../assets/icons/usergrey.svg';

//
// Controler-------------------->
//

import GetToApi from '../../controler/getToApi';
import PostToApi from '../../controler/postToApi';
import Token from '../../api/token';
import LoadingComponent from '../loading/loadingComponent';
import MessageBox from '../../component/StatusMessage/StatusMessage'


import './style.css';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingGetData: true,
            name: '',
            email: ' ',
            phone: ' ',
            tell: ' ',
            city: ' ',
            nameError: '',
            emailError: '',
            phoneError: '',
            tellError: '',
            cityError: '',
            selectedFile: '',
            successMessage:'',
            showImageForUpload: usergrey

        }
    }




    componentDidMount = async () => {
        //
        // get data from API for showing to user ------------------------------->
        //
        const res = await GetToApi('profile/init');
        // console.log(res)
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            tell: res.data.tell,
            city: res.data.city,
            isLoadingGetData: false,
            image: res.data.image,
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
    //  get image uploader for avatar of user ----------------------------------------------------------->
    //
    _uploadPicture = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            showImageForUpload:URL.createObjectURL(e.target.files[0])
        })
        // console.log(e.target.files[0])
    }


    _CallSave = async () => {
        this.setState({
            isLoading: true
        })

        this.setState({
            nameError: '',
            emailError: '',
            phoneError: '',
            tellError: '',
            cityError: ''
        })

        //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();

        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('mobile', this.state.phone);
        data.append('tell', this.state.tell);
        data.append('city', this.state.city);
        data.append('image', this.state.selectedFile, this.state.selectedFile.name || '')


        // name validation
        if (this.state.name === '') {
            this.setState({
                nameError: 'نام و نام خانوادگی را وارد نکرده اید',
            })
        } else if (EnglishChecker(this.state.name) === true) {
            this.setState({
                nameError: 'نام و نام خانوادگی را به صورت فارسی بنویسید',
            })
        }

        // phone validation
        if (isNaN(this.state.phone) === true) {
            this.setState({
                phoneError: 'شماره موبایل باید فقط شامل عدد انگلیسی باشد ',
            })
        }

      


        const res = await PostToApi(data, 'profile/update');
        // console.log(res);

        if(res.status === 200){
            this.setState({
                show:true,
                errorMessage:'تغیرات با موفقیت ذخیره شده است.'
            })
        }


        this.setState({
            isLoading: false
        })
    }




    render() {
        return (
            <div className="Profile">
                       <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.errorMessage}
                            onConfirm={() => this.setState({show: false})}
                        />
                        
                {this.state.isLoadingGetData ? <LoadingComponent /> : ''}
                <div className="PE-title" >
                    پروفایل
                </div>
                <MessageBox type="success" 
                            text={this.state.successMessage}
                />
                <div className="PE-body" >

                    <div className="PE-inputs" >
                        <Input
                            type={'text'}
                            name={'name'}
                            placeholder={'نام و نام خانوادگی'}
                            changed={this.changedHandler}
                            error={this.state.nameError}
                            val={this.state.name}
                        />
                        <Input
                            type={'text'}
                            name={'email'}
                            placeholder={'ایمیل'}
                            changed={this.changedHandler}
                            error={this.state.emailError}
                            val={this.state.email}
                            readonly={true}
                        />
                        <Input
                            type={'number'}
                            name={'phone'}
                            placeholder={' تلفن همراه'}
                            changed={this.changedHandler}
                            error={this.state.phoneError}
                            val={this.state.phone}
                        />
                        <Input
                            type={'number'}
                            name={'tell'}
                            placeholder={'تلفن'}
                            changed={this.changedHandler}
                            error={this.state.tellError}
                            val={this.state.tell}
                        />
                        <Input
                            type={'text'}
                            name={'city'}
                            placeholder={'شهر / مکان'}
                            changed={this.changedHandler}
                            error={this.state.cityError}
                            val={this.state.city}
                        />
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
                    <div className="PE-upload" >
                        <h1>عکس پروفایل</h1>
                        <input className="PE-input" type="file" accept="image/*"
                            onChange={this._uploadPicture}
                            name="profilepicture"
                            value="" />

                        <div className="PU-img" >
                            {
                                !this.state.selectedFile ?
                                <img className="showImageForUpload" src={this.state.image} alt="کاربر" /> :
                                <img className="showImageForUpload"  src={this.state.showImageForUpload} alt="کاربر" />
                            }

                            
                        </div>
                        <p className="PU-text" >
                            برای آپلود عکس کلیک کنید یا عکس را رها کنید
                        </p>

                    </div>

                </div>
            </div>
        );
    }
}

export default Profile;