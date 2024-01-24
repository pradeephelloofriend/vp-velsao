import React from 'react'
import { Card, Typography, Tabs } from 'antd';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
const { Title, Text } = Typography;

const OurClientsComponent = () => {
  return (
      <section className="wrapper bg-light client-area">
          <div className="container py-12-links">
              <div className='row'>
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <div className='kam-title text-center'>
                          <Title level={2} className='mb-0'>USEFUL<span style={{ fontWeight: 700 }}> LINKS</span></Title>

                      </div>
                  </div>
              </div>
              <div className='position-realtive '>
                    
                  {/* <marquee direction="up" height="40px" width="400px" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">
                      <ul class="ticker-up">
                          <li>START Lorem ipsum dolor sit</li>
                          <li>Duis autem vel eum iriure</li>
                          <li>Typi non habent claritatem</li>
                          <li>END Mirum est notare</li>
                      </ul>
                  </marquee> */}
                  
                  <Marquee speed={100}>
                        <img onClick={()=> window.open("https://data.gov.in/","_blank")} className='pb-5 px-3' width={150} height={113} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779413/vp/Chicalim/datagovin_d3rxtg.png'} alt="" />
                        <Image onClick={()=> window.open("https://www.nvsp.in/","_blank")} className='pb-5 px-3' width={350} height={68} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779413/vp/Chicalim/download_wierwf.png'} alt="" />
                        <Image onClick={()=> window.open("https://www.digilocker.gov.in/","_blank")} className='pb-5 px-3' width={260} height={80} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779413/vp/Chicalim/DigiLocker_fnbkuz.png'} alt="" /> 
                      {/* <Image  width={120} height={80} src={c4} alt=""/>
                        <Image  width={120} height={80} src={c5} alt=""/> */}
                        <Image onClick={()=> window.open("https://www.makeinindia.com/home","_blank")} className='pb-5 px-3' width={210} height={96} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692860164/vp/Chicalim/mii_logo-min_hxbpto.png'} alt="" />
                        <Image onClick={()=> window.open("https://digitalindia.gov.in/","_blank")} className='pb-5 px-3' width={210} height={111} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692860539/vp/Chicalim/di_logo_dg09do.png'} alt="" />
                        <Image onClick={()=> window.open("https://goa-tourism.com/","_blank")} className='pb-5 px-3' width={160} height={80} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779414/vp/Chicalim/goa-tourism-logo_zha55g.png'} alt="" />
                        <Image onClick={()=> window.open("https://www.india.gov.in/","_blank")} className='pb-5 px-3' width={220} height={200} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779414/vp/Chicalim/nationalportalindia_sgwsxs.png'} alt="" />
                        <Image onClick={()=> window.open("https://www.mygov.in/","_blank")} className='pb-5 px-3' width={160} height={129} src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692779414/vp/Chicalim/mygov_lmxior.png'} alt="" /> 
                      {/* <Image  width={120} height={80} src={c4} alt=""/>
                        <Image  width={120} height={80} src={c5} alt=""/> */}
                  </Marquee>
              </div>
          </div>
      </section>
  )
}

export default OurClientsComponent