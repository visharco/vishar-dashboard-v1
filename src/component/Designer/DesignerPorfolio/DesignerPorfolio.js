import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import GetToAPI from '../../../controler/getToApi';

//
//
//


import search from './../../../assets/icons/search.svg'

//
//compoents
//
// import NoProject from '../../../component/noProject/noProject'



import './style.css';
import DesignerLogo from '../DesignerLogo/DesignerLogo';
import StatusMessage from '../../StatusMessage/StatusMessage';
import NoPortfilo from '../NoPortfilo/NoPortfilo';
 
class DesignerPorfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            designerLogoStatus:true,
            data:[]
        }
    }


    componentWillMount = async () => {
        const res = await GetToAPI('portfolio');

        await this.setState({
            data : res.data
        })

        // console.log(res.data)
    }

    createNewProject = () => {
        browserHistory.push('/createNewProject');

    }

    goToDesignerLogoes = () => {
        browserHistory.push('/DesignerLogoes');
    }


    render() {

        const renderMyProjects = (
            this.state.data ? this.state.data.map((data,index) => {
                return     <DesignerLogo key={index} data={data} goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />

            }) :<NoPortfilo />
        )
        return (
            <div className="DesignerPorfolio">
                <div className="DPO-title" >
                    نمونه کارهای من
                </div>
                <div className="DPO-body" >
                {/* <StatusMessage  
                    type="success || warning || error"
                    text="" 
                /> */}
    
                    <div className="DPO-up" >

                        <div className="DPO-search-box " >
                            {/*<input type="text" />*/}
                            {/*<img src={search} alt="جستجو" />*/}
                        </div>

                    </div>

                    <div className="DPO-select-logo" >
                        {/* <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} />
                        <DesignerLogo goToDesigns={this.goToDesignerLogoes} designerLogoStatus={this.state.designerLogoStatus} /> */}


                        {renderMyProjects}
                    </div>

                    {/* <div className="pagination" >
                        <p className="pagination-number">1</p>
                        <p className="pagination-number">2</p>
                        <p className="pagination-number pagination-number-selected">3</p>
                        <p className="pagination-number">4</p>
                        <p className="pagination-number">5</p>
                    </div> */}

                    

                </div>
            </div>
        );
    }
}

export default DesignerPorfolio;