import React from 'react'
import {Card,Spin} from 'antd'
import { Table,Collapse } from 'antd';
import Image from 'next/image'
import { getTenderData, getTendersTest } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
import { Button, Result } from 'antd';
const TendersComponent = () => {
    const [crData,setCrData]=React.useState(null)
    const [isLoading,setIsLoading]=React.useState(false);
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getTenderData() //applo client  
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

    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];
    
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    // console.log('crData',crData)
  return (
      <>
    
      <div className='proc-box text-center'>
        <div className='proc-table scheme-block'>
        <div className='page-content scrollable-div'>
                        {/* <h4>{cDetailData.desc}</h4> */}
                      {/* <div dangerouslySetInnerHTML={{ __html:cDetailData.title!==null?cDetailData.title:<></>}} /> */}
                      <table className='cust_tbl'>
                        <thead>
                          <tr>
                            <td className='fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Title</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Document</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Date</td>
                            
                          </tr>

                        </thead>
                        {crData!==null ? crData.tenders.map((m)=>
                          
                            <tbody>
                            <tr>
                              <td className='fs-15' style={{ textAlign: 'center' }}>{m.title}</td>

                              <td className='px-10 fs-15' style={{ textAlign: 'center' }}>
                                <a href={m.document.mediaItemUrl} target='_blank'>View Details</a>
                              </td>
                              <td className='px-10 fs-15' style={{ textAlign: 'center' }}>{m.date}</td>

                            </tr> 
                            </tbody>
                         
                        ):<></>} 
                         </table>
                
                        
                      </div>




          {/* <Table className='scrollable-div' bordered
            dataSource={dataSource} columns={columns} />; */}
        </div>

      </div>


















        {/* <Result
          status="500"
          title="This page is currently"
          subTitle={<h4><span style={{color:'#2a7652'}}>Under</span> Devlopment</h4>}
          extra={<Button onClick={()=>router.push('/')} >Back Homed</Button>}
        /> */}
      
        {/* {crData!==null?
        <div className=''>
        <Card className='abt-card mb-5' title={<span className='abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070376/vp/nagoa/info_hzkwx2.png'} alt='' height={35} width={35} /><span className='abt-card-head-title sp-c'>About VP Chicalim</span></span>}>
        <div className="mb-3" dangerouslySetInnerHTML={{ __html:crData!==null?crData.title:<></>}} /> */}
        {/* <div className="mb-3" dangerouslySetInnerHTML={{ __html:crData!==null?crData.otherDesc:<></>}} /> */}
            
            {/* <Image src={crData.image.sourceUrl} alt='' height={400} width={1207} /> */}
           
            
        {/* </Card>
        </div>
        :
        <SpinningComponent/>
        
        } */}
          
          
      </>
  )
}

export default TendersComponent