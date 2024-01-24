import React from 'react'
import RegisteredOfficeComponent from '../../components/about/RegisteredOfficeComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const office = ({data}) => {
    return (
        <>
        
        <RegisteredOfficeComponent data={data} />
        </>
    )
}

export default office
