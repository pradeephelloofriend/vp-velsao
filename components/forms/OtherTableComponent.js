import React from 'react'
import Table from 'react-bootstrap/Table';
const OtherTableComponent = ({data}) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Proposer</th>
          <th>Seconder</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.proposer}</td>
          <td>{data.seconder}</td>
          
        </tr>
        
        
      </tbody>
    </Table>
  )
}

export default OtherTableComponent