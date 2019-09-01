import React, { Component } from 'react';

import { browserHistory } from 'react-router';

import logoo1 from './../../../assets/images/logoo1.png'
import logoo2 from './../../../assets/images/logoo2.png'
import logoo3 from './../../../assets/images/logoo3.png'

import DesignerLogoTitle from '../DesignerLogoTitle/DesignerLogoTitle';
import DesignerLogoPostComment from '../DesignerLogoPostComment/DesignerLogoPostComment.js';
import DesignerLogoDetail from '../DesignerLogoDetail/DesignerLogoDetail';
import DesignerLogoComment from '../DesignerLogoComment/DesignerLogoComment';

import './style.css';



class DesignerLogoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designerComments: 20,
            designerLikes: 10,
            designerViews: 12,
            designerName: 'امید آرمانی',
            designerLevel: '1'
        }



    }

    aboutmeText = React.createRef();
    profileText = React.createRef();
    appreciateText = React.createRef();

    appreciate = React.createRef();
    aboutme = React.createRef();
    profile = React.createRef();


    descriptionHandler = (e) => {

        if (e.target.id === 'aboutme') {
            this.aboutmeText.current.style.display = 'block'
            this.profileText.current.style.display = 'none'
            this.appreciateText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.appreciate.current.style.backgroundColor = "transparent"
            this.profile.current.style.backgroundColor = "transparent"
        }
        else if (e.target.id === 'profile') {
            this.aboutmeText.current.style.display = 'none'
            this.profileText.current.style.display = 'block'
            this.appreciateText.current.style.display = 'none'

            e.target.style.backgroundColor = "#D8D8D8"
            this.appreciate.current.style.backgroundColor = "transparent"
            this.aboutme.current.style.backgroundColor = "transparent"
        }
        else if (e.target.id === 'appreciate') {
            this.aboutmeText.current.style.display = 'none'
            this.profileText.current.style.display = 'none'
            this.appreciateText.current.style.display = 'block'

            e.target.style.backgroundColor = "#D8D8D8"
            this.profile.current.style.backgroundColor = "transparent"
            this.aboutme.current.style.backgroundColor = "transparent"
        }
    }

    goToLogo = () => {
        browserHistory.push('/designer-logo');
    }

   


    render() {
        return (
            <div className="DesignerLogoes" >
                <div className="DL-title" >
                    <DesignerLogoTitle />
                </div>

                <div className="DL-logos" >
                    <img src={logoo1} alt="لوگو" />
                    <img src={logoo2} alt="لوگو" />
                    <img src={logoo3} alt="لوگو" />
                </div>
                <div className="DL-comment-box" >
                    <div className="DL-up">
                        <DesignerLogoDetail />
                        <DesignerLogoPostComment />
                    </div>
                    <div className="DL-down" >
                        <DesignerLogoComment />
                        <DesignerLogoComment />
                        <DesignerLogoComment />
                    </div>
                </div>
            </div>

        );
    }
}

export default DesignerLogoes;