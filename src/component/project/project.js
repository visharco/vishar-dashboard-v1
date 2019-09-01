import React, { Component } from 'react';
import { browserHistory } from 'react-router';


import defualtDesing from '../../assets/icons/ly.svg'

import './style.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToProjectDetail(id)  {
        browserHistory.push('/projectDetail/' + id);
        // browserHistory.push({ pathname: '/projectDetail', state: this.props.id });
    }

    getStatus = (key) => { 
        // console.log(key)
        switch (key) {
            case 'active':
                return 'تایید شده'             
            case 'finish':
                return 'اتمام یافته' 
            case 'pending':
                return 'درحال بررسی' 
    
            default:
                return null 
        }
    }
    render() {
        return (
            <div key={this.props.id} className="project" onClick={() => this.goToProjectDetail(this.props.data.id)} >
                <div className="p-right" >
                    {/* <img className="image-of-project" src={defualtDesing} alt="طرح"  /> */}
                    <div className="image-of-project " style={{backgroundImage:'url(' + this.props.data.image + ')'}}></div>
                    <div className="p-right-title" >
                        <div className="p-right-text" >
                            <div className="p-status-box" >
                                <h1>{this.props.data.title}</h1>
                                <div className="project-details-number">
                                    <p className={this.props.data.status} >{this.getStatus(this.props.data.status)}</p>
                                    <p className="count-desgin">{this.props.data.count_designs} طرح</p>
                                </div>
                            </div>
                            <p>
                                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است */}
                                {this.props.data.desc}
                            </p>
                        </div>
                        <div className="p-right-tags" >
                            <p>{this.props.data.invoice.category}</p>
                        </div>
                    </div>



                </div>

            </div>
        );
    }
}

export default Project;




/*
=====================================================================================
How can use this button : ------->


           <Project status={'completed'} statusText={'کامل شده'} />


=====================================================================================

*/