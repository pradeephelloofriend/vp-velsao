import React from 'react'
import {useRouter} from 'next/router'
import { Button, Result } from 'antd';
const TabDetailsComponent = () => {
  const router=useRouter()
  /*React.useEffect(()=>{
    let isApiSubscribed = true;
    if(isApiSubscribed){
      router.push('/error')
    }
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };

  })*/
  return (
    <>
    <Result
    status="500"
    title="This page is currently"
    subTitle={<h4><span style={{color:'#2a7652'}}>Under</span> Devlopment</h4>}
    extra={<Button onClick={()=>router.push('/')} >Back Home</Button>}
  />
    </>
  )
}

export default TabDetailsComponent