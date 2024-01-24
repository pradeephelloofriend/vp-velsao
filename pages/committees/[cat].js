import React from 'react'
import { connect } from 'react-redux';
import { setUserUploadStatus,setRegCertData } from '../../redux/menu/menuAction';
import { useRouter } from 'next/router';
import Committee from '../../components/committees/CommitteeComponent';
import TabDetailsComponent from '../../components/about-us/TabDetailsComponent';
export async function getServerSideProps(context) {
  // console.log('context',context);
  const cDataQuery = await fetch(`${process.env.WP_API_PATH}committee?slug=${context.query.uri}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
 
const cmData = await cDataQuery.json()
return { props: {cmData} }
}
const village = ({setRegCertData,cmData}) => {
  const router=useRouter()
  // setRegCertData(null)  
    const tempTitle=router.query.title;
    // console.log('router-cmdata',cmData)
    // console.log('router-cmdata',router)
  return (
    <>

    <Committee routeTitle={tempTitle} routeUri={router.query.uri} cDetailData={cmData[0]}/>
    </>
  )
}

const mapDispatchToProps=dispatch=>({
  setUserUploadStatus:data=>dispatch(setUserUploadStatus(data)),
  setRegCertData:(data)=>dispatch(setRegCertData(data))
})
export default connect(null,mapDispatchToProps) (village)