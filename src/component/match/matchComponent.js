import React, { Component } from 'react';
import './style.css';
import Input from '../common/input/Input';

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
                    <Input 
                        type={'text'} 
                        name={'email'}
                        placeholder={'Email'}
                        changed={this.changedHandler}
                        error={this.state.forgetEmailError} // if you want show error pass error text to this props
                    />

                    </div>
                    <div className="col-50">dddd</div>
                </div>
            </div>
         );
    }
}
 
export default MatchComponent;