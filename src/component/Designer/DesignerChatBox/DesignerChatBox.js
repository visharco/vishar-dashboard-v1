import React, { Component } from 'react';



import './style.css';
import clip from './../../../assets/icons/clip.svg';
import deleted from '../../../assets/icons/delete.svg'
import slide2 from './../../../assets/images/slide2.png'
import DesignerMessageBox from '../DesignerMessageBox/DesignerMessageBox';
import DesignerMyMessageBox from '../DesignerMyMessageBox/DesignerMyMessageBox';


class DesignerChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  

    messageInputFocus = () => {

    }


    render() {
        return (
            <div className="DesignerChatBox"  >
                <div className="DCBX-title" >
                    پیامها
                </div>
                <div className="DCBX-body" >
                    <DesignerMessageBox />
                    <DesignerMyMessageBox />
                    <DesignerMessageBox />

                </div>
                <div className="DCBX-actions" >
                    <textarea className="DCBX-textarea" placeholder="پیام خود را اینجا بنویسید ..." />
                    <div className="DCBX-buttons" >
                        <img     src={clip} alt="ضمیمه" />
                        <button className="DCBX-send" >
                            فرستادن پیام
                        </button>
                    </div>
                    <div className="DCBX-attachs" >
                        <div className="DCBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DCBX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="DCBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DCBX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="DCBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="DCBX-delete" src={deleted} alt="حذف" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesignerChatBox;


