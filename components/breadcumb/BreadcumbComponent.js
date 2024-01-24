import React from 'react'
import {Button,Typography,Breadcrumb  } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image'

const {Title,Text}=Typography
const BreadcumbComponent = ({pageInfo}) => {
    
    return (
        <>
             <section className="page-head wrapper bg-c-navBlue">
                <div className={'image-container1'}>
                    <Image className='image' src={pageInfo.img} alt='' layout='fill'/>
                </div>
                
                <div className="container pt-5 pb-5 position-relative">
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 ">
                            <Text  className="text-white">{pageInfo.title}</Text >
                            <Title level={4} className="text-lime-orange no-margin fw-4">{pageInfo.desc}</Title>
                            <Breadcrumb className='mt-4' >
                                <Breadcrumb.Item className='text-white' href="">
                                Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className='text-light-orange' href="">
                                {pageInfo.title}
                                </Breadcrumb.Item>
                                {/*<Breadcrumb.Item className='text-light-orange'>Application</Breadcrumb.Item>*/}
                            </Breadcrumb>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BreadcumbComponent
