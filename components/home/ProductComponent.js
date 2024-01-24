import React from 'react'
import { Typography } from 'antd';
import { StarOutlined  } from '@ant-design/icons';
import Image from 'next/image'
import i1 from '../../public/img/icons/home/happy-01.svg'
import i2 from '../../public/img/photos/home/about1.jpg'

const {Title,Text}=Typography
const ProductComponent = ({aboutData}) => {
    //console.log('aboutData',aboutData)
    return (
        <section className="wrapper bg-light">
            <div className="container py-10 py-md-12">
                <div className="row">
                    <div className="col-lg-7">
                        {/*<Title level={4} className="text-blue">{aboutData.header.title}</Title>*/}
                        <Title level={2} className="text-c-blue mt-0">{aboutData.header.title}</Title>
                        <p className="mb-7">{aboutData.header.desc2}</p>
                        <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.</p>
                        {/* <div className="row counter-wrapper gy-6">
                            {aboutData.content.filter(d=>d.__component=="about-area.shotcut-items").map((data,index)=>
                                <div key={index} className="col-md-6">
                                    <div className="d-flex flex-row">
                                        <div>
                                            <i className="demo-icon">&#xe807;</i>
                                        </div>
                                        <div>
                                            <Title level={5} className="mb-1">{data.title}</Title>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </div>
                            )}
                                <div className="d-flex flex-row">
                                <div className='ex-year align-items-center'>
                                <span className="text-blue">25</span>
                                <h4>Years Of Experience</h4>
                                <StarOutlined />
                                
                                </div>
    </div>

                        </div>*/}

                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-md-12">
                                <figure className="rounded p-image1 mt-6">
                                    <Image
                                        src={aboutData.header.leftImage.url}
                                        alt="i1"
                                        height={350}
                                        width={550}
                                    />
                                </figure>
                            </div>


                        </div>

                    </div>



                </div>

            </div>

        </section>

            
    )
}

export default ProductComponent
