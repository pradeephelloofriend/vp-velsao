import React from 'react'
import { Typography,Card,Button } from 'antd';
import Image from  'next/image'
//Import Swiper React components
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const { Title ,Text} = Typography;
const { Meta } = Card;

import {useRouter} from 'next/router'
import { getRecentDevData } from '../../lib/api';
import load from '../../public/img/loading.png'

const RecentDevelopmentComponent = () => {
  const router =useRouter()
  
  const [sliderRef, setSliderRef] = React.useState(null)
  const [rdData,setRddata]=React.useState(null)

  

  const next=()=> {
    sliderRef?.slickNext()
  }
  const previous=()=> {
    sliderRef?.slickPrev()
  }

  React.useEffect(()=>{
    let isApiSubscribed = true;
    async function fetchData() {
        const rData = await getRecentDevData() //applo client   
        // 👇️ only update state if component is mounted
        if (isApiSubscribed) {
          //console.log('cData',cData)
          setRddata(rData)
           //setLoading(false)
        }
      }
     
      fetchData()
      return () => {
        // cancel the subscription
        isApiSubscribed = false;
      };
    },[])
  
    
    //console.log('schemesData',schemesData)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>

        
          <div className="rd-btn-arrow offset-md-1 offset-lg-3">
            <Button type="text" className="btn-prev " onClick={previous} ><LeftOutlined /></Button>
            <Button type="text" className="btn-next ms-xxl-2" onClick={next}><RightOutlined /></Button>
          </div>
        
        <Slider ref={setSliderRef } {...settings}>
          {rdData!==null?
          rdData.map((d,idx)=>
          <div key={idx} className="slick-item">  
            <Card
              className='dev-card1'
              cover={<img src={d.developments.image.sourceUrl} placeholder="blur" blurDataURL={load} priority={true} alt=''  />}
            >
              <div className='dev-slider-box rd-badge'>
                <span className="badge bg-white link-disp-blue rounded-pill">{d.developments.title}</span>
              </div>
            </Card>
          </div>
          ):<></>}
          
          
        </Slider>
      </>
    )
  }
  

export default RecentDevelopmentComponent