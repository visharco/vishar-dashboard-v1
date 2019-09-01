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
 import NoProject from '../../../component/noProject/noProject'



import './style.css';
import DesignerProject from '../DesignerProject/DesignerProject';
import GetToAPI from '../../../controler/getToApi'

class DesignerSingleProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    

    componentWillMount = async() => {


        const res = await GetToAPI('projects/designer');
        await this.setState({
            data:res.data
        })
        // console.log(res.data)

    }


    render() {

        const renderProjects = (
               this.state.data ? this.state.data.map((data,index) => {
                return <DesignerProject data={data} index={index} status={data.status} statusText={' در صف انجام'} />
               }) : <NoProject />
        )
        return (
            <div className="DesignerSingleProject">
                <div className="DSP-title" >
                    پروژه های من
                </div>
                <div className="DSP-body" >
                    <div className="DSP-up" >

                        <div className="DSP-search-box " >
                            {/*<input type="text" />*/}
                            {/*<img src={search} alt="جستجو" />*/}
                        </div>
                   
                    </div>
                    <div className="DSP-down" >
                        {/* <DesignerProject status={'Completed'} statusText={'کامل شده'} />
                        <DesignerProject status={'Working'} statusText={'در حال انجام '} />*/}

                        {renderProjects}

                    </div>
                    
                        {/* <NoProject /> */}


                </div>
            </div>
        );
    }
}

export default DesignerSingleProject;