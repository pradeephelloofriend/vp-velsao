import React, { useEffect } from 'react'
import OrganisationComponent from '../../components/about/OrganisationComponent';
import{connect} from 'react-redux'
import {fetchOrgData,setOrgData} from '../../redux/organisation/orgAction'
import Axios from 'axios';
import { API_PATH } from '../../Global';
export async function getServerSideProps() {
    // Fetch data from external API
    const { data } = await Axios.get(API_PATH+'fetch-org-data.php')
    return { props: { data } }
}
const organisation = ({data,setOrgData}) => {
   setOrgData(data)
    
    return (
       <OrganisationComponent orgData={data}/>
    )
}
const mapDispatchToProps=dispatch=>({
    setOrgData:(data)=>dispatch(setOrgData(data))
})
export default connect(null,mapDispatchToProps) (organisation)
