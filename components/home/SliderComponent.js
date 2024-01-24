import React, { useRef, useState } from "react";
import { useRouter }  from 'next/router'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"





// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';


// install Swiper modules
//SwiperCore.use([Pagination]);


export default function SliderComponent() {
const router=useRouter()


  return (
    <>
      <section className="wrapper bg-grey  mb-0 tabmenuarea">
        <div className="container pt-4 pt-md-6 pb-5 pb-md-4">
          <Swiper slidesPerView={7} spaceBetween={4} pagination={{
            "clickable": true
          }}
            breakpoints={{
              "360": {
                "slidesPerView": 2,
                "spaceBetween": 20
              },
              "425": {
                "slidesPerView": 2,
                "spaceBetween": 20
              },
              "640": {
                "slidesPerView": 2,
                "spaceBetween": 20
              },
              "768": {
                "slidesPerView": 4,
                "spaceBetween": 40
              },
              "1024": {
                "slidesPerView": 7,
                "spaceBetween": 50
              }
            }} className="mySwiper ">
              <div className="container bg-light">
            <SwiperSlide>
              <div className="row">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://static.thenounproject.com/png/983470-200.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">Members</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://icon-library.com/images/objective-icon-png/objective-icon-png-13.jpg" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">Aims & Objectives</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://icon-library.com/images/about-us-icon/about-us-icon-21.jpg" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">About Us</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://www.srienglish.edu.au/wp-content/uploads/2014/08/Events-Icon.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">Events</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/2673/2673207.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">News & Updates</a>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">Gallery</a>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="http://cdn.onlinewebfonts.com/svg/img_147380.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" href="#">Contact Us</a>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row ">
                <div className="col-lg-12 col-12 ms-8">
                  <figure className="card-img-top card-img-center sliderfigure"><img className="img-fluid" src="https://icon-library.com/images/bank-fees-512_23164.png" alt="" /></figure>
                </div>
                <div className="col-lg-12 col-12">
                  <a className="text-black fw-bold" onClick={()=>router.push('/fees/')} >Fees</a>
                  </div>
              </div>
            </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      
    </>
  )
}


