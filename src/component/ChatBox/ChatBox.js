import React, { Component } from 'react';




import './style.css';
import MessageBox from '../MessageBox/MessageBox';
import MyMessageBox from '../myMessageBox/myMessageBox';
import clip from './../../assets/icons/clip.svg';
import deleted from '../../assets/icons/delete.svg'
import slide2 from './../../assets/images/slide2.png'


class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

  

    messageInputFocus = () => {

    }


    render() {
        return (
            <div className="ChatBox"  >
                <div className="CBX-title" >
                    پیامها
                </div>
                <div className="CBX-body" >
                    <MessageBox />
                    <MyMessageBox />
                    <MessageBox />
                </div>
                <div className="CBX-actions" >
                    <textarea className="CBX-textarea" placeholder="پیام خود را اینجا بنویسید ..." />
                    <div className="CBX-buttons" >
                        <img     src={clip} alt="ضمیمه" />
                        <button className="CBX-send" >
                            فرستادن پیام
                        </button>
                    </div>
                    <div className="CBX-attachs" >
                        <div className="CBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="CBX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="CBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="CBX-delete" src={deleted} alt="حذف" />
                        </div>
                        <div className="CBX-attach" style={{ backgroundImage: 'url(' + slide2 + ')', }} >
                            <img className="CBX-delete" src={deleted} alt="حذف" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBox;


