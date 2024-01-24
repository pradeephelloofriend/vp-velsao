import React from 'react'
import { useRouter } from 'next/router'
import InterestComponent from '../../components/business/InterestComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
export async function getServerSideProps() {
    
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/roi-area`)
    const data = await res.json()
    //-----------------------------------
    //BIND RETURN DATA THROUGH PROPS
    //-----------------------------------
    return { props: { data } }
}
const interest = ({data}) => {
    const router=useRouter()
    //console.log("roi",data)
    return (
        <>
        
        <InterestComponent data={data}/>
        </>
       
    )
}

export default interest
