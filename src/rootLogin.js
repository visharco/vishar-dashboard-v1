
import React, { Component } from 'react';

 
import DashboardMenu from './component/dashboardMenu/dashboardMenu';
import HeaderComponent from './component/header/header';
import DesignerDashboardMenu from './component/Designer/DesignerDashboardMenu/DesignerDashboardMenu';


class RootLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div > 
                <div className="" >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default RootLoginComponent;