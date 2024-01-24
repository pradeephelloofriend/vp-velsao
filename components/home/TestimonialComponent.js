import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import {Typography } from 'antd';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
  const {Title,Text}=Typography
const TestimonialComponent = ({testiData}) => {
    //console.log('testi',testiData)
    return (
        <>
        <section className="wrapper bg-light testi">
            <div className="container py-14 py-md-13">
            
                <Title level={4} className="text-l-blue display-4 mb-1 text-center">{testiData.header.title}</Title>
                <Title level={1} className="text-c-blue mt-0 mb-0 lead text-center  px-md-16 px-lg-0">{testiData.header.desc1}</Title>
            
                <div className="position-relative">
                        <Swiper 
                        slidesPerView={3}
                        spaceBetween={30} 
                        centeredSlides={true} 
                        
                        loop={true} 
                        loopFillGroupWithBlank={true} 
                        pagination={{
                            "clickable": true
                        }}  className="mySwiper">
                            {testiData.content.filter(d=>d.__component=="testi-area.testi-data").map((data,index)=>
                            <SwiperSlide key={index}>
                            <div className="card client bg-soft-primary text-left">
                                <div className="card-body ">
                                    <blockquote className="icon mb-0">
                                        <p className="text-black desc">{data.desc}</p>
                                        <div className="blockquote-details">
                                            <Image className="rounded-circle w-12"
                                            alt={'img'+index}
                                            height={72}
                                            width={72}
                                            src={data.avtar.url}
                                            />
                                            
                                            <div className="info">
                                            <h5 className="mb-1 text-c-blue ">{data.userName}</h5>
                                            <p className="mb-0 text-blue">{data.desgination}</p>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </SwiperSlide>
                            )}
                            
                            
                        
                        </Swiper>
                </div>
            </div>
        </section>
        </>
    )
}

export default TestimonialComponent
