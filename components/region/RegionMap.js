import React from 'react'
import Image from 'next/image';
import map from '../../public/img/about/region.jpg'

const RegionMap = () => {
  return (
    <Image  
    src={map}
    height={600}
    width={1500} 
    />
  )
}

export default RegionMap