import React from 'react'
import Image from 'next/image'
import pirnaabout from '../../../public/img/photos/pirnaabout.png';
import {API_PATH} from '../../../Global'
const ServicesHeaderComponent = ({sData}) => {
   // console.log('sData',sData)
    return (
        <>
        <div className="row  gx-lg-8 gx-xl-12 gy-12 align-items-center">
            <div className="col-lg-5 position-relative">
                <div className="row gx-md-5 gy-5 align-items-center">
                    <div className="col-md-12">
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-12 offset-md-12">
                                <figure className="rounded">
                                    <Image
                                        height={300}
                                        width={300}
                                        src={`${API_PATH}/assets/image/services/${sData[0].lh_image}`}
                                        alt='pirnaabout'
                                    />
                                </figure>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-7">
                <div className="d-flex flex-row item-v-center ">
                    <div>
                            <h4 className="rpredbg">{sData[0].lh_title}</h4>

                    </div>
                </div>
                    <h3 className="rproduct2text mb-5">{sData[0].lh_desc}</h3>
                <p className="mb-7">
                    <ul>
                        <li>Digital Process</li>
                        <li>Easy Documentation</li>
                        <li>Easy Documentation</li>
                    </ul>

                </p>
            </div>
        </div>
        </>
    )
}

export default ServicesHeaderComponent
