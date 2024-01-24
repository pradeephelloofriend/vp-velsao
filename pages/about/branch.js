import React from 'react'
import BranchesComponent from '../../components/about/BranchesComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
import {connect} from 'react-redux';
import Axios from 'axios';
import {setBrchData} from '../../redux/branch/brchAction'
//import { API_PATH } from '../../Global';
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/abou-us-page`)
    const data = await res.json()
    return { props: { data } }
}
const branch = ({data,setBrchData}) => {
    //console.log('brchData',data)
   setBrchData(data) /// function is usee to store data at redux store
    
    return (
        <>
       {/*<BreadcumbComponent pageInfo={{title:"About us",desc:"Branches"}}/>*/}
       <BranchesComponent data={data}/>
       </>
    )
}
const mapDispatchToProps=dispatch=>({
    setBrchData:(data)=>dispatch(setBrchData(data))
})
export default connect(null,mapDispatchToProps) (branch)
