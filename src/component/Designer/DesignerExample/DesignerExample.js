import React, { Component } from 'react';

//
//
//

import img1 from '../../../assets/images/img1.png';
import img2 from '../../../assets/images/img2.png';
import example1 from '../../../assets/images/example1.png';
import example2 from '../../../assets/images/example2.png';
import closethin from '../../../assets/icons/closethin.svg';

//
//compoents
//


import './style.css';


class DesignerExample extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="DesignerExample">

                <div className="DE-body" >
                    <img className="DEL-close" src={closethin} alt="بستن" onClick={this.props.closeProject} />
                    <div className="DE-sliders" >
                        <img src={img1} alt="طرحها" />
                        <img src={img2} alt="طرحها" />
                        <img src={example1} alt="طرحها" />
                        <img src={example2} alt="طرحها" />
                    </div>
                    

                </div>

            </div>
        );
    }
}

export default DesignerExample;


// *********************************


// <ViewProjects closeProject={this.closeModalProject} />


// ****************************