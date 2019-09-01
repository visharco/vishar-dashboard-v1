import React, { Component } from 'react';
import Button from '../../component/common/Button/Button';
import {browserHistory } from 'react-router'
import GetApi from '../../controler/getToApi';



import './style.css'


class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getall:[],
            type:''
        }
    }

    componentWillMount = async() => {
     
    }

    getInfo = async (type) => {
        console.log(type)
        if(type === 'customer'){
            const  res = await GetApi('projects/count/all/customer');
            // console.log(res)
            if(res.status === 200){
                await this.setState({
                    getall:res.data,  
                })
            } else if(res.status === 401) {
    
                localStorage.removeItem('@authorization_vishar');   // remove local storage.
                //  browserHistory.push('/login');      
                window.location.reload();
    
            }
        } else if (type === 'designer') {
            const  res = await GetApi('projects/count/all');
            // console.log(res)
            if(res.status === 200){
                await this.setState({
                    getall:res.data,  
                })
            } else if(res.status === 401) {
    
                localStorage.removeItem('@authorization_vishar');   // remove local storage.
                //  browserHistory.push('/login');      
                window.location.reload();
    
            } 
        }
    }


    componentDidMount = async () => {
        const  res = await GetApi('profile/init');
        // console.log(res)
        if(res.status === 200){
            await this.setState({
                type:res.data.type, 
                name: res.data.name
            });

            this.getInfo(res.data.type)
        } else if(res.status === 401) {

            localStorage.removeItem('@authorization_vishar');   // remove local storage.
            //  browserHistory.push('/login');      
            window.location.reload();

        } 



    }



    callSubmit = () => {
        browserHistory.push('/createNewProject')
    }

    callProject = () => {
        browserHistory.push('/DesignerSingleProject')
    }


    render() {

        const renderCustomer = (
            <div className=" ">
                  <div className="d-user-container">
                    <h2>
                        به حساب کاربری خود در ویشار خوش آمدید.
                    </h2>
                    <p>
                        جهت ثبت پروژه جدید، بر روی لینک زیر کلیک نمایید.
                    </p>
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'ایجاد پروژه جدید'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        click={this.callSubmit}
                        borderRadius="10px"
                        color="#fff"
                        id={'1'}
                    />  
                  </div>
                
                <div className="row">
                    <div className="d-cards">
                        <div className="d-icon-container d-green">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3>پروژه های ثبت شده</h3>
                        <h1>{this.state.getall.projects}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-blue">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <h3>طرح های دریافتی</h3>
                        <h1>{this.state.getall.projects_design}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-orange">
                            <i class="fas fa-gavel"></i>
                        </div>
                        <h3>طرح های نهایی شده</h3>
                        <h1>{this.state.getall.projects_final}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-purple">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3>پیام های دریافتی</h3>
                        <h1>0</h1>
                        <p>عدد</p>
                    </div>


                  </div>

                <div className="d-user-container d-bg-blue">
                    <div className="row">
                        <div className="col-50">
                            <h2>بلاگ ویشار</h2>
                            <p>اخبار تکنولوژی و جدیدترین مطالب آموزشی در زمینه طراحی را در بلاگ ویشار مطالعه نمایید</p>
                            <div className="btn btn-fff" onClick={() => window.open("http://www.blog.vishar.com")}>
                                <p>مشاهده بلاگ</p>
                            </div>
                        </div>
                        <div className="col-50">
                            <div className="blog-mock"></div>
                        </div>
                    </div>
                </div>


         </div>
        )


        const renderDesginer = (
           
            <div className="  bg-f7f7f7">
 
                <div className="d-user-container">
                    <h3>{this.state.name}</h3>
                    <h2>
                        به حساب کاربری خود در ویشار خوش آمدید.
                    </h2>
                    <p>
                        جهت مشاهده پروژه های موجود در ویشار، بر روی لینک زیر کلیک نمایید
                    </p>
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'مشاهده پروژه ها'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        click={this.callProject}
                        borderRadius="10px"
                        color="#fff"
                        id={'1'}
                        />  
                </div>

                  <div className="row">
                    <div className="d-cards">
                        <div className="d-icon-container d-green">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h3>پروژه های انجام داده</h3>
                        <h1>{this.state.getall.projects}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-blue">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <h3>اتد های ارسالی</h3>
                        <h1>{this.state.getall.projects_design}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-orange">
                            <i class="fas fa-gavel"></i>
                        </div>
                        <h3>طرح های نهایی شده</h3>
                        <h1>{this.state.getall.project_final}</h1>
                        <p>عدد</p>
                    </div>
                    <div className="d-cards">
                        <div className="d-icon-container d-purple">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3>پیام های دریافتی</h3>
                        <h1>0</h1>
                        <p>عدد</p>
                    </div>


                  </div>

                <div className="d-user-container d-bg-blue">
                    <div className="row">
                        <div className="col-50">
                            <h2>بلاگ ویشار</h2>
                            <p>اخبار تکنولوژی و جدیدترین مطالب آموزشی در زمینه طراحی را در بلاگ ویشار مطالعه نمایید</p>
                            <div className="btn btn-fff" onClick={() => window.open("http://www.blog.vishar.com")}>
                                <p>مشاهده بلاگ</p>
                            </div>
                        </div>
                        <div className="col-50">
                            <div className="blog-mock"></div>
                        </div>
                    </div>
                </div>

                
                
         

           


         </div>
        )


        return (
            <div className="SingleProject bg-f7f7f7">
                {/* <div className="SP-title" >
                    داشبورد
                </div> */}
                {this.state.type ? this.state.type === 'customer' ? renderCustomer :renderDesginer : ''}
              


               
            </div>
        );
    }
}

export default DashboardComponent;