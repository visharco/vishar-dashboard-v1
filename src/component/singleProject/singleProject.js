import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//
//
//


import search from './../../assets/icons/search.svg'
import plus from './../../assets/icons/plus.svg'

//
//compoents
//
import NoProject from '../../component/noProject/noProject'
import GetApi from '../../controler/getToApi';
 
import './style.css';
import Project from '../project/project';


class SingleProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myProjects:[],

        }
    }
    createNewProject =()=> {
        browserHistory.push('/createNewProject');

    }

    componentWillMount = async() => {

        const res = await GetApi('projects');

         console.log(res);          // data, error,status
        // console.log(res.status);   // 200 means success
        // console.log(res.error);    // show the error from server
        // console.log(res.data);     // show the data from server

        this.setState({
            myProjects:res.data
        })



    }

    render() {

        const renderProject = (
         this.state.myProjects ?     this.state.myProjects.map((data,index) => {
            return <Project status={'Completed'} key={index} data={data} id={data.id} statusText={'کامل شده'} />
         }) : <NoProject />
        )
        return (
            <div className="SingleProject">
                <div className="SP-title" >
                    پروژه های فردی
                </div>
                <div className="SP-body" >
                    <div className="SP-up" >

                        <div className="SP-search-box " >
                            {/*<input type="text" />*/}
                            {/*<img src={search} alt="جستجو" />*/}
                        </div>
                        <div className="SP-create-project-btn" onClick={this.createNewProject} >
                            <p>ایجاد پروژه جدید</p>
                            <img src={plus} alt="افزودن" />
                        </div>
                    </div>
                    <div className="SP-down" >
                        {/* <Project status={'Completed'} statusText={'کامل شده'} /> */}
                        {/* <Project status={'Working'} statusText={'در حال انجام '} />
                        <Project status={'Pending'} statusText={' در صف انجام'} /> */}
                        { renderProject }
                    </div>
                    
                        {/* <NoProject /> */}


                </div>
            </div>
        );
    }
}

export default SingleProject;