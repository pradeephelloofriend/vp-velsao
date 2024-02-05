import React from 'react'
import Image from 'next/image'
import {Space,Typography} from 'antd'
import logo from '../../public/img/logo.png'
import cm from '../../public/img/cm-logo.png'
import mj from '../../public/img/mauvin.png'
const {Title,Text}=Typography
const LogoNavbarComponent = () => {
  return (
    <>
    <section className="wrapper header-wrapper">
        <div className="container-fluid py-2">
            <div className='row'>
                <div className='col-md-6 col-sm-6'>
                    <div className="m-logo">
                        <Space>
                            <Image className='vp-nagargao-logo' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'} height={100} width={69} alt="Village Panchayats"/>
                            {/* <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'}
                                height={100} width={100} alt="Village Panchayats" /> */}
                            <a href="/" title="Village Panchayats">
                                <span className='vp-title'>Village Panchayat Velsao-Pale-Issorcim </span>
                                <span>Government of Goa</span>
                            </a>
                        </Space>

                    </div>
                    <div className="m-logo logo-mob">
                        <Space>
                            <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'} height={90} width={70} alt="Village Panchayats" />
                            <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692851739/vp/Chicalim/g20_xqpocf.png'} height={70} width={50} alt="g20" />
                        {/* <span>Government of Goa</span> */}
                        </Space>
                    </div>
                </div>

                {/* <div className='col-md-2 col-sm-6'>
                    <div className="centered-div">
                        <Space>
                            <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'} height={100} width={69} alt="Village Panchayats"/>
                            </Space>
                    </div>
                    <p className='logo-p-mob' style={{ textAlign: 'center' }}>Government Of Goa</p>
                </div> */}

                <div className='col-md-6 col-sm-12'>
                    <div className='cm-logo' style={{display: 'none'}}>
                        <Space>
                            <div className='cm-text'>
                                <Title level={5}><b>Honourable Minister Shri. Mauvin Godinho</b></Title>
                                <Text>Minister for Transport, Industries, Panchayat Raj,<br />Trade and Commerce, Protocol & Hospitality,</Text>
                            </div>
                            {/* <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665068914/vp/nagoa/cm-logo_ne1c94.png'} height={100} width={80} alt="Village Panchayats"/> */}
                            <img className='cm-img' src={'https://res.cloudinary.com/depg2aab2/image/upload/v1693033444/vp/Chicalim/min1-min_yeq80x.png'} 
                                 alt="Village Panchayats" />

                        </Space>
                    </div>

                    <div className='cm-logo ext-logo'>
                        <Space>
                            <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1692851739/vp/Chicalim/g20_xqpocf.png'} height={69} width={130} alt="g20" />
                        </Space>
                    </div>

                    <div className='cm-logo ext-logo' style={{display: 'none'}}>
                        <Space>
                            <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'} height={70} width={49} alt="GovInLogo" />
                        </Space>
                    </div>

                </div>
            </div>
       

        </div>

    </section>
    </>
  )
}

export default LogoNavbarComponent