import React from 'react'
import { Button, Typography } from 'antd';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from 'react-bootstrap/Figure'
const { Title, Text } = Typography
import QuoteForm from './schemes/QuoteForm'
import i2 from '../../public/img/istockphoto-1201112520-612x612.jpg'

class Scheme extends React.Component {
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
    const { schemeData } = this.props

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
              <div className="col-md-7 col-lg-7 ">
                    <div className="scheme-content">
                      <div className="scheme-header mb-5 ">
                        
                          <Title level={1} className="text-c-blue m-0 ">{schemeData.header.desc1}</Title>
                        

                      </div>
                      <div className="btn-arrow offset-md-1 offset-lg-3">
                        <Button type="text" className="btn-prev " onClick={this.previous} ><LeftOutlined /></Button>
                        <Button type="text" className="btn-next ms-xxl-2" onClick={this.next}><RightOutlined /></Button>
                      </div>
                    </div>
                    <div className="scheme-slider">
                      <Slider ref={c => (this.slider = c)} {...settings}>
                        {schemeData.content.map((d, index) =>
                          <div key={index} className="slick-item">
                            <Figure>
                              <Image
                                height={350}
                                width={710}
                                alt="171x180"
                                src={d.image[0].url}
                              />
                              <Figure.Caption>
                                <Title level={5} >{d.title}</Title>
                                <p> {d.des1}</p>
                              </Figure.Caption>
                            </Figure>
                          </div>
                        )}

                      </Slider>
                </div>

                </div>
              <div className="col-lg-5 col-md-5  gx-16">
                <div className="row">
                  <div className="col-12 mt-13 ">
                  <Figure>
                              <Image
                                height={230}
                                width={540}
                                alt="171x180"
                                src={i2}
                              />
                              <Figure.Caption>
                                <Title level={5} >Person Name(details)</Title>
                              </Figure.Caption>
                            </Figure>
                            <div className="col-12 mt-2">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book.</p>
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

export default Scheme
