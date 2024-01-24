import React from 'react'
import { useRouter } from 'next/router'
import AccountsComponent from '../../components/business/AccountsComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'

export async function getServerSideProps(){
    const searchfinanceData = await fetch(`${process.env.API_PATH}/finance-areas`)
       const financeData= await searchfinanceData.json()

       return { props:{financeData}}
}
const accounts = ({financeData}) => {
    const router=useRouter()
    return (
            <>
            
            <AccountsComponent financeData={financeData}/>
            </>
           
      
    )
}

export default accounts
