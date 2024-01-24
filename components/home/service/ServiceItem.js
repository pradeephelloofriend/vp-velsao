import React from 'react'
import {useRouter} from 'next/router'

import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image'
import d1 from '../../../public/img/icons/home/bulb-alt.svg'
const ServiceItem = ({tData,tabTitle}) => {
    const router= useRouter()
    function goToPage(cat,id,tabTitle,desc){
        router.push({
            pathname: `services/${cat}/${id}`,
            query:{cat:cat,id:id,tabTitle:tabTitle,desc:desc}
        })
    }
    //console.log('tabdata=',tData)
    return (
        <>
        
            
                <div className="project item col-md-6 col-xl-4">
                    <div className="card k-card">
                        <div className="card-body">
                            <div className="d-flex flex-row k-content">
                                <div>
                                    {/*<Image  className="svg-inject icon-svg icon-svg-sm text-yellow me-4"
                                    width={300}
                                    height={300}
                                    src={d1}
                                    alt="d1"
                                    />*/}
                                    
                                </div>
                                <div>

                                    <h4 className="mb-2 text-white">{tData.serviceTitle}</h4>
                                    <p className="mb-2 text-white">{tData.serviceDesc}</p>
                                    <a className="hover link-l-blue" 
                                    onClick={()=>goToPage(tData.serviceLink.RT,tData.serviceLink.KY,tabTitle,tData.serviceLink.DL01)} >
                                        Read More 2222<RightOutlined className="arrow-animation" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
        </>
    )
}

export default ServiceItem
