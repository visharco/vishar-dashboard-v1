import React, { Component } from 'react';
import './style.css';
 
import Button from '../../common/Button/Button';
 
import GetToApi from '../../../controler/getToApi'; 
import Project from './projectComponent';


class AllProjectsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentWillMount = async() =>{
        const res= await GetToApi('site/projects');
        // console.log(res.data)
        this.setState({
            projects : res.data
        })
    }

    showProject (id)  {
        window.location = 'http://dashboard.vishar.com/DesignerProjectDetail/'+ id
    }


    render() { 


        const renderProjects = (
            this.state.projects ? this.state.projects.map((data,index) => {
            return <Project data ={data}/>
            }) : ''
         )
        
        return ( 
           <div className="project-container">
                   <div className="DSP-title" >
                    لیست پروژه ها
                </div>

                 {renderProjects}
           </div>
         );
    }
}
 
export default AllProjectsComponent;