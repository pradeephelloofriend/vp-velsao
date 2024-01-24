import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { getobligations } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getobligations() //applo client   
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
        {crData !== null? 
        
        <div>
          
          <div dangerouslySetInnerHTML={{ __html:crData.obligation.desc}}></div>
        </div>
        
        
        : <SpinningComponent/>}
       
    
        
      </>
  )
}

export default MessageComponent