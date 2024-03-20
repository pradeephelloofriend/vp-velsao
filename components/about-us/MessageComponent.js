import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { getSarpanchMsg } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getSarpanchMsg() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
            }
          }
          fetchData()
       
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log(crData);
  return (
      <>
      {crData!==null?
      <div className='about_section1 pt-8'>
      <Card className='abt-card sar-profile mb-5 ag-courses_item' >
        <div className='row'>
          <div className='ag-courses-item_bg'></div>
          <div className='col-md-10 col-lg-10 col-sm-12 '>
          <i class="fa fa-quote-left" aria-hidden="true"></i>
            <div className="mb-3 msg-txt" dangerouslySetInnerHTML={{ __html:crData!==null?crData.desc:<></>}} />
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </div>

          <div className='col-md-2 col-lg-2 col-sm-12'>
            <div className='desk-image'>
                  {crData.image.sourceUrl != null ?
                    <Image src={crData.image.sourceUrl} alt='' width={200} height={200} /> :
                    <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} alt='' height={200} width={200} />
                  }
              {/* <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1694515162/vp/nagargoa/sarpanchpic1-min_tek5ic.png'} alt='' height={200} width={200} /> */}
            </div>
            <h4 className='text-center' style={{paddingTop : '15px'}}>Maria Diana Francisco A.J. Gouveia</h4>
            <h6 className='text-center'>Contact : 9404756182</h6>
          </div>
        </div>

          
          
        </Card>
  </div>
      :
      <SpinningComponent/>
      }
          
      </>
  )
}

export default MessageComponent