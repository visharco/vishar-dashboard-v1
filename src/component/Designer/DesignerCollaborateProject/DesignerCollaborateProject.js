import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//
//
//


import search from './../../../assets/icons/search.svg'
import plus from './../../../assets/icons/plus.svg'

//
//compoents
//
// import NoProject from '../../../component/noProject/noProject'



import './style.css';
import DesignerProject from '../DesignerProject/DesignerProject';


class DesignerCollaborateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    createNewProject =() =>{
        browserHistory.push('/createNewProject');

    }

    render() {
        return (
            <div className="DesignerCollaborateProject">
                <div className="DCP-title" >
                    پروژه های همکاری
                </div>
                <div className="DCP-body" >
                    <div className="DCP-up" >

                        <div className="DCP-search-box " >
                            <input type="text" />
                            <img src={search} alt="جستجو" />
                        </div>
                        <div className="DCP-create-project-btn" onClick={this.createNewProject} >
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div className="DCP-down" >
                        <DesignerProject status={'Completed'} statusText={'کامل شده'} />
                        <DesignerProject status={'Working'} statusText={'در حال انجام '} />
                        <DesignerProject status={'Pending'} statusText={' در صف انجام'} />
                    </div>
                    
                        {/* <NoProject /> */}


                </div>
            </div>
        );
    }
}

export default DesignerCollaborateProject;