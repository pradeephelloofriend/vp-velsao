import React from 'react'
import {Card,Spin} from 'antd'
import Image from 'next/image'
import { getAdminAuditTest } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
import { Button, Result } from 'antd';
const AdminAudit = () => {
    const [crData,setCrData]=React.useState(null)
    const [isLoading,setIsLoading]=React.useState(false);
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getAdminAuditTest() //applo client  
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
    // console.log('crData',crData)
  return (
      <>


      <div className='page-content '>
        <h5>Form 11 </h5>
        <div className='btn-block mt-3 ' style={{display : 'none'}}>
          <a href='https://admin.vpchicalim.in/incomeAndExpenditure/form11?pageNamed=Form+11' target='_blank'> <Button className='view-btn mr-5'>Proceed to Form 11</Button></a>
        </div>
      </div>



      {/* <Result
          status="500"
          title="This page is currently"
          subTitle={<h4><span style={{color:'#2a7652'}}>Under</span> Devlopment</h4>}
          extra={<Button onClick={()=>router.push('/')} >Back Home</Button>}
        /> */}





      
        {/* {crData!==null?
        <div className=''>
        <Card className='abt-card mb-5' title={<span className='abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070376/vp/nagoa/info_hzkwx2.png'} alt='' height={35} width={35} /><span className='abt-card-head-title sp-c'>About VP Chicalim</span></span>}>
        <div className="mb-3" dangerouslySetInnerHTML={{ __html:crData!==null?crData.title:<></>}} /> */}
        {/* <div className="mb-3" dangerouslySetInnerHTML={{ __html:crData!==null?crData.otherDesc:<></>}} /> */}
            
            {/* <Image src={crData.image.sourceUrl} alt='' height={400} width={1207} /> */}
           
            
        {/* </Card>
        </div>
        :
        <SpinningComponent/>
        
        } */}
          
          
      </>
  )
}

export default AdminAudit