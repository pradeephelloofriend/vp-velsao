import React from 'react'
import SpinningComponent from '../spin/SpinningComponent'
import { Table } from 'antd';
import { getPanchStaff, getTenureOfSarpanch } from '../../lib/api';

const TenureOfSarpanch = () => {
    const [pnmData, setPnmData] = React.useState(null)
    const [tnsData, setTnsData] = React.useState(null)

    React.useEffect(() => {
      let isApiSubscribed = true

      async function fetch() {
        const pmdData = await getPanchStaff()
        const tnData = await getTenureOfSarpanch()
        console.log("t", tnData)
        if (isApiSubscribed) {
            setPnmData(pmdData)
            setTnsData(tnData)
        }
      }
    
      fetch()
      return () => {
        isApiSubscribed = false;
      }
    }, [])
    
    console.log("pnmData : ", pnmData)
    console.log("tnsData : ", tnsData)

  return (
    <div>
        {tnsData !== null? 
        
        <div className='scrollable-div'>
        <table className='cust_tbl'>
            <thead>
                <tr>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Tenure Sarpanches From</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Tenure Sarpanches To</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Designation</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Name of Sarpanches</td>
                </tr>
            </thead>

        { tnsData.tenureSarpanch.tenureInformation.map((m) =>
        <tbody>
            <tr>
                {/* <td className='fs-15' style={{textAlign:'center'}}>{m.entry} </td> */}
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.tenureSarpanchesFrom}</td>
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.tenureSarpanchesTo}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.designation}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.nameOfSarpanch}</td>
                
            </tr>
        </tbody>

        )}
        </table>

        </div>
        
        
        : <SpinningComponent/>}
    </div>
  )
}

export default TenureOfSarpanch
