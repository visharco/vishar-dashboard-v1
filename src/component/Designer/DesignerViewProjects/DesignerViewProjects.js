import React, { Component } from 'react';

//
//
//

import charlz from '../../../assets/images/charlz.png';
import img1 from '../../../assets/images/img1.png';
import img2 from '../../../assets/images/img2.png';
import tikw from '../../../assets/icons/tikw.svg';
import closethin from '../../../assets/icons/closethin.svg';
import report from '../../../assets/icons/report.svg';

//
//compoents
//


import './style.css';


class DesignerViewProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="DesignerViewProjects">

                <div className="DVP-body" >
                    <div className="DVP-sliders" >
                        <img src={img1} alt="طرحها" />
                        <img src={img2} alt="طرحها" />
                    </div>
                    <div className="DVP-left" >
                        <img className="DVPL-close" src={closethin} alt="بستن" onClick={this.props.closeProject} />
                        <div className="DVP-report" >
                            <img src={report} alt="گزارش" />
                            گزارش
                        </div>


                            <div className="DVPL-title" >
                                <div className="DVPLT-up" >
                                    <img src={charlz} alt="عکس طراح" />
                                    <div className="DVPLT-desc" >
                                        <div className="DVPLT-text" >
                                            <p>طراحی توسط</p>
                                            <h2>سارا حسینی</h2>
                                        </div>
                                        <span>۳ ساعت قبل</span>
                                    </div>
                                </div>
                                <div className="VLP-message" >
                                    فرستادن پیام
                            </div>
                            </div>
                            <div className="DVPL-desc" >
                                <h1>توضیحات</h1>
                                <p>
                                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد

                                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد

                            </p>
                            </div>
                            <div className="DVPL-rating" >

                                <div className="rating">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label className="full" htmlFor="star5" title="عالی ۵ ستاره"></label>

                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label className="full" htmlFor="star4" title="خیلی خووب ۴ ستاره"></label>

                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label className="full" htmlFor="star3" title="خوب ۳ ستاره"></label>

                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label className="full" htmlFor="star2" title="بد نیست ۲ ستاره"></label>

                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label className="full" htmlFor="star1" title="بد ۱ ستاره"></label>
                                </div>
                            </div>
                            <div className="DVPL-action" >
                                <h1>آیا این طرح را بعنوان طرح نهایی انتخاب کرده اید ؟</h1>
                                <p>
                                    زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
                                </p>
                                <div className="DVPL-button" >
                                    <img src={tikw} alt="تیک" />
                                    انتخاب طرح نهایی
                            </div>
                            </div>
                       

                    </div>




                </div>

            </div>
        );
    }
}

export default DesignerViewProjects;


// *********************************


// <ViewProjects closeProject={this.closeModalProject} />


// ****************************