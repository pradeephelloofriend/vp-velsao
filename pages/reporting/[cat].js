import React,{ Suspense }from 'react'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/router';

import ReportingComponent from '../../components/reporting/ReportingComponent';
const reporting = () => {
  const router=useRouter()
    
    const tempTitle=router.query.title;
    // console.log('router report',router)
    // console.log('tempTitle report',tempTitle)
  return (
    <>
    
      <ReportingComponent routeTitle={tempTitle}/>
    
    </>
  )
}

export default reporting