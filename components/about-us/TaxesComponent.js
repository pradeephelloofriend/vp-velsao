import React from 'react'
import {Card} from 'antd'
import Image from 'next/image'
import { gettaxes } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const MessageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await gettaxes() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
            }
          }
          fetchData()
       
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log(crData);
  return (
      <>
        {crData !== null? 
        
        <div className='scrollable-div'>
        {/* <h2 className="text-tranfor " >{crData.fees.fieldGroupName}</h2> */}
        <h2 className="text-tranfor " >Fees</h2>
        <table className='cust_tbl'>
            <thead>
                <tr>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Sr. No</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>For
                    </td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Rate</td>
                </tr>
            </thead>

        { crData.fees.feesInformation.map((m) =>
        <tbody>
            <tr>
                <td className='fs-15' style={{textAlign:'center'}}>{m.entry}
                </td>
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.for}</td>
                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.rate}</td>
            </tr>
        </tbody>

        )}
        </table>

        <div className="pt-10">
        {/* <h2 className="text-tranfor">{crData.taxes.fieldGroupName}</h2> */}
        <h2 className="text-tranfor " >Taxes</h2>
        <table className='cust_tbl scrollable-div'>
            <thead>
                <tr>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Sr. No</td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Taxes
                    </td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>For
                    </td>
                    <td className='text-center fw-bolder fs-20 fs-clr'>Rate</td>
                </tr>
            </thead>

        { crData.taxes.taxInformation.map((m) =>
        <tbody>
            <tr>
                <td className='fs-15' style={{textAlign:'center'}}>{m.entry}</td>
                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.taxes}</td>
                <td className='fs-15' style={{textAlign:'center'}}>{m.for}</td>
                <td className=' ps-9 text-centre fs-15' style={{textAlign:'center'}}>{m.rate}</td>
            </tr>
        </tbody>

        )}
        </table>
        </div>
        </div>
        
        
        : <SpinningComponent/>}
       
    
        
      </>
  )
}

export default MessageComponent