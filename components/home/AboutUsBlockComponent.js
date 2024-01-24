import React from 'react'
import {Card} from 'antd'
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons'
import Image from 'next/image'

const AboutUsBlockComponent = ({msgData,villageData}) => {
  //console.log('msgData',msgData)
  //console.log('villageData',villageData)
  return (
      <section className="about_section">
          <div className="container py-md-14 pb-md-14 ">
              <div className="row">
                <div className='col-6'>
                  <div className="mb-3 ab-block" dangerouslySetInnerHTML={{ __html:villageData.acf.desc}} />  
                </div>
                <div className='col-6 '>

                </div>
                  {/*<div className="col-md-6 col-xl-4">
                    <Card className='abt-card mb-5' title={<span className='text-white abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070376/vp/nagoa/info_hzkwx2.png'} alt='' height={35} width={35}/><span className='abt-card-head-title'>About VP Nagoa</span></span>}>
                    <div className="mb-3" dangerouslySetInnerHTML={{ __html:villageData.acf.desc}} />    
                              
                              <Image src={villageData.acf.image.url} alt='' height={219} width={414}/>
                              
                    </Card>
                  </div>
                  <div className="col-md-6 col-xl-8">
                    <Card className='abt-card sar-profile mb-5'  title={<span className='text-white abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/msg_bt2e56.png'} alt='' height={35} width={35}/><span className='abt-card-head-title'>Message from the Sarpanch</span></span>}>
                            
                    <div className='desk-image'>
                                <Image src={msgData.acf.image.url} alt='' height={200} width={200}/>
                              </div> 
                              <div className="mb-5" dangerouslySetInnerHTML={{ __html:msgData.acf.desc}} />
                    </Card>
                  </div>*/}
              </div>
          </div>
      </section>
  )
}

export default AboutUsBlockComponent