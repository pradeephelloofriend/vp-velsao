import React from 'react'
import {Button,Typography } from 'antd';
const {Title,Text}=Typography
import ServiceItem from './service/ServiceItem'
class AllProductComponent extends React.Component {
    constructor(props){
        super()
        this.state={
            id:1,
            tabContent:[],
            tabTitle:'LOAN',
            style:"proj-animation"
        }
        
    }
    componentDidMount(){
        const [data]=this.props.serviceAllData.serviceContent.filter(i=>i.id==this.state.id).map(d=>d.tabContent)
       
        this.setState({
            tabContent:data
        })
    }
    componentDidUpdate(prevState,nextState){
        if (this.state.id!==nextState.id) {
            const [data]=this.props.serviceAllData.serviceContent.filter(i=>i.id==this.state.id).map(d=>d.tabContent)
            this.setState({
            id:this.state.id,
            tabTitle:this.state.tabTitle,    
            tabContent:data
            })
        }
        //console.log('prevState',this.state.id)
        //console.log('nextStte',nextState)
    }
    componentWillUnmount(){
        this.setState({
            style:""
        })
    }
    render(){
        const {id,tabContent,tabTitle}=this.state
        //console.log('service',tabContent)
        const {serviceAllData}=this.props
        return (
            <>
                <section className="wrapper  all-product" >
                    <div className="container py-10 py-md-12">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
        
                                <Title level={4} className="text-l-blue">{serviceAllData.header.title}</Title>
                                <Title level={1} className="text-white mt-0">{serviceAllData.header.desc1}</Title>
                                {/*<p className="mb-7">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula.</p>*/}
                            </div>
                        </div>
                        <div className="grid grid-view projects-masonry">
                            <div className="isotope-filter filter mb-10 text-start text-md-center">
                                <ul>
                                    {serviceAllData.serviceContent.map((data,index)=>
                                    <li key={index}><a className={id==data.id?'active filter-item':'filter-item'} onClick={()=>this.setState({id:data.id,tabTitle:data.tabTitle})} >{data.tabTitle}</a></li>
                                    )}
                                </ul>
                            </div>
                            <div>
                            
                                <div className="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope">
                                
                                    {tabContent.map((t,index)=>
                                    <ServiceItem key={index} tData={t} tabTitle={tabTitle}/>
                                    
                                    
                                    )}
                                    
                                     
                                    
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    
}

export default AllProductComponent
