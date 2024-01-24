import React from 'react'
import {useRouter} from 'next/router'
import BreadcumbComponent from '../../../components/breadcumb/BreadcumbComponent'
import SchemeDetailComponent from '../../../components/schemes/SchemeDetailComponent'
import b from '../../../public/img/breadcumb/b-page.jpg'
export async function getServerSideProps(context) {
  const cDataQuery = await fetch(`${process.env.WP_API_PATH}schemes?slug=${context.query.slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
 
const cData = await cDataQuery.json()
return { props: {cData} }
}
const schemeCat = ({cData}) => {
  const router=useRouter()
  const tempTitle=router.query.title;
  return (
    <>
    
    <SchemeDetailComponent cData={cData[0]}/>
    </>
  )
}

export default schemeCat