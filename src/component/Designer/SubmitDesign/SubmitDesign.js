import React, {Component} from 'react';
import SweetAlert from 'sweetalert-react';
import PostToApi from '../../../controler/postToApi';
import LoadingComponent from '../../loading/loadingComponent';
import axios from './axios';  // set base URL from axios --->
import Token from '../../../api/token'
//
//
//

import gallery from '../../../assets/icons/cover.png';
import psd from '../../../assets/icons/psd.svg';
import psdOk from '../../../assets/icons/psd-ok.svg';
import tiff from '../../../assets/icons/tiff.svg';
import tiffOk from '../../../assets/icons/tif-ok.svg';
import zip from '../../../assets/icons/zip.svg';
import zipOk from '../../../assets/icons/zip-ok.svg';
import tikgreen from '../../../assets/icons/tikgreen.svg';

//
//compoents
//


import './style.css';
import StatusMessage from '../../StatusMessage/StatusMessage';
import TextArea from '../../common/textarea/textarea';
import Button from '../../common/Button/Button';
import DesignerExample from '../DesignerExample/DesignerExample';


class SubmitDesign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitDesignSuccess: false,
            designerExample: false,
            cover: [],
            projectId: 0,
            submitDescription: '',
            isLoadingGetData: false,
            psd: '',
            tiff: '',
            zip: '',
            progressPercent: 0,
        }
    }


    componentWillMount = async () => {
        // // console.log(window.location.pathname.split('/')[2]);
        let id = window.location.pathname.split('/')[2]
        // console.log(id);
        this.setState({
            projectId: id
        })

        // const res = await GetToApi('site/projects/' + id);
        // await this.setState({
        //     projectId: id,
        //     data: res.data
        // });
        // // console.log(res.data)


    }

    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    goBack = () => {

        window.location = "/DesignerSingleProject"

    }


    // success submit files
    submitDesign = async ( ) => { 

        // console.log(this.state.cover.length)

        this.setState({
            isLoadingGetData: true
        })
        //
        // provider data for API --------------------------------------------------------------->
        //
        const data = new FormData();


        data.append('project_id', this.state.projectId);
        data.append('desc', this.state.submitDescription);
        data.append('image', this.state.cover, this.state.cover.name || '')
        // data.append('psd', this.state.psd, this.state.psd.name || '')
        // data.append('tif', this.state.tiff, this.state.tiff.name || '');
        data.append('compress', this.state.zip, this.state.zip.name || '');


        let validation = true;

        if (this.state.cover.length === 0) {
            validation = false;
            this.setState({
                isLoadingGetData: false,
                show: true,
                errorMessage: 'لطفا فایل کاور را وارد نمایید'
            })

        } else if (this.state.zip.length === 0) {
            validation = false;
            this.setState({
                isLoadingGetData: false,
                show: true,
                errorMessage: 'لطفا فایل زیپ  را وارد نمایید',
               
            })
        } 
        // else if (this.state.psd.length === 0) {
        //     validation = false;
        //     this.setState({
        //         show: true,
        //         errorMessage: 'لطفا فایل پی اس دی  را وارد نمایید',
        //         isLoadingGetData: false
        //     })
        // }
 
       


        if (validation === true) {
 
        await axios({
                method: 'post',
                url: 'projects/design',
                data: data,
                headers: {
                    // "Content-Type": "application/json",
                    "Accept": "application/json",
                    "agent" : "web" ,
                    "Authorization" : Token  
                },

                onUploadProgress: progressBar => {
                    let progressPercent = Math.round(progressBar.loaded / progressBar.total * 100)
                    this.setState({
                        progressPercent : progressPercent
                    })
                    // if(progressPercent === 100){
                    //     this.setState({
                    //         isLoadingGetData: false,
                    //         submitDesignSuccess: true
                    //     })
                    // }
                }
            })
                .then(res => {
                    // console.log(res)
    
                    if (res.status === 200)
                        this.setState({
                            isLoadingGetData: false,
                            submitDesignSuccess: true
                        })
                    else {
                        this.setState({
                            show: true,
                            isLoadingGetData: false,
                            errorMessage: res.error
                        })
                    }
                })
                .catch(err => {
                 // console.log(err)
                })
    
    

            // const res = await PostToApi(data, 'projects/design');
            // // console.log(res);
            // if (res.status === 200)
            //     this.setState({
            //         isLoadingGetData: false,
            //         submitDesignSuccess: true
            //     })
            // else {
            //     this.setState({
            //         show: true,
            //         isLoadingGetData: false,
            //         errorMessage: res.error
            //     })
            // }
        }
        // this.setState({
        //     isLoadingGetData: false,
        // })


        // console.log(this.state.progressPercent)
    }


    openModalDesignerExample = () => {
        this.setState({designerExample: true})
    }

    closeModalProject = () => {
        this.setState({designerExample: false})
    }

    _uploadPicture = (e) => {
        // console.log(e.target.name)

        this.setState({
            selectedFile: e.target.files[0],
            [e.target.name]: e.target.files[0]
            // [e.target.name]:URL.createObjectURL(e.target.files[0])
        })


        // console.log(e.target.files[0])
        // console.log(this.state.tiff)
    }


    render() {
        return (
            <div className="SubmitDesign">
                {this.state.isLoadingGetData ? <LoadingComponent progress={this.state.progressPercent + '%'}/> : ''}
                {this.state.designerExample ? <DesignerExample closeProject={this.closeModalProject}/> : ''}

                {
                    !this.state.submitDesignSuccess ?
                        <div className="SD-action-page" ref={this.SDActionPage}>

                            <SweetAlert
                                show={this.state.show}
                                title=""
                                text={this.state.errorMessage}
                                onConfirm={() => this.setState({show: false})}
                            />


                            <div className="SD-title">
                                ثبت طرح
                            </div>
                            <StatusMessage
                                type="warning"
                                text="لطفا توجه داشته باشید، جهت ثبت طرح خود شما تنها می توانید یک طرح را برای مشتری ارسال نماید. در صورتی که طرح های بیشتری طراحی نموده اید ، هر کدام را جداگانه ارسال نمایید."
                            />
                            <div className="SD-body">
                                <div className="SD-cover-image">
                                    <div className="SDC-title">
                                        <h1>کاور عکس</h1>
                                        <p>لطفا تصویر کاور خود را با پسوند JPG ذخیره کنید</p>
                                        <p>
                                            <span>برای داشتن شانس بیشتر لطفا از کاور حرفه ای و زیبا برای ارائه به مشتری استفاده نماید.</span>
                                            <span className="SDUF-link" onClick={this.openModalDesignerExample}> مشاهده نمونه کاور</span>
                                        </p>


                                    </div>

                                    <label htmlFor="cover" className="SDC-upload">
                                        <h1>آپلود فایل</h1>
                                        <input type="file" accept=".png,.jpg,.jpeg"
                                               onChange={this._uploadPicture}
                                               name="cover"
                                               id="cover"
                                               value=""/>
                                        <div className="SDC-img">
                                            <img
                                                src={this.state.cover.length === 0 ? gallery : URL.createObjectURL(this.state.cover)}
                                                alt="کاربر"/>
                                        </div>
                                        <p className="SDC-text">
                                            برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                        </p>

                                    </label>
                                </div>
                                <div className="SD-upload-files">
                                    <div className="SDUF-up">
                                        <div className="SDUF-left">
                                            <h1>آپلود فایل</h1>
                                            <h3>لطفا تمام فایل های مورد نیاز خود را به صورت فایل فشرده بارگذاری نمایید.</h3>
                                            <p>فایل های بارگذاری شده ، پس از برسی تیم ویشار برای مشتری ارسال می گردد</p>
                                        </div>

                                    </div>
                                    <div className="SDUF-down">
                                        <label htmlFor="zip" className="SDC-upload">
                                            <h1>آپلود فایل</h1>
                                            <input type="file" accept=".zip,.rar"
                                                   onChange={this._uploadPicture}
                                                   name="zip"
                                                   id="zip"
                                                   value=""/>
                                            <div className="SDUF-img">
                                                <img src={!this.state.zip ? zip : zipOk} alt="کاربر"/>
                                            </div>
                                            <p className="SDUF-text">
                                                برای آپلود فایل کلیک کنید یا فایل را رها کنید
                                            </p>
                                        </label>

                                        {/* <label htmlFor="psd" className="SDUF-upload">
                                            <h1>آپلود عکس</h1>
                                            <input type="file" accept=".psd"
                                                   onChange={this._uploadPicture}
                                                   name="psd"
                                                   id="psd"
                                                   value=""/>
                                            <div className="SDUF-img">
                                                <img src={!this.state.psd ? psd : psdOk} alt="کاربر"/>
                                            </div>
                                            <p className="SDUF-text">
                                                برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                            </p>
                                        </label> */}



                                        {/* <label htmlFor="tiff" className="SDUF-upload">
                                            <h1>آپلود عکس</h1>
                                            <input type="file" accept=".tif,.tiff"
                                                   onChange={this._uploadPicture}
                                                   name="tiff"
                                                   id="tiff"
                                                   value=""/>

                                            <div className="SDUF-img">
                                                <img src={!this.state.tiff ? tiff : tiffOk } alt="کاربر"/>
                                            </div>
                                            <p className="SDUF-text">
                                                برای آپلود عکس کلیک کنید یا عکس را رها کنید
                                            </p>
                                        </label> */}
                                    </div>
                                </div>
                                <div className="SD-desc">
                                    <h1>توضیحات</h1>
                                    <p>در صورتی که نیاز به توضیحات برای ارائه طرح خود به مشتری می باشید در این قسمت وارد
                                        نمایید</p>
                                    <TextArea
                                        type={'text'}
                                        name={'submitDescription'}
                                        placeholder={'توضیح خود را بنویسید ...'}
                                        changed={this.changedHandler}
                                        error={this.state.submitDescriptionError}
                                    />

                                </div>
                                <div className="SD-action">
                                    <Button
                                        isLoading={this.state.isLoading}
                                        title={'ثبت طرح'}
                                        bgcolor={'#0080FF'}
                                        hoverbgcolor={'rgb(0, 128, 255)'}
                                        click={this.submitDesign}
                                        borderRadius="5px"
                                        color="#fff"
                                        id={'1'}
                                    />
                                </div>
                            </div>
                        </div> :
                        <div className="SD-success-page" ref={this.SDSuccesPage}>
                            <div className="SDS-right">
                                <img src={tikgreen} alt=""/>
                                <div className="SDS-right-text">
                                    <h1>آپلود موفق</h1>
                                    <p>فایل های شما با موفقیت آپلود شدند</p>
                                </div>
                            </div>
                            <Button
                                isLoading={this.state.isLoading}
                                title={'بازگشت'}
                                bgcolor={'#EEE'}
                                hoverbgcolor={'#fff'}
                                click={this.goBack}
                                borderRadius="30px"
                                color="#a4a4a4"
                                id={'1'}
                            />
                        </div>
                }


            </div>
        );
    }
}

export default SubmitDesign;