import React from 'react'
import { connect } from 'react-redux';
import { setUserUploadStatus,setRegCertData } from '../../redux/menu/menuAction';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
import b from '../../public/img/breadcumb/b-page.jpg'
import { useRouter } from 'next/router';


import GalleryComponent from '../../components/gallery/GalleryComponent';

/*export async function getServerSideProps(context) {
  const cDataQuery = await fetch(`${process.env.WP_API_PATH}pages?slug=${context.query.uri}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JWT_TOKEN}` 
    }
  })
 
const cData = await cDataQuery.json()
return { props: {cData} }
}*/
const gallery = ({setRegCertData,cData}) => {
  const router=useRouter()
  setRegCertData(null)  
    const tempTitle=router.query.title;
    //console.log('router',cData[0])
  return (
    <>
    
    <GalleryComponent routeTitle={tempTitle} routeUri={router.query.uri}/>
   
    
    </>
  )
}
const mapDispatchToProps=dispatch=>({
  setUserUploadStatus:data=>dispatch(setUserUploadStatus(data)),
  setRegCertData:(data)=>dispatch(setRegCertData(data))
})
export default connect(null,mapDispatchToProps) (gallery)