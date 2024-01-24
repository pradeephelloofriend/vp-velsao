import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import pmap from '../../public/img/pissurlempanchayat.jpg'
import { Button } from 'antd'

const RegionComponent = () => {
    const router=useRouter()
    //console.log(router)
  return (
    <div>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='' style={{paddingBottom: '6px'}}>
            <a href='https://tcp.goa.gov.in/wp-content/uploads/2019/02/land-use-plan/SattariTaluka/pissurlempanchayat.jpg' target='_blank'> <Button className='view-btn mr-5'>Download Map</Button></a>
          </div>

          <div className='region-Image'>
            {/* <div class="dcard">
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>

              <div class="card card-mp" 
              style={{
                background: 'url(https://res.cloudinary.com/depg2aab2/image/upload/v1694516015/vp/nagargoa/nagarganvpanchayatMAPimgweb-final_mntwo0.png)',
                backgroundSize: 'cover',
              }}
              >
                <div class="frame">
                  <h2>No JS</h2>
                </div>
              </div>

            </div> */}

            <Image className='image' src={pmap} alt='' height={1596} width={1920} />
            {/* <Image src='https://res.cloudinary.com/depg2aab2/image/upload/v1671172468/vp/dongrim/dongurlithanepanchayt_ch67ux.jpg' alt='' height={1596} width={1920}/> */}
          </div>
        </div>
      </div>
        
        
    </div>
  )
}

export default RegionComponent