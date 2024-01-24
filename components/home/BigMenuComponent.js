import React from 'react'
import {Card} from 'antd'
import { DownSquareFilled } from '@ant-design/icons';
import Image from 'next/image'
const BigMenuComponent = () => {
  return (
    <section className=" wrapper big-menu bg-light-orange">
      <div className="container-fluid">
        <div className="row">
          <div className='col-3'>
            <Card className='abt-card mb-3 mt-3 bg-c-blue' 
            actions={[<DownSquareFilled key="ellipsis" />,]}
            title={
              <>
                <span className='abt-card-head-title text-white'>Departments</span>
                <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670306484/vp/dongrim/corporate-min_grodmh.png'} alt='' height={25} width={25} />
              </>
            }>
              <div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />
            </Card>
          </div>
          <div className='col-3'>
            <Card className='abt-card mb-3 mt-3 bg-c-blue' 
            actions={[<DownSquareFilled key="ellipsis" />,]}
            title={
              <>
                <span className='abt-card-head-title text-white'>Important Offices</span>
                <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670306949/vp/dongrim/work-from-home-min_h0evq6.png'} alt='' height={25} width={25} />
              </>
            }>
              <div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />
            </Card>
          </div>
          <div className='col-3'>
            <Card className='abt-card mb-3 mt-3 bg-c-blue' 
            actions={[<DownSquareFilled key="ellipsis" />,]}
            title={
              <>
                <span className='abt-card-head-title text-white'>Explore Dongruli Thane </span>
                <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670307442/vp/dongrim/map-min_vkmwjd.png'} alt='' height={25} width={25} />
              </>
            }>
              <div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />
            </Card>
          </div>
          <div className='col-3'>
            <Card className='abt-card mb-3 mt-3 bg-c-blue' 
            actions={[<DownSquareFilled key="ellipsis" />,]}
            title={
              <>
                <span className='abt-card-head-title text-white'>News </span>
                <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670307301/vp/dongrim/newspaper-min_w6zdv1.png'} alt='' height={25} width={25} />
              </>
            }>
              <div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigMenuComponent