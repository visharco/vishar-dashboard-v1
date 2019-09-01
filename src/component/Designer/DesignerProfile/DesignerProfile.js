import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
//
//
//

import usergrey from '../../../assets/icons/usergrey.svg';
import Input from '../../common/input/Input';
import TextArea from '../../common/textarea/textarea'
import Button from '../../common/Button/Button';
import EnglishChecker from '../../../component/EnglishChecker/EnglishChecker'
import MessageBox from '../../StatusMessage/StatusMessage'
import LoadingComponent from '../../loading/loadingComponent';

//
//compoents
//
import GetApi from '../../../controler/getToApi';
import PostToApi from '../../../controler/postToApi';



import './style.css';
import StatusMessage from '../../StatusMessage/StatusMessage';


class DesignerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingGetData: true,
            name: '',
            email: '',
            phone: '',
            tell: '',
            city: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            tellError: '',
            cityError: '',
            selectedFile: '',
            successMessage:'',
            experienceError:'',
            summaryError:'',
            experience:'',
            summary:'',
            cart_number:'',
            name_cart_number:'',
            bank_name:'', 
            image:usergrey

        }
    }

    accountBox = React.createRef();
    profileBox = React.createRef();

    account = React.createRef();
    profile = React.createRef();

    componentWillMount = async() => {

        const res = await GetApi('profile/init');
        const resBanck = await GetApi('profile/init/bank'); 
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            tell: res.data.tell,
            city: res.data.city,
            isLoadingGetData: false,
            image: res.data.image,
            summary:res.data.summary,
            experience: res.data.experience,
            cart_number: resBanck.data.cart_number,
            name_cart_number:resBanck.data.name_cart_number,
            bank_name:resBanck.data.bank_name
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
    // update data user information for dewsginer -*-------------------->
    //
    _CallSave = async () => {
        this.setState({
            isLoading: true
        })

        this.setState({
            nameError: '',
            emailError: '',
            phoneError: '',
            tellError: '',
            cityError: '',
            experienceError:'',
            summaryError:''

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
        data.append('summary', this.state.summary);
        data.append('experience', this.state.experience);
        if(this.state.selectedFile)
            data.append('image', this.state.selectedFile, this.state.selectedFile.name )


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

        // tell validation        
        if (isNaN(this.state.tell) === true) {
            this.setState({
                tellError: 'شماره موبایل باید فقط شامل عدد  انگلیسی باشد ',
            })
        }


        const res = await PostToApi(data, 'profile/update');
        

        if(res.status === 200){
            this.setState({
                show: true,
                alertMessage: 'کاربر گرامی،اطلاعات با موفقیت ذخیره شد',
                isLoading: false
            })
        }else{
            this.setState({
                show: true,
                alertMessage: res.error,
                isLoading: false  
            })
        }


        this.setState({
            isLoading: false
        })
    }


    //
    // -------------------------- Bank Save ------------------------------------------------------?
    //

    saveBanck = async () => {
        this.setState({
            isLoading: true
        })

        this.setState({
            nameError: '',
            emailError: '',
            phoneError: '',
            tellError: '',
            cityError: '',
            experienceError:'',
            summaryError:''

        });

          //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();

        data.append('cart_number', this.state.cart_number);
        data.append('name_cart_number', this.state.name_cart_number);
        data.append('bank_name', this.state.bank_name); 



        const res = await PostToApi(data, 'profile/update/bank');
        // // console.log(res);

        if(res.status === 200){
            this.setState({
                show: true,
                alertMessage: 'کاربر گرامی،اطلاعات با موفقیت ذخیره شد',
                isLoading: false
            })
        }else {
            this.setState({
                show: true,
                alertMessage: res.error,
                isLoading: false
            })
        }


        this.setState({
            isLoading: false
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


    descriptionHandler = (e) => {

        if (e.target.id === 'account') {
            this.accountBox.current.style.display = 'flex'
            this.profileBox.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.profile.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'profile') {
            this.profileBox.current.style.display = 'flex'
            this.accountBox.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.account.current.style.backgroundColor = "#f1f1f1"
        }

    }

    render() {
        return (
            <div className="DesignerProfile">
                  <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.alertMessage}
                            onConfirm={() => this.setState({show: false})}
                        />
                <div className="DPE-title" >
                    پروفایل
                </div>
                <div className="DPE-desc-up" >
                    <div className="DPE-desc-box">
                        <div className="DPE-desc-title" onClick={this.descriptionHandler} id="profile" ref={this.profile} >پروفایل
                        </div>
                        <div className="DPE-desc-title" onClick={this.descriptionHandler} id="account" ref={this.account}>حساب بانکی
                        </div>
                    </div>

                </div>
                <div className="DPE-desc-down" > 

                    <div className="DPE-desc-box2" >

                        <div className="DPE-account" ref={this.accountBox}>
                            <div>
                                <StatusMessage
                                    type="warning"
                                    text='کاربر گرامی ، جهت واریز نمودن وجه به شما ، وارد نمودن اطلاعات حساب بانکی الزامی باشد'
                                />
                            </div>

                            <div>
                            <div className="DPEA-desc-text" >
                                <div className="DPE-inputs" >
                                    <Input
                                        type={'text'}
                                        name={'cart_number'}
                                        placeholder={'شماره کارت'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                        val={this.state.cart_number}
                                    />
                                    <div className="sample-card" >XXXX - XXXX - XXXX - XXXX</div>
                                    <Input
                                        type={'text'}
                                        name={'name_cart_number'}
                                        placeholder={'نام و نام خانوادگی صاحب حساب'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                        val={this.state.name_cart_number}
                                    />
                                    <Input
                                        type={'text'}
                                        name={'bank_name'}
                                        placeholder={' نام بانک'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                        val={this.state.bank_name}
                                    />

                             
                                    
                                    <div className="DPE-btns" >
                                        <div className="DPE-cancel" >
                                            انصراف
                                        </div>
                                        <Button
                                            isLoading={this.state.isLoading}
                                            title={'ذخیره'}
                                            bgcolor={'#0080FF'}
                                            hoverbgcolor={'#rgb(160, 160, 160)'}
                                            click={this.saveBanck}
                                            borderRadius="30px"
                                            color="#fff"
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="DPE-profile " ref={this.profileBox} >
                            <div className="DPE-inputs" >
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
                                    placeholder={' موبایل'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError}
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

                                <TextArea 
                                    type={'text'} 
                                    name={'summary'}
                                    placeholder={'درباره من'}
                                    changed={this.changedHandler}
                                    error={this.state.summaryError}
                                    val={this.state.summary}
                                />



                                <TextArea 
                                    type={'text'} 
                                    name={'experience'}
                                    placeholder={'تجربیات من'}
                                    changed={this.changedHandler}
                                    error={this.state.experienceError}
                                    val={this.state.experience}
                                />



                                <div className="DPE-btns" >
                                    <div className="DPE-cancel" >
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


                </div>

            </div>
        );
    }
}

export default DesignerProfile;