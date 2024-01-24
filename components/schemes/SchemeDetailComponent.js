import React from 'react'
import {Button,Typography } from 'antd';
import Image from 'next/image';
const {Title,Text}=Typography
const SchemeDetailComponent = ({cData}) => {
    //console.log('schemeData',cData)
    const {acf}=cData
  return (
      <>
          <section className="wrapper bg-gray">
              <div className="container py-10 py-md-12">
                  <div className="row">
                      <div className='col-12'>
                          <div className='page-content'>
                              <div className="caption1">
                                  <h1>{acf.title}</h1>
                              </div>
                            <div className='desc-block f-left' style={{maxWidth:'65%'}}>
                                <div dangerouslySetInnerHTML={{ __html:acf.desc!==null?acf.desc:<></>}} />
                            </div>
                            <div className='scg-image-block f-right'>
                                <Image src={acf.image.url} height={acf.image.height} width={acf.image.width} alt=''/>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default SchemeDetailComponent