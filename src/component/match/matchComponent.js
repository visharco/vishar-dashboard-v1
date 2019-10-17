import React, { Component } from 'react';
import './style.css';
import Input from '../common/input/Input';
import CKEditor from "react-ckeditor-component";


class MatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    onBlur = (evt,name) => {
        console.log("onBlur event called with event info: ", evt);
        console.log(this.state[name])
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
                        name={'title'}
                        placeholder={'عنوان مسابقه'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />
                  
                    <p>توضیحات مسابقه</p>
                    <div className="ckeditor-container">
                        <CKEditor 
                                name='content'
                                activeClass="p10" 
                                content={this.state.content} 
                                
                                config={{
                                    // removeButtons: 'Styles, about, Format',
                                    // toolbar: [ [ 'Cut','Copy','Paste' ,'Bold','Italic' , 'Underline', 'List' ] ],
                                    language : ['fa']
                                }}
                                events={{
                                    "blur": (e) => this.onBlur(e,'content'),
                                    "afterPaste": this.afterPaste,
                                    "change":(e) => this.onChange(e,'content')
                                }}
                            />
                    </div>
                    <Input 
                        type={'text'} 
                        name={'title'}
                        placeholder={'بودجه برگزاری'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />
                    <Input 
                        type={'text'} 
                        name={'title'}
                        placeholder={'تلفن تماس'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />
                    <Input 
                        type={'text'} 
                        name={'title'}
                        placeholder={'پست الکترونیک'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />
                    <Input 
                        type={'text'} 
                        name={'title'}
                        placeholder={'نشانی وب سایت'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />

                    </div>
                    <div className="col-50">attach file palce</div>
                </div>
            </div>
         );
    }
}
 
export default MatchComponent;