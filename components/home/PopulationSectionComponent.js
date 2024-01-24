import React from 'react'
import Image from 'next/image'
import pic from '../../public/img/population/population.jpg'
// import pslidea from '../../public/img/population-slide1.jpg'
import pslidea from '../../public/img/population-slide1-pissurlem3b.png'

const PopulationSectionComponent = () => {
  return (
      <>
          <section className="wrapper pop-section image-wrapper bg-auto no-overlay bg-image text-center" >
          <div className={'image-container'}>
          <Image className='image' alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1696827561/vp/pissurlem/imgqq_dvudvt.jpg'} layout='fill' />
          {/* <Image className='image' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069502/vp/nagoa/population-min_gajuy7.jpg'} alt='' layout='fill' /> */}
          </div>
            
              <div className="container-fluid pop-content pop-sp">
                  <div className="row pop-sp-cen">
                      <div className="col-lg-7 col-xl-7 mx-auto pop-mo" style={{textAlign: 'right'}}>
                          {/*<h2 className="display-4 mb-3 text-center">Join Our Community</h2>*/}
                          <p className="mb-0 px-md-16 px-lg-3 link-disp-black no-padding">"Various schemes are being implemented by the Ministry of Agriculture to ensure that every citizen of the country can eat nutritious and fresh food and stay healthy. One of them is Ragi crop."</p>
                          {/* <p className='mb-0'>--Mahatma Gandhi</p> */}
                      </div>

                      <div className="col-md-5 col-lg-4 col-xl-5 mx-auto pop-mo">
                        <div className="row align-items-center counter-wrapper">
                            <div className="col-md-6 text-center mb-1">
                                {/* <h3 className="counter counter-lg link-disp-black">07</h3>
                                <p style={{ color: 'black' }}>Wards</p> */}
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                {/* <h3 className="counter counter-lg link-disp-black">502</h3>
                                <p style={{ color: 'black' }}>Households</p> */}
                            </div>
                            
                            
                        
                        </div>
                            
                    </div>  
                      
                  </div>
                  {/* <div className="row">
                    <div className="col-md-10 col-lg-9 col-xl-7 mx-auto pop-mo">
                        <div className="row align-items-center counter-wrapper">
                            <div className="col-md-6 text-center mb-1">
                                <h3 className="counter counter-lg link-disp-black">11</h3>
                                <p style={{ color: 'black' }}>Wards</p>
                            </div>
                            
                            <div className="col-md-6 text-center mb-5">
                                <h3 className="counter counter-lg link-disp-black">6,933</h3>
                                <p style={{ color: 'black' }}>Households</p>
                            </div>
                            
                            
                        
                        </div>
                            
                    </div>     
         
                </div> */}
              </div>
          </section>
      </>
  )
}

export default PopulationSectionComponent