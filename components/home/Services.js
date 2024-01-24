import React from 'react'
import Image from 'next/image'
import xcx from '../../public/img/icons/bar-chart.svg';
import { connect } from 'react-redux';
import{createStructuredSelector} from 'reselect';
import{selectServiceData} from '../../redux/services/serviceSelector';




const Services = ({servicesData}) => {
    //console.log('serv',servicesData)
    
   

    return (
        
            <section className="wrapper bg-light">
                <div className="container-fluid  no-padding">
                    <div className="position-relative">
                        <div className="row gx-md-5  text-center c-service">
                        {servicesData.map((i,index)=>

                            <div key={index} className="col-md-6 col-xl-3 stylepadding">
                                <div className="card shadow-lg">
                                    <div className="service-color1">
                                    <div className="card-body card-body-bg">
                                     
                                {/*<Image
                                        className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
                                        width={40}
                                        height={40}
                                        alt="171x180"
                                        src={i4}
                                />*/}

                                        <h2>{i.serviceName}</h2>
                                        <ul className="list-unstyled  mb-0 card-height-400">
                                            {i.serviceCatgory.map((c,index)=>
                                                <li key={index}><a> {c.catName}</a></li>
                                            )}
                                        </ul>
                                    </div>
                                    </div> 
                                </div>
                                
                            </div>
                        )}
                            
                           
                            </div>
                            
                        </div>
                        
                    </div>
                    
             
                
            </section>
        
    )
}
const mapStateToProps=createStructuredSelector({
    servicesData:selectServiceData
})
export default connect(mapStateToProps) (Services)

