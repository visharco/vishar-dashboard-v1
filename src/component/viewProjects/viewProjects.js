import React, {Component} from 'react';
import GetToAPI from '../../controler/getToApi';
import PostToApi from "../../controler/postToApi";
import SweetAlert from "sweetalert-react";
//
//
//

import charlz from '../../assets/images/charlz.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import tikw from '../../assets/icons/tikw.svg';
import closethin from '../../assets/icons/closethin.svg';
import report from '../../assets/icons/report.svg';
import loadingImage from '../../assets/images/loading-image.gif'
//
//compoents
//


import './style.css';


class ViewProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: '',
            image: loadingImage,
            desc: '',
            avatar: loadingImage,
            isSelected: false

        }
    }

    componentWillMount = async () => {
        const res = await GetToAPI('site/designer/portfolio/' + this.props.id)

        await this.setState({
            data: res.data,
            name: res.data.user.name,
            image: res.data.image,
            psd: res.data.psd,
            tif: res.data.tif,
            desc: res.data.desc,
            avatar: res.data.user.image_thumb,
            isSelected: res.data.is_selected,
            is_finish: res.data.is_finish
        })

    }


    _finalproject = async () => {
        let data = new FormData();
        data.append('project_design_id', this.props.id);
        const res = await PostToApi(data, 'projects/select/final/design');
        if (res.status === 200) {
            this.setState({
                alertText: 'کاربر گرامی این طرح به عنوان طرح نهایی انتخاب شد.',
                show: true,
                isSelected: true,
                is_finish: true,
            });
        } else
            this.setState({
                alertText: res.error,
                show: true
            });
    };

    render() {

        const _renderDownloadFile = (
            <div>
                <br/>
                <div onClick={() => window.location = this.state.psd} className="btn-desgin-selected ">
                    دانلود فایل psd
                </div>
                <br/>
                <div onClick={() => window.location = this.state.tif} className="btn-desgin-selected ">
                    دانلود فایل tif
                </div>
            </div>


        )
        return (
            <div className="ViewProjects">
                <SweetAlert
                    show={this.state.show}
                    title="اعلان"
                    text={this.state.alertText}
                    onConfirm={() => this.setState({show: false})}
                />
                <div className="VP-body">
                    <div className="VP-sliders">
                        <img src={this.state.image} alt="طرحها"/>
                    </div>
                    <div className="VP-left">
                        <img className="VPL-close" src={closethin} alt="بستن" onClick={this.props.closeProject}/>
                        {/*<div className="VP-report">*/}
                        {/*    <img src={report} alt="گزارش"/>*/}
                        {/*    گزارش*/}
                        {/*</div>*/}


                        <div className="VPL-title">
                            <div className="VPLT-up">
                                <img src={this.state.avatar} alt="عکس طراح"/>
                                <div className="VPLT-desc">
                                    <div className="VPLT-text">
                                        <p>طراحی توسط</p>
                                        <h2> {this.state.name}</h2>
                                    </div>
                                    {/* <span>۳ ساعت قبل</span> */}
                                </div>
                            </div>
                            {/* <div className="VLP-message" >
                                    فرستادن پیام
                                </div> */}
                        </div>
                        <div className="VPL-desc">
                            <h1>توضیحات</h1>
                            <p>
                                {this.state.data.desc}
                            </p>
                        </div>
                        {/*<div className="VPL-rating">*/}

                        {/*    <div className="rating">*/}
                        {/*        <input type="radio" id="star5" name="rating" value="5"/>*/}
                        {/*        <label className="full" htmlFor="star5" title="عالی ۵ ستاره"></label>*/}

                        {/*        <input type="radio" id="star4" name="rating" value="4"/>*/}
                        {/*        <label className="full" htmlFor="star4" title="خیلی خووب ۴ ستاره"></label>*/}

                        {/*        <input type="radio" id="star3" name="rating" value="3"/>*/}
                        {/*        <label className="full" htmlFor="star3" title="خوب ۳ ستاره"></label>*/}

                        {/*        <input type="radio" id="star2" name="rating" value="2"/>*/}
                        {/*        <label className="full" htmlFor="star2" title="بد نیست ۲ ستاره"></label>*/}

                        {/*        <input type="radio" id="star1" name="rating" value="1"/>*/}
                        {/*        <label className="full" htmlFor="star1" title="بد ۱ ستاره"></label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="VPL-action">
                            <h1>آیا این طرح را بعنوان طرح نهایی انتخاب کرده اید ؟</h1>
                            <p>
                                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                طراحی اساسا مورد استفاده قرار گیرد
                            </p>
                            {!this.state.is_finish ?
                                <div className="VPL-button" onClick={this._finalproject}>
                                    <img src={tikw} alt="تیک"/>
                                    انتخاب طرح نهایی
                                </div> :
                                this.state.isSelected ?
                                    <div>
                                        <div className="btn-desgin-selected ">
                                            <img src={tikw} alt="تیک"/>
                                            این طرح به عنوان طرح نهایی انتخاب شد
                                        </div>
                                        {_renderDownloadFile}
                                    </div> : ''
                            }
                        </div>


                    </div>


                </div>

            </div>
        );
    }
}

export default ViewProjects;


// *********************************


// <ViewProjects closeProject={this.closeModalProject} />


// ****************************