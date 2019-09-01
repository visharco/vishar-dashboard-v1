import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Dropzone from 'react-dropzone';
import StatusMessage from '../../component/StatusMessage/StatusMessage';
import SweetAlert from 'sweetalert-react';
import '../../../node_modules/sweetalert/dist/sweetalert.css';
import PriceDigit from '../../component/priceDigit/priceDigit';

//
//
//
import color1 from '../../assets/images/color1.png'
import color2 from '../../assets/images/color2.png'
import color3 from '../../assets/images/color3.png'
import color4 from '../../assets/images/color4.png'
import color5 from '../../assets/images/color5.png'
import color6 from '../../assets/images/color6.png'
import color7 from '../../assets/images/color7.png'
import color8 from '../../assets/images/color8.png'
import font from '../../assets/icons/font.svg'
import BC from './../../assets/icons/BC.svg'
import PC from './../../assets/icons/PC.svg'
import uxui from './../../assets/icons/uxui.svg'
import threedot from './../../assets/icons/threedot.svg'
import logoA from './../../assets/icons/logoA.svg'
import content from './../../assets/icons/content.svg'
import success from './../../assets/icons/success.svg'
import document from '../../assets/icons/document.svg';
import back from '../../assets/icons/back.svg';

//
//compoents
//
import Input from './../common/input/Input'
import TextArea from '../common/textarea/textarea'

import './style.css';
import GetToApi from '../../controler/getToApi';
import PostToApii from '../../controler/postToApi';
import LoadingComponent from '../loading/loadingComponent';


class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingGetData: false,
            part1: true,
            part2: false,
            part3: false,
            part4: false,
            part5: false,
            part6: false,
            category: [],
            categoryTitle: '',
            categoryPrice: 0,
            plans: [],
            durations: [],
            categoryId: 0,
            fileZop: [],
            errorMessage: '',
            title: '',
            errorTitle: '',
            description: '',
            errorDescription: '',
            otherDescription: '',
            colors: [],
            planPrice: 0,
            projectDuration: 0,
            projectDurationPrice: 0,
            category_plan_id: 0,
            category_timing_id: 0,


        }
    }


    componentWillMount = async () => {
        const res = await GetToApi('category');
        if (res.status === 200)
            this.setState({
                category: res.data
            })
        // console.log(res.data)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    componentWillUnmount = async () => {
        window.removeEventListener('scroll', this.handleScroll);

    }

    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // informationBtns = React.createRef()
    // imageBtns = React.createRef()
    // myspan1 = React.createRef()
    // myspan2 = React.createRef()

    point1 = React.createRef()
    point2 = React.createRef()
    point3 = React.createRef()
    point4 = React.createRef()
    point5 = React.createRef()
    point6 = React.createRef()
    target1 = React.createRef()
    target2 = React.createRef()
    target3 = React.createRef()
    target4 = React.createRef()
    target5 = React.createRef()
    target6 = React.createRef()

    handleScroll = () => {
        // // console.log('1 :: ' + this.point1.current.offsetTop)
        // // console.log('H :: ' + window.innerHeight)
        // // console.log('Y :: ' + window.scrollY)
        // // console.log('2 ::  ' + this.point2.current.offsetTop)
        // // console.log(this.target2.current.style.position)
        // // console.log(((window.scrollY + 600) < this.point6.current.offsetTop) && this.state.part6)

        // // console.log()


        //     if (((window.scrollY + 600) >= this.point1.current.offsetTop) ) {
        //         this.target1.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point1.current.offsetTop) && this.state.part1 && !this.state.part2) {
        //         this.target1.current.className = 'CNP-btnBox-fixed'
        //     }

        //     if (((window.scrollY + 600) >= this.point2.current.offsetTop) ) {
        //         this.target2.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point2.current.offsetTop) && this.state.part2 && !this.state.part3) {
        //         this.target2.current.className = 'CNP-btnBox-fixed'
        //     }

        //     if (((window.scrollY + 600) >= this.point3.current.offsetTop)) {
        //         this.target3.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point3.current.offsetTop) && this.state.part3 && !this.state.part4) {
        //         this.target3.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 600) >= this.point4.current.offsetTop) ) {
        //         this.target4.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point4.current.offsetTop) && this.state.part4 && !this.state.part5) {
        //         this.target4.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 600) >= this.point5.current.offsetTop) ) {
        //         this.target5.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point5.current.offsetTop) && this.state.part5 && !this.state.part6) {
        //         this.target5.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 600) >= this.point6.current.offsetTop) ) {
        //         this.target6.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 600) < this.point6.current.offsetTop) && this.state.part6) {
        //         this.target6.current.className = 'CNP-btnBox-fixed'
        //     }


        // // tablet and mobile size scroll
        // if (window.innerWidth <= 700) {
        //     if (((window.scrollY + 700) >= this.point1.current.offsetTop) ) {
        //         this.target1.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point1.current.offsetTop) && this.state.part1 && !this.state.part2) {
        //         this.target1.current.className = 'CNP-btnBox-fixed'
        //     }

        //     if (((window.scrollY + 700) >= this.point2.current.offsetTop) ) {
        //         this.target2.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point2.current.offsetTop) && this.state.part2 && !this.state.part3) {
        //         this.target2.current.className = 'CNP-btnBox-fixed'
        //     }

        //     if (((window.scrollY + 700) >= this.point3.current.offsetTop) ) {
        //         this.target3.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point3.current.offsetTop) && this.state.part3 && !this.state.part4) {
        //         this.target3.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 700) >= this.point4.current.offsetTop) ) {
        //         this.target4.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point4.current.offsetTop) && this.state.part4 && !this.state.part5) {
        //         this.target4.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 700) >= this.point5.current.offsetTop) ) {
        //         this.target5.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point5.current.offsetTop) && this.state.part5 && !this.state.part6) {
        //         this.target5.current.className = 'CNP-btnBox-fixed'
        //     }


        //     if (((window.scrollY + 700) >= this.point6.current.offsetTop) ) {
        //         this.target6.current.className = 'CNP-btnBox-regular'
        //     } else if (((window.scrollY + 700) < this.point6.current.offsetTop) && this.state.part6) {
        //         this.target6.current.className = 'CNP-btnBox-fixed'
        //     }

        // }

    };


    CNP1 = React.createRef()
    CNP2 = React.createRef()
    CNP3 = React.createRef()
    CNP4 = React.createRef()
    CNP5 = React.createRef()
    CNP6 = React.createRef()

    // go to next part
    nextPart = (e) => {
        // console.log(this.state.categoryId)

        // next1 pushedfi
        if (e.target.id === 'CNP-N1') {

            if (this.state.categoryId !== 0) {
                this.CNP1.current.style.display = 'none'
                this.CNP2.current.style.position = 'unset'
                this.target1.current.className = 'CNP-btnBox-regular'

                this.setState({
                    part1: false,
                    part2: true
                })
            } else {
                // this.setState({
                //     errorMessage:'لطفا یکی از دسته بندی های زیر را انتخاب کنید.'
                // })

                this.setState({show: true, errorMessage: 'لطفا یکی از دسته بندی های زیر را انتخاب کنید.'})
            }
        }

        // next2 pushed
        else if (e.target.id === 'CNP-N2') {

            let valid = true;


            if (this.state.title === '') {
                this.setState({errorTitle: 'لطفا عنوان پروژه خود را وارد نمایید'});
                valid = false

            }
            if (this.state.description === '') {
                this.setState({errorDescription: 'لطفا توضیحاتی درباره پروژه خود ذکر کنید'});
                valid = false
            }

            if (valid === true) {
                this.CNP2.current.style.position = 'fixed'
                this.CNP3.current.style.position = 'unset'
                this.target2.current.className = 'CNP-btnBox-regular'

                this.setState({
                    part2: false,
                    part3: true,
                    errorDescription: '',
                    errorTitle: ''
                })
            }
        }

        // next3 pushed  ---  select colors and fonts -------------->
        else if (e.target.id === 'CNP-N3') {
            this.CNP3.current.style.position = 'fixed'
            this.CNP4.current.style.position = 'unset'
            this.target3.current.className = 'CNP-btnBox-regular'

            this.setState({
                part3: false,
                part4: true
            })
        }

        // next4 pushed  --- select plans ------------>
        else if (e.target.id === 'CNP-N4') {

            if (this.state.category_plan_id !== 0) {
                this.CNP4.current.style.position = 'fixed'
                this.CNP5.current.style.position = 'unset'
                this.target4.current.className = 'CNP-btnBox-regular'

                this.setState({
                    part4: false,
                    part5: true
                })
            } else {
                this.setState({show: true, errorMessage: 'لطفا یکی از پلن های زیر را انتخاب کنید.'})
            }
        }

        // next5 pushed
        else if (e.target.id === 'CNP-N5') {

            if (this.state.category_timing_id !== 0) {
                this.CNP5.current.style.position = 'fixed'
                this.CNP6.current.style.position = 'unset'
                this.target5.current.className = 'CNP-btnBox-regular'

                this.setState({
                    part5: false,
                    part6: true
                })
            } else {
                this.setState({show: true, errorMessage: 'لطفا مدت زمان انجام پروژه خود را انتخاب کنید.'})
            }
        }

        //focus top of screen
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }


    // go to preveiw part 
    backPart = (e) => {

        //prev2 pushed
        if (e.target.id === 'CNP-P2') {
            this.CNP1.current.style.display = 'block'
            this.CNP2.current.style.position = 'fixed'
            this.target2.current.className = 'CNP-btnBox-regular'

            this.setState({
                part2: false,
                part1: true
            })
        }

        //prev3 pushed
        else if (e.target.id === 'CNP-P3') {
            this.CNP2.current.style.position = 'unset'
            this.CNP3.current.style.position = 'fixed'
            this.target3.current.className = 'CNP-btnBox-regular'

            this.setState({
                part3: false,
                part2: true
            })
        }

        //prev4 pushed
        else if (e.target.id === 'CNP-P4') {
            this.CNP3.current.style.position = 'unset'
            this.CNP4.current.style.position = 'fixed'
            this.target4.current.className = 'CNP-btnBox-regular'

            this.setState({
                part4: false,
                part3: true
            })
        }

        //prev5 pushed
        else if (e.target.id === 'CNP-P5') {
            this.CNP4.current.style.position = 'unset'
            this.CNP5.current.style.position = 'fixed'
            this.target5.current.className = 'CNP-btnBox-regular'

            this.setState({
                part5: false,
                part4: true
            })
        }

        //prev6 pushed
        else if (e.target.id === 'CNP-P6') {
            this.CNP5.current.style.position = 'unset'
            this.CNP6.current.style.position = 'fixed'
            this.target6.current.className = 'CNP-btnBox-regular'

            this.setState({
                part6: false,
                part5: true
            })
        }

        //focus top of screen
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });
    }


    //
    //
    //

    getValueColor = (e) => {
        // console.log(e.target.value)
    }
    //PAYMENT 
    paymentHandler = async () => {

        //  console.log(`
        // category_id : ${this.state.categoryId}
        // category_plan_id : ${this.state.category_plan_id}
        // category_timing_id : ${this.state.category_timing_id}
        // title : ${this.state.title}
        // desc : ${this.state.description}
        // desc_more : ${this.state.otherDescription}
        // colors :
        // fonts :
        // path :
        // `);

        this.setState({
            isLoadingGetData: true
        })


        //
        // provider data for API --------------------------------------------------------------->
        //


        const data = new FormData();

        data.append('category_id', this.state.categoryId);
        data.append('category_plan_id', this.state.category_plan_id);
        data.append('category_timing_id', this.state.category_timing_id);
        data.append('title', this.state.title);
        data.append('desc', this.state.description);
        data.append('desc_more', this.state.otherDescription)
        var details = JSON.stringify({age: 12}); // TODO fixed later for get colors and fonts
        data.append('colors', details);
        data.append('fonts', details);

        //// console.log(this.state.fileZop)
        if (this.state.fileZop[0])
            for (const file of this.state.fileZop[0]) {
                data.append('path[]', file, file.name);
            }


        // console.log(`${data}`)


        const res = await PostToApii(data, 'projects');

        // console.log(res);          // data, error,status
        // console.log(res.status);   // 200 means success
        // console.log(res.error);    // show the error from server
        // console.log(res.data);     // show the data from server


        window.location = res.data.url;


        this.setState({
            isLoadingGetData: false
        })


    }


    // more category load 
    moreCategory = () => {

    }
  

    getPlan = async (id, title, price) => { 
       
        this.setState({
            categoryId: id,
            categoryTitle: title,
            categoryPrice: price,
            isLoadingGetData: true
        })
        const res = await GetToApi('category/' + id + '/plan');
        await this.setState({
            plans: res.data
        })
        
        this.CNP1.current.style.display = 'none'
        this.CNP2.current.style.position = 'unset'
        this.target1.current.className = 'CNP-btnBox-regular'

        this.setState({
            part1: false,
            part2: true,
            isLoadingGetData:false
        })

        // // console.log(res.data)
        // document.getElementById('step1').focus();
        
    }


    getDuration = async (id, category_plan_id) => {
        this.setState({categoryId: id})
        const res = await GetToApi('category/' + id + '/timing?category_plan_id=' + category_plan_id);
        this.setState({
            durations: res.data
        })
        // console.log(res.data)
    }

    //
    // get plan id ----------------------->
    //
    _getPlanId = (id, title, price) => {
        // console.log(id) // TODO delete later
        this.setState({
            category_plan_id: id,
            planPrice: price
        })
        this.getDuration(this.state.categoryId, id); // get time duration --->
    }

    //
    //
    //
    _getDurationId = (id, title, price) => {
        // console.log(id) // TODO delete later

        this.setState({
            category_timing_id: id,
            projectDurationPrice: price,
            projectDuration: title
        })
    }

    render() {

        //
        // Get All Category -------------------------->
        //
        const renderCategory = (
            this.state.category ? this.state.category.map((data, index) => {
                return <div key={index}  >
                    <input type="radio" name="emotion" id={index} className="input-hidden"
                           onClick={() => this.getPlan(data.id, data.title, data.pay)}/>
                    <label htmlFor={index} >
                        <div className="CNP-logoBox" style={{backgroundImage: 'url(' + data.icon + ')'}}>
                            <span className="CNP-logoBoxTitle">{data.title}</span>
                        </div>
                    </label>
                </div>
            }) : ''
        )

        //
        // Get all plans from api ------------------------>
        //
        const renderPlans = (
            this.state.categoryId > 0 ?
                this.state.plans.map((data, index) => {
                    return <div key={index} className="plan-container-cover">
                        <input type="radio" id={'ss' + data.id} name="select" value={data.id}
                               onClick={() => this._getPlanId(data.id, data.title, data.price)}/>
                        <label htmlFor={'ss' + data.id}>
                            <div className="CNP-label">
                                <div className="CNP-SD-title">
                                    <h1>{data.title}</h1>
                                    <h2>{data.desc}</h2>
                                </div>
                                <div className="CNP-SD-middle">
                                    <p> {data.min} الی {data.max} طراح</p>
                                    <p>اولیه</p>
                                    <p>تضمین برگشت پول</p>
                                    {data.price === 0 ? <p>رایگان</p> :
                                        <p>{PriceDigit(data.price , 'price')} <span> تومان </span></p>
                                    }
                                </div>
                                <div className="CNP-SD-end">
                                    انتخاب
                                </div>
                            </div>
                        </label>
                    </div>
                })
                : ''
        );

        const renderDuration = (
            this.state.durations ?
                this.state.durations.map((data, index) => {
                    return <div key={index} className="selector-container">
                        <input type="radio" id={'dd' + index} name="select" value={data.id}
                               onClick={() => this._getDurationId(data.id, data.title, data.price)}/>
                        <label htmlFor={'dd' + index}>
                            <div className="CNPD-title">
                                <p>{data.title}</p>
                                {data.price !== 0 ? <h1>  {PriceDigit(data.price , 'price')} تومان</h1> : <h1>رایگان</h1>}
                            </div>
                        </label>
                    </div>
                })
                :
                ''

        )


        const renderViewFiles = (
            this.state.fileZop ? this.state.fileZop.map((data, index) => {
                    var xx = data;
                    return xx.map((val, ind) => {
                        return <div key={ind}>
                            {/* <p onClick={ () =>  // console.log(ind)}>  Delete</p> */}
                            <img src={URL.createObjectURL(val)} alt="" className="CNP-file-attach-view"/>
                        </div>
                    })

                })
                : ''
        )


        return (
            <div className="CreateNewProject">
                {this.state.isLoadingGetData ? <LoadingComponent/> : ''}
                <div className="CNP-body">

                    {/* STEP 1 */}

                    <div className="CNP-1" ref={this.CNP1}>
                        <SweetAlert
                            show={this.state.show}
                            title=""
                            text={this.state.errorMessage}
                            onConfirm={() => this.setState({show: false})}
                        />

                        <div className="CNP-title">
                            ایجاد پروژه جدید
                        </div>
                        <div className="CNP1-category">
                            <h1>همه دسته بندی ها را ببین</h1>
                            <div className="CNP-1-radio">

                                {renderCategory}

                                {/* <div onClick={this.moreCategory}>
                                    <div className="CNP-logoBox" style={{backgroundImage: 'url(' + threedot + ')'}}>
                                        <span className="CNP-logoBoxTitle">بیشتر</span>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className="CNP-1-Note" ref={this.point1}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
                            <p>- نوع طرح مورد سفارش خود را از میان دسته بندی های بالا انتخاب کنید.</p>
                            <p>- بعد از انتخاب و اطمینان از صحت دسته بندی سفارش خود بر روی دکمه "بعدی" کلیک کرده و به صفحه بعد بروید.</p>
                         



                        </div>
                        <div className="CNP-btnBox-regular" id="aras" ref={this.target1}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS"  >
                                <button className="nextBTN nextBTN1" id="CNP-N1" onClick={this.nextPart}> بعدی</button>
                            </div>
                        </div>
                    </div>


                    {/* STEP 2*/}

                    <div className="CNP-2" ref={this.CNP2}>
                        <div className="CNP-title">
                            {this.state.categoryTitle}
                        </div>
                        <div className="CNP-desc-text">
                            <h1>توضیحات پروژه</h1>
                            <h2>عنوان پروژه را انتخاب کن</h2>

                            <div className="CNP-project-title">
                                <Input
                                    type={'text'}
                                    name={'title'}
                                    placeholder={'عنوان پروژه '}
                                    changed={this.changedHandler}
                                    error={this.state.errorTitle}
                                    val={this.state.title}
                                />
                                <p>برای مثال :  {this.state.categoryTitle} برای شرکت ویشار</p>
                            </div>

                            <div className="CNP-description">
                                <TextArea
                                    type={'text'}
                                    name={'description'}
                                    placeholder={'اطلاعات مربوط به پروژه'}
                                    changed={this.changedHandler}
                                    error={this.state.errorDescription}
                                    val={this.state.description}
                                />
                                <p>برای مثال : معرفی کسب و کار مرتبط با پروژه و توضیحات لازم در ارتباط با پروژه</p>

                            </div>
                            <div className="CNP-other-desc">
                                <TextArea
                                    type={'text'}
                                    name={'otherDescription'}
                                    placeholder={'اطلاعات که طراح باید بداند'}
                                    changed={this.changedHandler}
                                    error={this.state.errorOtherDescription}
                                    val={this.state.otherDescription}
                                />
                                <p>لطفا اطلاعاتی که به طراح کمک می کند تا دقیق تر و بهتر بتواند خواسته شما را اجرا کند را بیان کنید</p>

                            </div>

                            <div className="CNP-upload">
                                <div>
                                    <Dropzone onDrop={acceptedFiles => {
                                        // TODO delete not working.!
                                        // console.log(acceptedFiles);

                                        // this.setState({fileZop: acceptedFiles})
                                        var newArray = this.state.fileZop.slice();
                                        newArray.push(acceptedFiles);
                                        this.setState({fileZop: newArray})

                                        // // console.log(typeof(this.state.fileZop))
                                        // // console.log(this.state.fileZop)
                                    }}>
                                        {({getRootProps, getInputProps}) => (
                                            <section className="tests">
                                                <div style={{width: '100%'}} {...getRootProps()}>
                                                    <input {...getInputProps()} />

                                                    <div className="CNP-image-uploader">
                                                        <h1> فایل های ضمیمه</h1>
                                                        <div className="CNPU-img">
                                                            <img src={document} alt="اسناد"/>
                                                        </div>
                                                        <p className="CNPU-text">
                                                            برا آپلود عکس کلیک کنید یا عکس را رها کنید
                                                        </p>
                                                    </div>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                </div>

                            </div>

                            <div className="CNP-attach-file-view-container ">
                                {renderViewFiles}
                            </div>


                        </div>


                        <div className="CNP-1-Note" ref={this.point2}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
                            <p>- لطفا جهت افزایش کیفیت و دقت طرح نهایی، اطلاعاتی کامل در مورد پروژه ای که قصد ثبت آن را دارید بنویسید.</p>
                            <p>- سعی داشته باشید در کنار نوع طرح، نام کسب و کار مورد استفاده طرح، ویژگی های درخواستی شامل رنگ، اندازه، فونت مورد استفاده و هر آنچه را که باعث آگاهی رساندن به طراح می شود را در قسمت مربوطه بنویسید.</p>
                            <p>- در صورت لزوم می توانید درخواست های خود را بصورت فایل ورد یا عکس نیز آپلود نمایید‌.</p>
                            <p>- دقت داشته باشید توضیحاتی که شما در مورد پروژه خود می دهید در نهایت جهت بالا بردن کیفیت، دقت و سرعت کار طراح مورد استفاده قرار می گیرد.</p>
  

                        </div>
                        <div className="CNP-btnBox-regular" ref={this.target2}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS">
                                <button className="prevBTN" id="CNP-P2" onClick={this.backPart}><img src={back}
                                                                                                     alt="قبلی"/> قبلی
                                </button>
                                <button className="nextBTN" id="CNP-N2" onClick={this.nextPart}> بعدی</button>
                            </div>

                        </div>
                    </div>


                    {/* STEP 3 */}

                    <div className="CNP-3" ref={this.CNP3}>
                        <div className="CNP-title">
                            {this.state.categoryTitle}
                        </div>
                        <div className="CNP-desc-text">
                            <h1>رنگها را پیدا کن</h1>
                            <h2>سه رنگ دلخواه را انتخاب کن</h2>
                            <div className="CNP-check-color CNP-check">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="colors1" value="blue" onClick={this.getValueColor}/>
                                        <label htmlFor="colors1">
                                            <img src={color1} alt="رنگها"/>
                                            <span>آبی</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors2" value="green" onClick={this.getValueColor}/>
                                        <label htmlFor="colors2">
                                            <img src={color2} alt="رنگها"/>
                                            <span>سبز</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors3" onClick={this.getValueColor}/>
                                        <label htmlFor="colors3">
                                            <img src={color3} alt="رنگها"/>
                                            <span>بنفش</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors4" onClick={this.getValueColor}/>
                                        <label htmlFor="colors4">
                                            <img src={color4} alt="رنگها"/>
                                            <span>صورتی </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors5" onClick={this.getValueColor}/>
                                        <label htmlFor="colors5">
                                            <img src={color5} alt="رنگها"/>
                                            <span>قرمز</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors6" onClick={this.getValueColor}/>
                                        <label htmlFor="colors6">
                                            <img src={color6} alt="رنگها"/>
                                            <span>نارنجی</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors7" onClick={this.getValueColor}/>
                                        <label htmlFor="colors7">
                                            <img src={color7} alt="رنگها"/>
                                            <span>خاکستری</span>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="colors8" onClick={this.getValueColor}/>
                                        <label htmlFor="colors8">
                                            <img src={color8} alt="رنگها"/>
                                            <span>مشکی</span>
                                        </label>
                                    </li>


                                </ul>

                            </div>
                            <h1>قلم ها را پیدا کن</h1>
                            <h2>سه قلم دلخواه را انتخاب کن</h2>

                            <div className="CNP-check-font CNP-check">

                            <ul>
                                        <li>
                                            <input type="checkbox" id="font1" />
                                            <label htmlFor="font1">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span>ایران سنس</span>
                                            </label>
                                        </li>
                       
                                        <li>
                                            <input type="checkbox" id="font3" />
                                            <label htmlFor="font3">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span>تاهوما </span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font4" />
                                            <label htmlFor="font4">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span> عربیکیا</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font5" />
                                            <label htmlFor="font5">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span> امید سنس</span>
                                            </label>
                                        </li>
                            
                                        <li>
                                            <input type="checkbox" id="font7" />
                                            <label htmlFor="font7">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span> میترا</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font8" />
                                            <label htmlFor="font8">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span> کودک</span>
                                            </label>
                                        </li>


                                    </ul>

                            </div>
                        </div>


                        <div className="CNP-1-Note" ref={this.point3}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
                            <p>- رنگ پیشنهادی خود را جهت استفاده در ظاهر کلی طرح، انتخاب نمایید.</p>
                            <p>- اگر مایل هستید یکی از قلم های بالا در طرح شما استفاده گردد؛ آن را انتخاب کنید.</p>
                            <p>- بعد از اطمینان از صحت گزینه های انتخابی روی دکمه "بعدی" کلیک کرده و به صفحه بعد بروید.</p>
                            <p>- در صورت نیاز به تجدید نظر در انتخاب و ویرایش صفحه قبل می توانید با کلیک روی دکمه "قبلی" به آن صفحه برگردید.</p>
                        </div>

                        <div className="CNP-btnBox-regular" ref={this.target3}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS">
                                <button className="prevBTN" id="CNP-P3" onClick={this.backPart}><img src={back}
                                                                                                     alt="قبلی"/> قبلی
                                </button>
                                <button className="nextBTN" id="CNP-N3" onClick={this.nextPart}> بعدی</button>
                            </div>
                        </div>
                    </div>


                    {/* STEP 4 */}

                    <div className="CNP-4" ref={this.CNP4}>
                        <div className="CNP-title">
                            {this.state.categoryTitle}
                        </div>


                        <div className="CNP-desc-text">
                            <h1>کدام پلن را انتخاب میکنی ؟</h1>
                            <h2>پیشنهاد ویژه ای برای شما در نظر داریم.</h2>

                            <div className="CNP-select-design">


                                {renderPlans}


                            </div>


                        </div>
                        <div className="CNP-1-Note" ref={this.point4}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1> 

                            <p>- شما می توانید با توجه به ویژگی های مد نظرتان مانند بودجه، تعداد طراح و... یکی از پلن های بالا را انتخاب کنید.</p>
                            <p>- اگر از پلن انتخابی خود مطمئن هستید روی دکمه "بعدی" کلیک کرده و به صفحه بعد بروید.</p>
                            <p>- در صورت نیاز به تجدید نظر در انتخاب و ویرایش صفحه قبل می توانید با کلیک روی دکمه "قبلی" به آن صفحه برگردید.</p>
   
                        </div>
                        <div className="CNP-btnBox-regular" ref={this.target4}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS">
                                <button className="prevBTN" id="CNP-P4" onClick={this.backPart}><img src={back}
                                                                                                     alt="قبلی"/> قبلی
                                </button>
                                <button className="nextBTN" id="CNP-N4" onClick={this.nextPart}> بعدی</button>
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}

                    <div className="CNP-5" ref={this.CNP5}>
                        <div className="CNP-title">
                            {this.state.categoryTitle}
                        </div>
                        <div className="CNP-desc-text">
                            <h1>زمانبندی</h1>
                            <h2>آیا مایلید طرح های خود را سریعتر دریافت نمایید؟</h2>

                    
                            <div className="CNP-duration">

                                {/* <input type="radio" id="duration1" name="select" value="1" />
                                <label htmlFor="duration1">
                                    <div className="CNPD-title" >
                                        <p>استاندارد ۷ روز</p>
                                        <h1>رایگان</h1>
                                    </div>
                                </label> */}


                                {/* <input type="radio" id="duration2" name="select" value="2" />
                                <label htmlFor="duration2">

                                    <div className="CNPD-title" >
                                        <p>4 روز </p>
                                        <h1>250000 ت</h1>
                                    </div>
                                </label> */}


                                {/* <input type="radio" id="duration3" name="select" value="3" />
                                <label htmlFor="duration3">

                                    <div className="CNPD-title" >
                                        <p>2 روز </p>
                                        <h1>450000 ت</h1>
                                    </div>
                                </label> */}

                                {/* <input type="radio" id="duration4" name="select" value="3" />
                                <label htmlFor="duration4">
                                    <div className="CNPD-title" >
                                        <p>۲۴ ساعت </p>
                                        <h1>900000 ت</h1>
                                    </div>
                                </label> */}
                                {renderDuration}

                            </div>


                        </div>
                        <div className="CNP-1-Note" ref={this.point5}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1> 

                            <p>- با توجه به بودجه و سرعت تحویل طرح نهایی مد نظر شما یکی از گزینه های بالا را انتخاب کنید.</p>
                            <p>- اگر از گزینه انتخابی خود مطمئن هستید روی دکمه بعدی کلیک کرده و به صفحه بعد بروید.</p>
                            <p>- در صورت نیاز به تجدید نظر در انتخاب و ویرایش صفحه قبل می توانید با کلیک روی دکمه "قبلی" به آن صفحه برگردید.</p>
                        </div>
                        <div className="CNP-btnBox-regular" ref={this.target5}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS">
                                <button className="prevBTN" id="CNP-P5" onClick={this.backPart}><img src={back}
                                                                                                     alt="قبلی"/> قبلی
                                </button>
                                <button className="nextBTN" id="CNP-N5" onClick={this.nextPart}> بعدی</button>
                            </div>
                        </div>

                    </div>

                    {/* STEP 6 */}

                    <div className="CNP-6" ref={this.CNP6}>
                        <div className="CNP-title">
                            {this.state.categoryTitle}
                        </div>

                        <div className="CNP-invoice">
                            <h1>صورتحساب</h1>
                            <ul>
                                <li> دسته بندی :<span>{this.state.categoryTitle}</span></li>
                                {/* <li> قیمت :<span>{this.state.categoryPrice}</span></li> */}
                                <li>نوع پروژه : <span>پروژه گروهی</span></li>
                                <li>عنوان پروژه :<span>{this.state.title}</span></li>
                                <li>زمان : <span>{ this.state.projectDuration }</span>
                                  
                                </li>
                                <li>
                                    هزینه زمان اجرا : <span>{PriceDigit(this.state.projectDurationPrice, 'price')}</span>
                                    <span>تومان</span>
                                </li>
                                <li>قیمت پلن :<span>{PriceDigit(this.state.planPrice,'price')}</span> <span>تومان</span></li>
                            </ul>
                            <p>
                                مجموع هزینه ها :
                                <h2>
                                    {PriceDigit(this.state.projectDurationPrice + this.state.planPrice + this.state.categoryPrice, 'price')}
                                    <span>تومان</span>
                                </h2>
                            </p>
                        </div>


                        <div className="CNP-1-Note" ref={this.point6}>
                            <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
                      
                            <p>- مشخصات طرح سفارش داده توسط شما در بالا و مجموع هزینه های قابل پرداخت نیز در پایان آن نوشته شده است.</p>
                            <p>- در صورت مورد تایید بودن تمام اطلاعات از طرف شما روی دکمه "پرداخت" کلیک کرده تا به صفحه پرداخت هدایت شوید.</p>
                            <p>- در صورت نیاز به تجدید نظر در انتخاب و ویرایش صفحه قبل می توانید با کلیک روی دکمه قبلی به آن صفحه برگردید.</p>
              


                        </div>
                        <div className="CNP-btnBox-regular" ref={this.target6}>
                            <div className="CNP-100">
                                <img src={success} alt="موفق"/>
                                <p>
                                    <span>گارانتی برگشت 100% پول</span>
                                    <span>در صورت عدم دریافت طرح ، پرداخت کامل هزینه</span>
                                </p>
                            </div>
                            <div className="CNP-BTNS">
                                <button className="prevBTN" id="CNP-P6" onClick={this.backPart}><img src={back}
                                                                                                     alt="قبلی"/> قبلی
                                </button>
                                <button className="paymentBTN" id="CNP-N6" onClick={this.paymentHandler}> پرداخت
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default CreateNewProject;