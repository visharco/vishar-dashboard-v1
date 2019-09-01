import React, { Component } from 'react';


import close from '../../assets/icons/close.svg'



import './style.css';


class StatusMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            backgroundColor:'',
            color:'',
            text:''

        }
    }

    closeStatus = () => {
        this.setState({
            status : true,
            text:''
        })
    }
 
    componentWillMount(){
        this.setState({
            text: this.props.text,
            status : true
        })
        if(this.props.type ==='success'){
            this.setState({
                backgroundColor:'#6FCF97',
                color:'#308051'
            })
        }
        else if (this.props.type ==='warning'){
            this.setState({
                backgroundColor:'#EED27A',
                color:'#A88823'
            }) 
        }
        else if (this.props.type ==='error'){
            this.setState({
                backgroundColor:'#D15353',
                color:'#333333'
            }) 
        }

    }

    // componentDidMount =() => {
    //     setInterval(() => this.closeStatus(),5000)
         

    // }


    render() {
        return (
            <div>

            {
                this.state.text  ? 
                <div className="StatusMessage  "
                style={{ backgroundColor: this.state.backgroundColor }}>
                    <img src={close} alt="بستن" className="StatusClose" onClick={this.closeStatus} />
                    <p style={{ color: this.state.color }}>
                        {this.state.text}
                    </p>
                </div> : ''
            }
            </div>
        );
    }
}

export default StatusMessage;




/*  How can use the component ----------------------------------------> 


        <StatusMessage  
            type="success || warning || error"
            text="" 
        />
    
 

    */



