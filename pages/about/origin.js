import React from 'react'
import OriginComponent from '../../components/about/OriginComponent';
import{connect} from 'react-redux'
import{createStructuredSelector} from 'reselect'
import BreadcumbComponent  from '../../components/breadcumb/BreadcumbComponent'
import{selectOrgData} from '../../redux/organisation/orgSelector'
const origin = ({orgData,data}) => {
    //console.log('Data',orgData)
    return (
        <>
         
         <OriginComponent data={data}/>
        </>
    )
}
const mapStateToProps=createStructuredSelector({
    orgData:selectOrgData
})
export default connect(mapStateToProps) (origin)
