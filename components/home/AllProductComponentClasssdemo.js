import React from 'react'
import {Button,Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const {Title,Text}=Typography

const AllProductComponent = ({serviceAllData}) => {
    
    
    const[tabContent,setTabConetent]=React.useState([])
    const [id,setId]=React.useState('1')
    
    /*React.useEffect(() => {
        const [tabContent1]=serviceAllData.serviceContent.filter(i=>i.tabLink.KY==id).map(d=>d.tabContent)  
        setTabConetent(tabContent1)
       // console.log('tabid2',tabContent)
        
    }, [id])*/
    //console.log('tabid',id)
    return (
        <>
            <section className="wrapper  all-product" >
                <div className="container py-10 py-md-12">
                    <div className="row">
                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                            <Title level={4} className="text-l-blue">{serviceAllData.header.title}</Title>
                            <Title level={1} className="text-white mt-0">{serviceAllData.header.desc1}</Title>
                            {/*<p className="mb-7">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula.</p>*/}
                        </div>
                    </div>
                    <div className="grid grid-view projects-masonry">
                        <div className="isotope-filter filter mb-10 text-start text-md-center">
                            <p>Filter:</p>
                            <ul>
                                {serviceAllData.serviceContent.map((data,index)=>
                                <li key={index}><a className={id==data.id?'active filter-item':'filter-item'} onClick={()=>setId(data.id)} >{data.tabTitle}</a></li>
                                )}
                            </ul>
                        </div>
                        <div>
                            <div className="row gx-md-8 gx-xl-9 gy-8 gy-xl-9 isotope">
                                {serviceAllData.serviceContent.filter(d=>d.id==id).map(v=>
                                v.tabContent.map((t,index)=>

                                <div key={index} className="project item col-md-6 col-xl-4 proj-animation ">
                                    <div className="card k-card">
                                        <div class="card-body">
                                            <div className="d-flex flex-row k-content">
                                                <div>
                                                    <img src="./assets/img/icons/medal.svg" className="svg-inject icon-svg icon-svg-sm text-yellow me-4" alt="" />
                                                </div>
                                                <div>
                                                    
                                                    <h4 className="mb-2 text-white">{t.serviceTitle}</h4>
                                                    <p className="mb-2 text-white">{t.serviceDesc}</p>
                                                    <a  className="hover link-l-blue">Learn More<RightOutlined className="arrow-animation"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                </div>
                                )
                                
                                )}
                                
                                
                                
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProductComponent
