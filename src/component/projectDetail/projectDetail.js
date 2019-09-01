import React, { Component } from 'react';

//
//
// components
//
import MessageBox from '../MessageBox/MessageBox'
import GetApi from '../../controler/getToApi';



import color1 from '../../assets/images/color1.png'
import color2 from '../../assets/images/color2.png'
import color3 from '../../assets/images/color3.png'
import color4 from '../../assets/images/color4.png'
import color5 from '../../assets/images/color5.png'
import color6 from '../../assets/images/color6.png'
import color7 from '../../assets/images/color7.png'
import color8 from '../../assets/images/color8.png'
import font from '../../assets/icons/font.svg'
import download from '../../assets/icons/download.svg';
import deleted from '../../assets/icons/delete.svg';
import slide2 from '../../assets/images/slide2.png'
import passport from '../../assets/images/passport.png'

import './style.css';
import ViewProjects from '../viewProjects/viewProjects';
import NoMessageBox from '../noMessageBox/NoMessageBox';



class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10,
            viewProject: false,
            myProject: [],
            desginId:0

        }
    }

    componentWillMount = async() => {
        let id = window.location.pathname.split('/')[2]
        const res = await GetApi('projects/'+ id);

        // // console.log(res);          // data, error,status
        // // console.log(res.status);   // 200 means success
        // // console.log(res.error);    // show the error from server
        // // console.log(res.data);     // show the data from server
        // console.log(res.data)

        await this.setState({
            myProject:res.data
        })
    }

    briefText = React.createRef();
    designText = React.createRef();
    messagesText = React.createRef();

    messages = React.createRef();
    brief = React.createRef();
    design = React.createRef();


    descriptionHandler = (e) => {

        if (e.target.id === 'brief') {
            this.briefText.current.style.display = 'block'
            this.designText.current.style.display = 'none'
            // this.messagesText.current.style.display = 'none' // TODO must be active

            e.target.style.backgroundColor = "#D8D8D8"
           // this.messages.current.style.backgroundColor = "#f1f1f1"
            this.design.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'design') {
            this.briefText.current.style.display = 'none'
            this.designText.current.style.display = 'block'
           // this.messagesText.current.style.display = 'none' // TODO must be active

            e.target.style.backgroundColor = "#D8D8D8"
           // this.messages.current.style.backgroundColor = "#f1f1f1"  // TODO must be active
            this.brief.current.style.backgroundColor = "#f1f1f1"
        }
        else if (e.target.id === 'messages') {
            this.briefText.current.style.display = 'none'
            this.designText.current.style.display = 'none'
            this.messagesText.current.style.display = 'block'

            e.target.style.backgroundColor = "#D8D8D8"
            this.design.current.style.backgroundColor = "#f1f1f1"
            this.brief.current.style.backgroundColor = "#f1f1f1"
        }
    }

    all = React.createRef();
    rated = React.createRef();
    final = React.createRef();


    openModalProject = async(id) => {
       await this.setState({ viewProject: true, desginId:id })
       // console.log(id)

    }

    closeModalProject = () => {
        this.setState({ viewProject: false })
    }





    render() {

        const renderImagesFiles = (
                this.state.myProject.file ?   this.state.myProject.file.map((data,index) => {
                    return       <div key={index} className="PD-attach" style={{ backgroundImage: 'url(' + data.path + ')', }} >
                                    
                                 </div> 
            }) : ''
        ) 

        const renderDesgins = (
            this.state.myProject.designs ? this.state.myProject.designs.map((data,index) => {
                
                return       <div className={"PDD-box " + data.is_selected} key={index}>
                                    {data.is_selected ?  <div className="check-point">طرح نهایی</div> : ''}
                                   
                                <p> توسط <span>{data.user.name}</span></p>
                                {/* <img src={data.image_thumb} alt="طرحها" onClick={() => window.open(data.image , '_blanck')} /> */}
                                <img src={data.image_thumb} alt="طرحها" onClick={() => this.openModalProject(data.id)} />
                            </div>
            }) : <div className="bg-red">
                 <p>طرحی دریافت نشده است</p>
                </div>
        )

  


        return (


            <div className="ProjectDetail" >

                {this.state.viewProject ? <ViewProjects id={this.state.desginId} closeProject={this.closeModalProject} /> : ''}

                <div className="PD-title" >
                    {this.state.myProject.title}
                </div>

                <div className="PD-desc-up" >
                    <div className="PD-desc-box">
                        {/* <div className="PD-desc-title" onClick={this.descriptionHandler} id="messages" ref={this.messages}>پیامها
                            <span className="PD-desc-number" >4</span>
                        </div> */}
                        <div className="PD-desc-title" onClick={this.descriptionHandler} id="design" ref={this.design}>طرح های دریافتی
                            {/* <span className="PD-desc-number" >10</span> */}
                        </div>
                        <div className="PD-desc-title" onClick={this.descriptionHandler} id="brief" ref={this.brief}>توضیحات
                        </div>
                    </div>
                </div>
                <div className="PD-desc-down">
                    <div className="PD-desc-box2">
                        <div className="PD-desc-texts" ref={this.briefText}>
                            <div className="PD-desc-text" >
                                <h1>توضیحات</h1>
                                <p>
                                   {this.state.myProject.desc}
                                </p>

                            </div>

                          


                            <div className="PD-desc-text" >
                                <h1>استایل ظاهری</h1>
                                <h2>رنگها را پیدا کن</h2>
                                <div className="PD-check-color PD-check">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="colors1" />
                                            <label htmlFor="colors1">
                                                <img src={color1} alt="رنگها" />
                                                <span>آبی</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors2" />
                                            <label htmlFor="colors2">
                                                <img src={color2} alt="رنگها" />
                                                <span>سبز</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors3" />
                                            <label htmlFor="colors3">
                                                <img src={color3} alt="رنگها" />
                                                <span>بنفش</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors4" />
                                            <label htmlFor="colors4">
                                                <img src={color4} alt="رنگها" />
                                                <span>صورتی</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors5" />
                                            <label htmlFor="colors5">
                                                <img src={color5} alt="رنگها" />
                                                <span>قرمز</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors6" />
                                            <label htmlFor="colors6">
                                                <img src={color6} alt="رنگها" />
                                                <span>نارنجی</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors7" />
                                            <label htmlFor="colors7">
                                                <img src={color7} alt="رنگها" />
                                                <span>خاکستری</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="colors8" />
                                            <label htmlFor="colors8">
                                                <img src={color8} alt="رنگها" />
                                                <span>مشکی</span>
                                            </label>
                                        </li>


                                    </ul>

                                </div>
                                <h2>قلم ها را پیدا کن</h2>
                                {/* <div className="PD-fonts" > */}
                                <div className="PD-check-color PD-check">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="font1" />
                                            <label htmlFor="font1">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span>ایران سنس</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="font2" />
                                            <label htmlFor="font2">
                                                <img className="font-padding" src={font} alt="رنگها" />
                                                <span>امید سنس</span>
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

                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="PD-desc-text" >
                                <h1>منابع</h1>
                                <h2>ضمیمه ها</h2>
                                <div className="PD-attachs" >
                               
                                {renderImagesFiles}
                              
                                </div>
                                <h2>توضیحات دیگر</h2>
                                <p>
                                    {this.state.myProject.desc_more}
                                </p>

                            </div>
                            {/* <div className="PD-desc-text" >
                                <h1>نتایج بررسیها</h1>
                                <div className="contest" >
                                    <p className="contest-DL" >
                                        <img src={download} alt="دانلود" />
                                        دانلود قالب
                                    </p>
                                    <h1>طراحی لوگو</h1>
                                </div>

                            </div> */}
                        </div>

                        <div className="PD-desc-texts " ref={this.designText} >
                            <div className="PD-desc-text" >

                                {/* <h1>طرح منتخب </h1>
                                <div className="PD-design">
                                    <div className="PDD-box">
                                        <p> توسط <span>امید آرمانی</span></p>
                                        <img src={passport} alt="طرحها" onClick={this.openModalProject} />
                                    </div>

                                </div> */}
                            </div>
                            <div className="PD-desc-text" >

                                <h1>همه طرح ها </h1>
                                <div className="PD-design">
                                    {renderDesgins}
                                </div>
                            </div>
                        </div>

                        <div className="PD-desc-texts" ref={this.messagesText}>

                        <MessageBox />
                        <MessageBox />
                        <MessageBox />
                        <NoMessageBox />


                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default ProjectDetail;