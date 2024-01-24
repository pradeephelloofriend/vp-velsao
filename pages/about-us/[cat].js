import React,{ Suspense }from 'react'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/router';

import AboutUsComponent from '../../components/about-us/AboutUsComponent';
const village = () => {
  const router=useRouter()
    
    const tempTitle=router.query.title;
    // console.log('router',router)
    // console.log('tempTitle about',tempTitle)
  return (
    <>
    
      
      <AboutUsComponent routeTitle={tempTitle}/>
    
      
    </>
  )
}

export default village