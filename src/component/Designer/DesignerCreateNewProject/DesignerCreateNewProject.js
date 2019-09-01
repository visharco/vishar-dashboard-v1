
// import React, { Component } from 'react';

// //
// //
// //
// import color1 from '../../assets/images/color1.png'
// import color2 from '../../assets/images/color2.png'
// import color3 from '../../assets/images/color3.png'
// import color4 from '../../assets/images/color4.png'
// import color5 from '../../assets/images/color5.png'
// import color6 from '../../assets/images/color6.png'
// import color7 from '../../assets/images/color7.png'
// import color8 from '../../assets/images/color8.png'
// import font from '../../assets/icons/font.svg'
// import BC from './../../assets/icons/BC.svg'
// import PC from './../../assets/icons/PC.svg'
// import uxui from './../../assets/icons/uxui.svg'
// import threedot from './../../assets/icons/threedot.svg'
// import logoA from './../../assets/icons/logoA.svg'
// import content from './../../assets/icons/content.svg'
// import success from './../../assets/icons/success.svg'
// import document from '../../assets/icons/document.svg';
// import back from '../../assets/icons/back.svg';

// //
// //compoents
// //
// import Input from './../common/input/Input'
// import TextArea from '../common/textarea/textarea'

// import './style.css';



// class CreateNewProject extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             part1: true,
//             part2: false,
//             part3: false,
//             part4: false,
//             part5: false,
//             part6: false,
//         }
//     }



//     componentDidMount() {
//         window.addEventListener('scroll', this.handleScroll);
//     }



//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll);
//     }



//     point1 = React.createRef()
//     point2 = React.createRef()
//     point3 = React.createRef()
//     point4 = React.createRef()
//     point5 = React.createRef()
//     point6 = React.createRef()
//     target1 = React.createRef()
//     target2 = React.createRef()
//     target3 = React.createRef()
//     target4 = React.createRef()
//     target5 = React.createRef()
//     target6 = React.createRef()

//     handleScroll = () => {
//         // console.log('1 :: ' + this.point1.current.offsetTop)
//         // console.log('H :: ' + window.innerHeight)
//         // console.log('Y :: ' + window.scrollY)
//         // console.log('2 ::  ' + this.point2.current.offsetTop)
//         // console.log(this.target2.current.style.position)
//         // console.log(((window.scrollY + 600) < this.point6.current.offsetTop) && this.state.part6)

//         // console.log()


//             if (((window.scrollY + 600) >= this.point1.current.offsetTop) ) {
//                 this.target1.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point1.current.offsetTop) && this.state.part1 && !this.state.part2) {
//                 this.target1.current.className = 'CNP-btnBox-fixed'
//             }

//             if (((window.scrollY + 600) >= this.point2.current.offsetTop) ) {
//                 this.target2.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point2.current.offsetTop) && this.state.part2 && !this.state.part3) {
//                 this.target2.current.className = 'CNP-btnBox-fixed'
//             }

//             if (((window.scrollY + 600) >= this.point3.current.offsetTop)) {
//                 this.target3.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point3.current.offsetTop) && this.state.part3 && !this.state.part4) {
//                 this.target3.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 600) >= this.point4.current.offsetTop) ) {
//                 this.target4.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point4.current.offsetTop) && this.state.part4 && !this.state.part5) {
//                 this.target4.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 600) >= this.point5.current.offsetTop) ) {
//                 this.target5.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point5.current.offsetTop) && this.state.part5 && !this.state.part6) {
//                 this.target5.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 600) >= this.point6.current.offsetTop) ) {
//                 this.target6.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 600) < this.point6.current.offsetTop) && this.state.part6) {
//                 this.target6.current.className = 'CNP-btnBox-fixed'
//             }


//         // tablet and mobile size scroll
//         if (window.innerWidth <= 700) {
//             if (((window.scrollY + 700) >= this.point1.current.offsetTop) ) {
//                 this.target1.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point1.current.offsetTop) && this.state.part1 && !this.state.part2) {
//                 this.target1.current.className = 'CNP-btnBox-fixed'
//             }

//             if (((window.scrollY + 700) >= this.point2.current.offsetTop) ) {
//                 this.target2.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point2.current.offsetTop) && this.state.part2 && !this.state.part3) {
//                 this.target2.current.className = 'CNP-btnBox-fixed'
//             }

//             if (((window.scrollY + 700) >= this.point3.current.offsetTop) ) {
//                 this.target3.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point3.current.offsetTop) && this.state.part3 && !this.state.part4) {
//                 this.target3.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 700) >= this.point4.current.offsetTop) ) {
//                 this.target4.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point4.current.offsetTop) && this.state.part4 && !this.state.part5) {
//                 this.target4.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 700) >= this.point5.current.offsetTop) ) {
//                 this.target5.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point5.current.offsetTop) && this.state.part5 && !this.state.part6) {
//                 this.target5.current.className = 'CNP-btnBox-fixed'
//             }


//             if (((window.scrollY + 700) >= this.point6.current.offsetTop) ) {
//                 this.target6.current.className = 'CNP-btnBox-regular'
//             } else if (((window.scrollY + 700) < this.point6.current.offsetTop) && this.state.part6) {
//                 this.target6.current.className = 'CNP-btnBox-fixed'
//             }
//         }

//     };


//     CNP1 = React.createRef()
//     CNP2 = React.createRef()
//     CNP3 = React.createRef()
//     CNP4 = React.createRef()
//     CNP5 = React.createRef()
//     CNP6 = React.createRef()

//     // go to next part
//     nextPart = (e) => {

//         // next1 pushed
//         if (e.target.id === 'CNP-N1') {
//             this.CNP1.current.style.position = 'fixed'
//             this.CNP2.current.style.position = 'unset'
//             this.target1.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part1: false,
//                 part2: true
//             })
//         }

//         // next2 pushed
//         else if (e.target.id === 'CNP-N2') {
//             this.CNP2.current.style.position = 'fixed'
//             this.CNP3.current.style.position = 'unset'
//             this.target2.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part2: false,
//                 part3: true
//             })
//         }

//         // next3 pushed
//         else if (e.target.id === 'CNP-N3') {
//             this.CNP3.current.style.position = 'fixed'
//             this.CNP4.current.style.position = 'unset'
//             this.target3.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part3: false,
//                 part4: true
//             })
//         }

//         // next4 pushed
//         else if (e.target.id === 'CNP-N4') {
//             this.CNP4.current.style.position = 'fixed'
//             this.CNP5.current.style.position = 'unset'
//             this.target4.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part4: false,
//                 part5: true
//             })
//         }

//         // next5 pushed
//         else if (e.target.id === 'CNP-N5') {
//             this.CNP5.current.style.position = 'fixed'
//             this.CNP6.current.style.position = 'unset'
//             this.target5.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part5: false,
//                 part6: true
//             })
//         }

//         //focus top of screen
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });

//     }


//     // go to preveiw part 
//     backPart = (e) => {

//         //prev2 pushed
//         if (e.target.id === 'CNP-P2') {
//             this.CNP1.current.style.position = 'unset'
//             this.CNP2.current.style.position = 'fixed'
//             this.target2.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part2: false,
//                 part1: true
//             })
//         }

//         //prev3 pushed
//         else if (e.target.id === 'CNP-P3') {
//             this.CNP2.current.style.position = 'unset'
//             this.CNP3.current.style.position = 'fixed'
//             this.target3.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part3: false,
//                 part2: true
//             })
//         }

//         //prev4 pushed
//         else if (e.target.id === 'CNP-P4') {
//             this.CNP3.current.style.position = 'unset'
//             this.CNP4.current.style.position = 'fixed'
//             this.target4.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part4: false,
//                 part3: true
//             })
//         }

//         //prev5 pushed
//         else if (e.target.id === 'CNP-P5') {
//             this.CNP4.current.style.position = 'unset'
//             this.CNP5.current.style.position = 'fixed'
//             this.target5.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part5: false,
//                 part4: true
//             })
//         }

//         //prev6 pushed
//         else if (e.target.id === 'CNP-P6') {
//             this.CNP5.current.style.position = 'unset'
//             this.CNP6.current.style.position = 'fixed'
//             this.target6.current.className = 'CNP-btnBox-regular'

//             this.setState({
//                 part6: false,
//                 part5: true
//             })
//         }

//         //focus top of screen
//         window.scrollTo({
//             top: 100,
//             behavior: 'smooth'
//         });
//     }

    
//     //PAYMENT 
//     paymentHandler = () =>{

//     }


//     // more category load 
//     moreCategory = () => {

//     }

//     render() {
//         return (
//             <div className="CreateNewProject">

//                 <div className="CNP-body" >

//                     {/* STEP 1 */}



//                     <div className="CNP-1" ref={this.CNP1} >
//                         <div className="CNP-title" >
//                             ایجاد پروژه جدید
//                                 </div>
//                         <div className="CNP1-category" >
//                             <h1>همه دسته بندی ها را ببین</h1>
//                             <div className="CNP-1-radio" >

//                                 <input
//                                     type="radio" name="emotion"
//                                     id="logoA" className="input-hidden" />
//                                 <label htmlFor="logoA">
//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + logoA + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >لوگو</span>
//                                     </div>
//                                 </label>




//                                 <input
//                                     type="radio" name="emotion"
//                                     id="BC" className="input-hidden" />
//                                 <label htmlFor="BC">

//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + BC + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >کارت تجاری</span>
//                                     </div>
//                                 </label>




//                                 <input
//                                     type="radio" name="emotion"
//                                     id="PC" className="input-hidden" />
//                                 <label htmlFor="PC">

//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + PC + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >وب و اپ</span>
//                                     </div>
//                                 </label>




//                                 <input
//                                     type="radio" name="emotion"
//                                     id="uxui" className="input-hidden" />
//                                 <label htmlFor="uxui">

//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + uxui + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >رابط کاربری</span>
//                                     </div>
//                                 </label>




//                                 <input
//                                     type="radio" name="emotion"
//                                     id="content" className="input-hidden" />
//                                 <label htmlFor="content">
//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + content + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >محتوا</span>
//                                     </div>
//                                 </label>




//                                 <div onClick={this.moreCategory} >
//                                     <div className="CNP-logoBox" style={{ backgroundImage: 'url(' + threedot + ')' }} >
//                                         <span className="CNP-logoBoxTitle" >بیشتر</span>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="CNP-1-Note" ref={this.point1} >
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>
//                         <div className="CNP-btnBox-regular" ref={this.target1}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="nextBTN nextBTN1" id="CNP-N1" onClick={this.nextPart}> بعدی </button>
//                             </div>
//                         </div>
//                     </div>


//                     {/* STEP 2*/}

//                     <div className="CNP-2" ref={this.CNP2}  >
//                         <div className="CNP-title" >
//                             کارت تجاری
//                         </div>
//                         <div className="CNP-desc-text" >
//                             <h1>توضیحات پس زمینه</h1>
//                             <h2>عنوان پروزه را انتخاب کن</h2>

//                             <div className="CNP-project-title" >
//                                 <Input
//                                     type={'text'}
//                                     name={'title'}
//                                     placeholder={'عنوان پروژه '}
//                                     changed={this.changedHandler}
//                                     error={this.state.forgetEmailError}
//                                 />
//                                 <p>برای مثال : انتخاب نام لوگوی شرکت خودتان مثل گوگل</p>
//                             </div>

//                             <div className="CNP-description" >
//                                 <TextArea
//                                     type={'text'}
//                                     name={'description'}
//                                     placeholder={'هرچیزی که در پروژه نیاز داری رو شرح بده'}
//                                     changed={this.changedHandler}
//                                     error={this.state.forgetEmailError}
//                                 />
//                                 <p>برای مثال : انتخاب نام لوگوی شرکت خودتان مثل گوگل</p>

//                             </div>
//                             <div className="CNP-other-desc" >
//                                 <TextArea
//                                     type={'text'}
//                                     name={'otherDescription'}
//                                     placeholder={'چشز دیگری در مورد پروژه نیاز هست را اضافه کن'}
//                                     changed={this.changedHandler}
//                                     error={this.state.forgetEmailError}
//                                 />
//                                 <p>برای مثال : انتخاب نام لوگوی شرکت خودتان مثل گوگل</p>

//                             </div>

//                             <div className="CNP-upload" >
//                                 <div  >
//                                     <h1>عکس پروفایل</h1>
//                                     <div className="CNPU-img" >
//                                         <img src={document} alt="اسناد" />
//                                     </div>
//                                     <p className="CNPU-text" >
//                                         برا آپلود عکس کلیک کنید یا عکس را رها کنید
//                                     </p>
//                                 </div>
//                                 <p>برای مثال : انتخاب نام لوگوی شرکت خودتان مثل گوگل</p>


//                             </div>

//                         </div>


//                         <div className="CNP-1-Note" ref={this.point2} >
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>
//                         <div className="CNP-btnBox-regular" ref={this.target2}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="prevBTN" id="CNP-P2" onClick={this.backPart}><img src={back} alt="قبلی" /> قبلی </button>
//                                 <button className="nextBTN" id="CNP-N2" onClick={this.nextPart}> بعدی </button>
//                             </div>

//                         </div>
//                     </div>




//                     {/* STEP 3 */}

//                     <div className="CNP-3" ref={this.CNP3} >
//                         <div className="CNP-title" >
//                             کارت تجاری
//                         </div>
//                         <div className="CNP-desc-text" >
//                             <h1>رنگها را پیدا کن</h1>
//                             <h2>سه رنگ دلخواه را انتخاب کن</h2>
//                             <div className="CNP-check-color CNP-check">
//                                 <ul>
//                                     <li>
//                                         <input type="checkbox" id="colors1" />
//                                         <label htmlFor="colors1">
//                                             <img src={color1} alt="رنگها" />
//                                             <span>آبی</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors2" />
//                                         <label htmlFor="colors2">
//                                             <img src={color2} alt="رنگها" />
//                                             <span>سبز</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors3" />
//                                         <label htmlFor="colors3">
//                                             <img src={color3} alt="رنگها" />
//                                             <span>بنفش</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors4" />
//                                         <label htmlFor="colors4">
//                                             <img src={color4} alt="رنگها" />
//                                             <span>صورتی </span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors5" />
//                                         <label htmlFor="colors5">
//                                             <img src={color5} alt="رنگها" />
//                                             <span>قرمز</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors6" />
//                                         <label htmlFor="colors6">
//                                             <img src={color6} alt="رنگها" />
//                                             <span>نارنجی</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors7" />
//                                         <label htmlFor="colors7">
//                                             <img src={color7} alt="رنگها" />
//                                             <span>خاکستری</span>
//                                         </label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="colors8" />
//                                         <label htmlFor="colors8">
//                                             <img src={color8} alt="رنگها" />
//                                             <span>قرمز</span>
//                                         </label>
//                                     </li>


//                                 </ul>

//                             </div>
//                             <h1>قلم ها را پیدا کن</h1>
//                             <h2>سه قلم دلخواه را انتخاب کن</h2>

//                             <div className="CNP-check-font CNP-check">
//                                 <ul>
//                                     <li>
//                                         <input type="checkbox" id="font1" />
//                                         <label htmlFor="font1"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font2" />
//                                         <label htmlFor="font2"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font3" />
//                                         <label htmlFor="font3"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font4" />
//                                         <label htmlFor="font4"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font5" />
//                                         <label htmlFor="font5"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font6" />
//                                         <label htmlFor="font6"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font7" />
//                                         <label htmlFor="font7"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" id="font8" />
//                                         <label htmlFor="font8"><img className="font-padding" src={font} alt="رنگها" /></label>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>


//                         <div className="CNP-1-Note" ref={this.point3} >
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>

//                         <div className="CNP-btnBox-regular" ref={this.target3}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="prevBTN" id="CNP-P3" onClick={this.backPart}><img src={back} alt="قبلی" /> قبلی </button>
//                                 <button className="nextBTN" id="CNP-N3" onClick={this.nextPart}> بعدی </button>
//                             </div>
//                         </div>
//                     </div>




//                     {/* STEP 4 */}

//                     <div className="CNP-4" ref={this.CNP4}>
//                         <div className="CNP-title" >
//                             کارت تجاری
//                         </div>


//                         <div className="CNP-desc-text" >
//                             <h1>کدام طراحی را انتخاب میکنی ؟</h1>
//                             <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>

//                             <div className="CNP-select-design" >

//                                 <input type="radio" id="control_01" name="select" value="1" />
//                                 <label htmlFor="control_01">
//                                     <div className="CNP-label" >
//                                         <div className="CNP-SD-title" >
//                                             <h1>ساده</h1>
//                                             <h2>طراحی فوق العاده</h2>
//                                         </div>
//                                         <div className="CNP-SD-middle" >
//                                             <p>به جز ۳۰ طراحی</p>
//                                             <p>اولیه</p>
//                                             <p>تضمین برگشت پول</p>
//                                         </div>
//                                         <div className="CNP-SD-end" >
//                                             انتخاب
//                                             </div>
//                                     </div>
//                                 </label>



//                                 <input type="radio" id="control_02" name="select" value="2" />
//                                 <label htmlFor="control_02">
//                                     <div className="CNP-label">
//                                         <div className="CNP-SD-title" >
//                                             <h1>ساده</h1>
//                                             <h2>طراحی فوق العاده</h2>
//                                         </div>
//                                         <div className="CNP-SD-middle" >
//                                             <p>به جز ۳۰ طراحی</p>
//                                             <p>اولیه</p>
//                                             <p>تضمین برگشت پول</p>
//                                         </div>
//                                         <div className="CNP-SD-end" >
//                                             انتخاب
//                                             </div>
//                                     </div>
//                                 </label>


//                                 <input type="radio" id="control_03" name="select" value="3" />
//                                 <label htmlFor="control_03">
//                                     <div className="CNP-label">
//                                         <div className="CNP-SD-title" >
//                                             <h1>ساده</h1>
//                                             <h2>طراحی فوق العاده</h2>
//                                         </div>
//                                         <div className="CNP-SD-middle" >
//                                             <p>به جز ۳۰ طراحی</p>
//                                             <p>اولیه</p>
//                                             <p>تضمین برگشت پول</p>
//                                         </div>
//                                         <div className="CNP-SD-end" >
//                                             انتخاب
//                                             </div>

//                                     </div>
//                                 </label>


//                             </div>




//                         </div>
//                         <div className="CNP-1-Note" ref={this.point4} >
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>
//                         <div className="CNP-btnBox-regular" ref={this.target4}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="prevBTN" id="CNP-P4" onClick={this.backPart}><img src={back} alt="قبلی" /> قبلی </button>
//                                 <button className="nextBTN" id="CNP-N4" onClick={this.nextPart}> بعدی </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* STEP 5 */}

//                     <div className="CNP-5" ref={this.CNP5}>
//                         <div className="CNP-title" >
//                             کارت تجاری
//                                 </div>
//                         <div className="CNP-desc-text" >
//                             <h1>زمانبندی</h1>
//                             <h2>دوست داری پروژه ات چند روزه آماده بشه ؟</h2>

//                             <div className="CNP-duration" >

//                                 <input type="radio" id="duration1" name="select" value="1" />
//                                 <label htmlFor="duration1">
//                                     <div className="CNPD-title" >
//                                         <p>استاندارد ۷ روز</p>
//                                         <h1>رایگان</h1>
//                                     </div>
//                                 </label>



//                                 <input type="radio" id="duration2" name="select" value="2" />
//                                 <label htmlFor="duration2">

//                                     <div className="CNPD-title" >
//                                         <p>4 روز </p>
//                                         <h1>250000 ت</h1>
//                                     </div>
//                                 </label>


//                                 <input type="radio" id="duration3" name="select" value="3" />
//                                 <label htmlFor="duration3">

//                                     <div className="CNPD-title" >
//                                         <p>2 روز </p>
//                                         <h1>450000 ت</h1>
//                                     </div>
//                                 </label>

//                                 <input type="radio" id="duration4" name="select" value="3" />
//                                 <label htmlFor="duration4">
//                                     <div className="CNPD-title" >
//                                         <p>۲۴ ساعت </p>
//                                         <h1>900000 ت</h1>
//                                     </div>
//                                 </label>

//                             </div>




//                         </div>
//                         <div className="CNP-1-Note" ref={this.point5} >
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>
//                         <div className="CNP-btnBox-regular" ref={this.target5}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="prevBTN" id="CNP-P5" onClick={this.backPart}><img src={back} alt="قبلی" /> قبلی </button>
//                                 <button className="nextBTN" id="CNP-N5" onClick={this.nextPart}> بعدی </button>
//                             </div>
//                         </div>

//                     </div>

//                     {/* STEP 6 */}

//                     <div className="CNP-6" ref={this.CNP6}>
//                         <div className="CNP-title" >
//                             کارت تجاری
//                                     </div>

//                         <div className="CNP-invoice" >
//                             <h1>صورتحساب</h1>
//                             <ul>
//                                 <li> دسته بندی :<span>لوگو</span></li>
//                                 <li>نوع پروژه : <span>سوپراستار</span></li>
//                                 <li>عنوان پروژه :<span>طراحی لوگو</span></li>
//                                 <li>زمان : <span>7 روز - رایگان</span></li>
//                                 <li>هزینه :<span>150000 ت</span></li>
//                             </ul>
//                             <p>
//                                 مجموع هزینه ها :
//                                             <h2>
//                                     1800000 ت
//                                             </h2>
//                             </p>
//                         </div>


//                         <div className="CNP-1-Note" ref={this.point6}>
//                             <h1>توجه : لطفا یکی از دسته بندیهای بالا را انتخاب کن</h1>
//                             <p>- اطلاعات در مورد پروژه ای که قصد داری انجامش بدی</p>
//                             <p>- لطفا مستندات مناسبی رو برای پروژه ات انتخاب کن</p>
//                         </div>
//                         <div className="CNP-btnBox-regular" ref={this.target6}>
//                             <div className="CNP-100" >
//                                 <img src={success} alt="موفق" />
//                                 <p>
//                                     <span>گارانتی برگشت 100% پول</span>
//                                     <span>طراحی مناسب بود یا پول رو برگردون</span>
//                                 </p>
//                             </div>
//                             <div className="CNP-BTNS" >
//                                 <button className="prevBTN" id="CNP-P6" onClick={this.backPart}><img src={back} alt="قبلی" /> قبلی </button>
//                                 <button className="paymentBTN" id="CNP-N6" onClick={this.paymentHandler}> پرداخت </button>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>

//         );
//     }
// }

// export default CreateNewProject;