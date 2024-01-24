import React from 'react'
import ContactComponent from '../../components/about/ContactComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const contact = ({data}) => {
    return (
       <> {/*<BreadcumbComponent pageInfo={{title:"About Us",desc:"Contact Us"}}/>*/}
        <ContactComponent data={data}/>
        </>
    )
}

export default contact
