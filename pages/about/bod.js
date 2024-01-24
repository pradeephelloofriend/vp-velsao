import React from 'react'
import BoardOfDirComponent from '../../components/about/BoardOfDirComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_PATH}/bod-area`)
  const data = await res.json()
  return { props: { data } }
}
const bod = ({data}) => {
    return (
      <>
      {/*<BreadcumbComponent pageInfo={{title:"About us",desc:"Board Of Directors"}}/>*/}
      <BoardOfDirComponent data={data}/>
      </>
      
    )
}

export default bod
