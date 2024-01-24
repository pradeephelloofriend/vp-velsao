import React from 'react'
import ContactUsComponent from '../../components/contact-us/ContactUsComponent'
export async function getServerSideProps(context) {
  const cDataQuery = await fetch(`${process.env.WP_API_PATH}pages/569`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
 
const cData = await cDataQuery.json()
return { props: {cData} }
}
const index = ({cData}) => {
  return (
    <>
        <ContactUsComponent cData={cData}/>
    </>
  )
}

export default index