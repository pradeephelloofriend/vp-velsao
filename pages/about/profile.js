import React from 'react'
import ProfileComponent from '../../components/about/ProfileComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
 
export async function getServerSideProps(){
     const searchprofileData = await fetch(`${process.env.API_PATH}/chairmain-profile`)
        const profileData= await searchprofileData.json()

        return { props:{profileData}}
}
const profile = ({profileData}) => {
  
    return (
        <>
        <ProfileComponent profileData={profileData}/></>
     
    )
}

export default profile
