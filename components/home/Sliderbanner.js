import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography,Card,Divider } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import SliderBottomBarComponent from './SliderBottomBarComponent';
import Carousel from 'react-bootstrap/Carousel';
import { getSliderHomeData } from '../../lib/api';
import { setIsloading } from '../../redux/menu/menuAction';
import { connect } from 'react-redux';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Sliderbanner = ({sliderData,setIsloading}) => {
  // console.log('sliderdata',sliderData)
  const [slData,setSldata]=React.useState(null)
   

    React.useEffect(()=>{
        //setLoading(true)
        setIsloading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getSliderHomeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              // console.log('cData',cData)
              setSldata(cData)
              //setIsloading(false)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])

    return (
      <>
      <Carousel fade>
        {slData !==null ? slData.map((i,index)=>
          <Carousel.Item key={index}>
              <img className="d-block w-100 h-25"
                  alt="s1"
                  
                  src={i.image.sourceUrl}
                />
          </Carousel.Item>
        ):<></>}
      </Carousel>
      </>
    )
}
//for storing data into the store
const mapDispatchToProps=dispatch=>({
  setIsloading:data=>dispatch(setIsloading(data))
})
export default connect(null,mapDispatchToProps) (Sliderbanner)
