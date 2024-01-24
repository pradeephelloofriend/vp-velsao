import React from 'react'
import {Button,Typography} from 'antd';
import Image from 'next/image';
import cs1 from '../../public/img/photos/cs21.jpg';
import { LeftOutlined ,RightOutlined  } from '@ant-design/icons';
import { SRLWrapper } from "simple-react-lightbox";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const {Title,Text}=Typography
class GalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
      this.slider.slickNext();
  }
  previous() {
      this.slider.slickPrev();
  }
  render() {
    const{eventdata}=this.props
    //console.log('slider',data)
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight:true,
      autoplay:false,
      arrows:false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
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
<section className="wrapper bg-light scheme-area">
          <div className="container pt-15 pt-md-11 pb-13 pb-md-10">
            <div className="row">
              <div className="col-md-12">
                <div className="card scheme-card">
                  <div className="card-body">
                    <div className="scheme-content">
                      <div className="scheme-header mb-5 ">
                        
                        <Title level={2} className="text-c-blue m-0">{eventdata.title}</Title>
                          
                        
                        
                      </div>
                      <div className="btn-arrow offset-md-2 offset-lg-3">
                        <Button type="text" className="btn-prev " onClick={this.previous} ><LeftOutlined /></Button>
                        <Button type="text" className="btn-next ms-xxl-2" onClick={this.next}><RightOutlined /></Button>
                      </div>
                    </div>
                    <div className="scheme-slider gallery-img">
                    <SRLWrapper >
                      <Slider ref={c => (this.slider = c)} {...settings}>
                        {eventdata.content.filter(d=>d.__component=='gallery-area.photos').map((g, index) =>
                          <div key={index} className="slick-item">
                            <Figure>
                            
                            <a href={g.image.url}>
                                <Image
                                  height={510}
                                  width={750}
                                  alt={g.title}
                                  src={g.image.url}
                                  srl_gallery_image="true"
                                />
                                </a>
                              
                              <Figure.Caption>
                                <Title level={5} >{g.title}</Title>
                                <p> {g.desc1}</p>
                              </Figure.Caption>
                            </Figure>
                          </div>
                        )}

                      </Slider>
                      </SRLWrapper>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
      </>



    )
  }
    
}

export default GalleryComponent
