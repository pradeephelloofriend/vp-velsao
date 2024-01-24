import React from 'react'
import MissonComponent from '../../components/about/MissonComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'

import { connect } from 'react-redux';

import Axios from 'axios';
import { API_PATH } from '../../Global';
export async function getServerSideProps() {
    // Fetch data from external API
    const { data } = await Axios.get(API_PATH +'fetch-mission-data.php')
    return { props: { data } }
}

const vision = ({data}) => {
  //console.log('data2',data)
    return (
        <>
           
            <MissonComponent data={data}/>
            
        </>
    )
}


export default  vision