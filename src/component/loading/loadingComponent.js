import React , {Component} from 'react';
import './style.css';
import loadingimg from '../../assets/images/loading.gif'


class LoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            percent : this.props.progress + '%'
         }
    }
    render() { 

        const renderPercent = (
            <div>
                   <div className="loadingPercent">
                            <div className="lp" style={{width:this.props.progress}}>
                              
                            </div>
                        </div>
                        <h3>{this.props.progress}</h3>
            </div>
        )
        return ( 
            <div className="loading-full-screen">
                    <div className="loading-container">
                        <img src={loadingimg} className="loading-image" />
                        <h2>درحال بارگذاری</h2>
                        <p>لطفا کمی منتظر بمانید</p>
                        {this.props.progress ?  renderPercent : ''}
                    </div>
                  
            </div>
         );
    }
}
 
export default LoadingComponent;