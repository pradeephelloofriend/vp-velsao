import React from 'react'
import { Button, Typography, Space } from 'antd';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {useRouter} from 'next/router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const { Title, Text } = Typography
import QuoteForm from './schemes/QuoteForm'
import i2 from '../../public/img/istockphoto-1201112520-612x612.jpg'
import { getAllSchemeDataHome } from '../../lib/api';
import { connect } from 'react-redux';
import { setIsloading } from '../../redux/menu/menuAction';

const Schemes=({setIsloading})=> {
  const router =useRouter()
  
  const [sliderRef, setSliderRef] = React.useState(null)
  const [nData,setNdata]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getAllSchemeDataHome() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              //console.log('cData',cData)
               setNdata(cData)
               setIsloading(false)
               //setLoading(false)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
  
  const next=()=> {
    sliderRef?.slickNext()
  }
  const previous=()=> {
    sliderRef?.slickPrev()
  }
  
    
    //console.log('schemesData',schemesData)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
        <section className="wrapper  scheme-area">
          <div className="container  pt-md-11 pb-13 pb-md-10">
            {/* <div className="row">
              <div className="col-md-12 col-lg-12 ">
                    <div className="scheme-content">
                      <div className="scheme-header mb-5 ">
                        <h4 className="display-6 mb-0 link-disp-blue">Schemes</h4>
                        <p className="lead mb-5">We strive to provide the best facilities for our village members. Some of these are listed below.</p>
                      </div>
                      <div className="btn-arrow offset-md-1 offset-lg-3">
                        <Button type="text" className="btn-prev " onClick={previous} ><LeftOutlined /></Button>
                        <Button type="text" className="btn-next ms-xxl-2" onClick={next}><RightOutlined /></Button>
                      </div>
                    </div>
                    <div className="scheme-slider">
                      <Slider ref={setSliderRef} {...settings}>
                      {nData!==null?nData.map((d,idx)=>
                      <div key={idx}  className="slick-item">
                      <Figure 
                      
                      className='position-relative'>
                        <a onClick={()=>router.push({
                        pathname:`/media/schemes/${d.schemes.title}`,
                        query:{slug:d.slug,title:d.schemes.title}
                      })} href='#'>
                        <Image
                          height={337}
                          
                          width={500}
                          alt="171x180"
                          src={d.schemes.image.sourceUrl}
                        />
                        </a>
                        
                        <div className='dev-slider-box'>
                          <span className="badge bg-white link-disp-blue rounded-pill">{d.schemes.title}</span>
                        </div>
                      </Figure>
                    </div>
                      ):<></>}
                          
                          

                      </Slider>
                </div>

                </div>
              
              </div> */}

              <div class="ocean">
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
              </div>

              <Card style={{backgroundColor : '#fffff'}}>
                        <Card.Body>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="">
                                  <div className=" ">
                                    <h4 className="display-6 mb-0 link-disp-blue">GOA Government Schemes</h4>
                                    <h6 className="link-disp-blue">KNOW YOUR SCHEME</h6>
                                    <p className="" style={{marginBottom : '8px'}}>A Goa Goverment initiative 
                                      to guides it's citizen in identifying all related schemes. All under one platform.</p>
                                    <a href='https://goaonline.gov.in/' target='_blank' style={{color: 'red'}}>www.goaonline.gov.in</a>

                                    <Space className="record-item-group" size={20} style={{marginTop: '4%'}}>
                                            <div className="record-item">
                                                <Title level={4} >15</Title>
                                                <p>Total Schemes</p>
                                            </div>
                                            <div className="record-item">
                                                <Title level={4} >2500</Title>
                                                <p>People Benefited</p>
                                            </div>
                                            <div className="record-item">
                                                <Title level={4} >5000+</Title>
                                                <p>Target to reach</p>
                                            </div>

                                        </Space>
                                  </div>
                                </div>
                              </div>
                                <div className="col-lg-8 ">
                                    <div className="btn-arrow offset-md-1 offset-lg-3 sch-nav">
                                      <Button type="text" className="btn-prev " onClick={previous} ><LeftOutlined /></Button>
                                      <Button type="text" className="btn-next ms-xxl-2" onClick={next}><RightOutlined /></Button>
                                    </div>
                                    <div className="schsl_content">
                                      <Slider ref={setSliderRef} {...settings}>
                                        {nData!==null?nData.map((d,idx)=>
                                          <div className="slick-item sl-itm" key={idx}> 
                                          <Figure>
                                          <a onClick={()=>router.push({
                                              pathname:`/media/schemes/${d.schemes.title}`,
                                              query:{slug:d.slug,title:d.schemes.title}
                                            })} href='#'>
                                              <Image
                                                  height={200}
                                                  width={300}
                                                  alt="171x180"
                                                  src={d.schemes.image.sourceUrl}
                                                  // src={'https://res.cloudinary.com/depg2aab2/image/upload/v1694513166/vp/nagargoa/parkimg2-min_gndvfx.png'}
                                              />
                                            </a>
                                              <Figure.Caption>
                                                  <Title level={5} >{d.schemes.title}</Title>
                                                  {/* <p> </p> */}
                                              </Figure.Caption>
                                          </Figure>
                                      </div>
                                        ):<></>}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
            </div>
        </section>

      </>
    )
  

}
const mapDispatchToProps=dispatch=>({
  setIsloading:data=>dispatch(setIsloading(data))
})
export default connect(null,mapDispatchToProps) (Schemes)
