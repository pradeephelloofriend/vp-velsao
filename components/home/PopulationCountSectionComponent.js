import React from 'react'
import Image from 'next/image'
import pic from '../../public/img/population/population.jpg'
// import pslidea from '../../public/img/population-slide1.jpg'
import pslidea from '../../public/img/population-slide2.png'

const PopulationCountSectionComponent = () => {
  return (
      <>
          {/* <section className="wrapper pop-section image-wrapper bg-auto no-overlay bg-image text-center" >
          <div className={'image-container'}>  
          <Image className='image' alt="example" src={pslidea} layout='fill' /> */}
          {/* <Image className='image' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069502/vp/nagoa/population-min_gajuy7.jpg'} alt='' layout='fill' /> */}
          {/* </div> */}
            
              {/* <div className="container-fluid pop-content"> */}
                  {/* <div className="row">
                      <div className="col-lg-6 col-xl-6 mx-auto population-anim">
                          <p className="mb-0 px-md-16 px-lg-3 link-disp-black no-padding">"My idea of village SWARAJ is that is a complete republic, independent of its neighbors for its own vital wants, and yet interdependent for many others which dependence is a necessity."</p>
                          <p className='mb-0'>--Mahatma Gandhi</p>
                      </div>
                      
                  </div> */}



                  {/* <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 ">
                        <h3>Birth Information</h3>
                        <div className="row align-items-center counter-wrapper population-wh-anim">
                            <div className="col-md-6 text-center mb-1">
                                <h6 className="counter-ct">15139</h6>
                                <p style={{ color: 'black' }}>Male</p>
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                <h3 className="counter-ct ">13880</h3>
                                <p style={{ color: 'black' }}>Female</p>
                            </div>
                        </div>
                            
                    </div>    

                    <div className="col-md-6 col-lg-6 col-xl-6 ">
                        <h3>Death Information</h3>
                        <div className="row align-items-center counter-wrapper population-wh-anim">
                            <div className="col-md-6 text-center mb-1">
                                <h6 className="counter-ct">3698</h6>
                                <p style={{ color: 'black' }}>Male</p>
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                <h3 className="counter-ct ">2015</h3>
                                <p style={{ color: 'black' }}>Female</p>
                            </div>
                        </div>
                            
                    </div>  
         
                </div>

                
              </div>
          </section> */}

<section id="home-heading" class="p-5">
        <div class="dark-overlay">
            <div class="row">
                <div class="col">
                    <div class="container pt-5">
                        <h1>Are you ready to get started?</h1>
                        <p class="d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, hic! Tempore voluptatem maxime nobis est, blanditiis rem nesciunt hic laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

          
      </>
  )
}

export default PopulationCountSectionComponent