import React from 'react'
import { getPanchStaff } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
import { Table } from 'antd';

const PanchStaffComponent = () => {
    const [pnmData, setPnmData] = React.useState(null)

    React.useEffect(() => {
      let isApiSubscribed = true

      async function fetch() {
        const pmdData = await getPanchStaff()

        if (isApiSubscribed) {
            setPnmData(pmdData)
        }
      }
    
      fetch()
      return () => {
        isApiSubscribed = false;
      }
    }, [])
    
    console.log("pnmData : ", pnmData)
  return (
    <div>
        {/* <Table
            columns={columns}
            dataSource={data}
        /> */}
        {pnmData !== null? 
        
        <div className='scrollable-div'>
        <table className='cust_tbl'>
            <thead>
                <tr>
                    {/* <td className='text-center fw-bolder fs-20 fs-clr'>Entry</td> */}
                    <td className='text-center fw-bolder fs-20 fs-clr'>Name
                    </td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Designation</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Mobile/Phone No</td>
                </tr>
            </thead>

        { pnmData.panchStaffMembers.membersInformation.map((m) =>
        <tbody>
            <tr>
                {/* <td className='fs-15' style={{textAlign:'center'}}>{m.entry} </td> */}
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.name}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.designation}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.mobileNo}</td>
                
            </tr>
        </tbody>

        )}
        </table>

        </div>
        
        
        : <SpinningComponent/>}
    </div>
  )
}

export default PanchStaffComponent