import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectServiceData} from '../../redux/services/serviceSelector'
import d1 from '../../public/img/photos/about4.jpg'
import {API_PATH} from '../../Global'
 const LoansComponent = ({serviceData}) => {
    const router = useRouter()
    //console.log('serviceData',serviceData) 
    const [filterData]=serviceData.filter(d=>d.serviceCode==router.query.catCode).map(i=>i.serviceCatgory)
    //console.log('service-cat',filterData)
    return (
    <section className="wrapper bg-light">
        <div className="container py-2 py-md-10">
           
            {filterData.map((d,index)=>
            <div key={index} className="row gx-md-2  align-items-center mb-20">
            <div className=" col-lg-2 position-relative">
                
                <Image
                height={150}
                width={150}
                    src={`${API_PATH}assets/image/services/${d.loanHeader[0].lh_image}`}
                    alt="Picture of the author"
                />
            </div>
   
            <div className="col-lg-9  ">
            
                <h3 className="display-6 ">{d.loanHeader[0].lh_title}</h3>
                <h4> {d.loanHeader[0].lh_desc}</h4>
                {/*<ul className="icon-list bullet-bg bullet-soft-green">
                    <li><span><i className="uil uil-check"></i></span><span>Aenean eu leo quam pellentesque Aenean eu leo quam pellentesque Aenean eu leo quam pellentesque.</span></li>
                    <li><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis Nullam quis risus eget urna mollis Nullam quis risus eget urna mollis.</span></li>
                    <li><span><i className="uil uil-check"></i></span><span>Donec id elit non mi porta gravida Donec id elit non mi porta gravida Donec id elit non mi porta gravida.</span></li>
                    <li><span><i className="uil uil-check"></i></span><span>Fusce dapibus, tellus ac cursus Fusce dapibus, tellus ac cursus Fusce dapibus, tellus ac cursus.</span></li>
                    
                </ul>*/}
                <a href="#" className="btn btn-primary btn-sm rounded-pill mt-5 knowmorebtn">Know More</a>
            </div>
        </div>
            
    )}
            
            
           
            
        </div>
    </section>
    )
}
const mapStateToProps=createStructuredSelector({
    serviceData:selectServiceData
})
export default connect(mapStateToProps) (LoansComponent)
