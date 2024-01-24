import React from 'react'

import { Typography } from 'antd';

import  Image from 'next/image'


const {Title,Text}=Typography;
const ProfileComponent = ({profileData}) => {
 // console.log('profileData',profileData)
    return (
      <section className="wrapper bg-gray">
        <div className="container py-10 py-md-12">
          <div className="row">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12 col-md-12 ">
                  <Image className="chairmanimg"
                    src={profileData.image.url}
                    alt=""
                    height={300}
                    width={500}
                  />
                </div>
                <h4 className="text-center my-n2 chairname">Chairman - Shri Naresh Sawal</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <Title level={1} className="text-c-blue">{profileData.title}</Title>
              <p>{profileData.intro}</p>
              <div className="row counter-wrapper gy-6">
                <div className="col-md-12">
                  <div className="d-flex flex-row">
                    <div>
                      <p> {profileData.chairmainIntro}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default  ProfileComponent