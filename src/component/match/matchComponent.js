import React, { Component } from 'react';
import './style.css';
import Input from '../common/input/Input';
import CKEditor from "react-ckeditor-component";


class MatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Message" >
                <div className="M-title" >
                    معرفی مسابقه
                </div>
                <div className="matc-container row" >
                    <div className="col-50">
                    <Input 
                        type={'text'} 
                        name={'email'}
                        placeholder={'Email'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />
                  

                  <CKEditor 
                            name='content'
                            activeClass="p10" 
                            content={this.state.content} 
                            events={{
                                "blur": (e) => this.onBlur(e,'content'),
                                "afterPaste": this.afterPaste,
                                "change":(e) => this.onChange(e,'content')
                            }}
                        />
                        
                    </div>
                    <div className="col-50">dddd</div>
                </div>
            </div>
         );
    }
}
 
export default MatchComponent;