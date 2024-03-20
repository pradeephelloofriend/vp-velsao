import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper bg-light ol-section " >
            <div className='row card-deck container-othr '>
                <div className='col-md-3'>
                    <Card className='ol-card ol-hos card hover-othr'
                    title={<b> Hospitals near Velsao-Pale-Issorcim </b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>SKIN; Dermatalogy & Cosmetalogy clinic</li>
                                <li>Clinic (Dr. Mrs. Preeti Patil)</li>
                                <li>Apna Clinic</li>
                                <li>Cansaulim PHC</li>
                                {/* <li>Health Center Poriem</li> */}
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-tur card hover-othr'
                    title={<b>Tourist Places Near Velsao-Pale-Issorcim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Pale Pond</li>
                                <li>Velsao Beach</li>
                                <li>Goa Beach Private Property and Picnic spot</li>
                                <li>Wow celebration deck</li>
                                <li>Velsao Spring</li>
                                {/* <li>Navdurga temple PISSURLEM</li> */}
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-park card '
                    title={<b>Local Parks near Velsao-Pale-Issorcim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Housing Board Park</li>
                                <li>Library Lawn</li>
                                <li>VGH Lawns</li>
                                {/* <li>Children's Park</li> */}
                                <br/>
                            </ul>
                        </div>
                    </Card>   
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-gov card hover-othr'
                    title={<b>Government Offices near Velsao-Pale-Issorcim</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>PWD Water Pumping Station</li>
                                <li>Village Panchayat</li>
                                <li>GAIL India</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                
                
            </div>

              {/* <div class="ocean">
                  <div class="wave"></div>
                  <div class="wave"></div>
                  <div class="wave"></div>
              </div> */}
    </section>
  )
}

export default OtherLinksComponent