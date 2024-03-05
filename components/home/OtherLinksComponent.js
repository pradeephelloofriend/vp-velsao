import React from 'react'
import {Card} from 'antd'
const OtherLinksComponent = () => {
  return (
    <section className="wrapper bg-light ol-section " >
            <div className='row card-deck container-othr '>
                <div className='col-md-3'>
                    <Card className='ol-card ol-hos card hover-othr'
                    title={<b> Hospitals near Pissurlem</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Laxmi Dental Clinic</li>
                                <li>Harvale Health Centre</li>
                                <li>Chethan Hospital</li>
                                <li>Chaitanya Hospital</li>
                                <li>Health Center Poriem</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-tur card hover-othr'
                    title={<b>Tourist Places Near Pissurlem</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Harvalem Waterfalls</li>
                                <li>Arvalem Caves</li>
                                <li>Shree Ajoba temple</li>
                                <li>Ruins of Surya Temple</li>
                                <li>Sonshe waterfall</li>
                                <li>Navdurga temple PISSURLEM</li>
                            </ul>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-park card '
                    title={<b>Local Parks near Pissurlem</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Marcel Park</li>
                                <li>HBC Children Park</li>
                                <li>Vasant Nagar Children's Park</li>
                                <li>Children's Park</li>
                                <br/>
                            </ul>
                        </div>
                    </Card>   
                </div>
                <div className='col-md-3'>
                    <Card className='ol-card ol-gov card hover-othr'
                    title={<b>Government Offices near Pissurlem</b>}
                    >
                        <div className='ol-box'>
                            <ul className='text-wh'>
                                <li>Zonal Agriculture Office</li>
                                <li>Village Panchayat</li>
                                <li>Goa Electricity Department Sub Station Pale</li>
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