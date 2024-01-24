import React from 'react'

import { Spin,Table,Collapse } from 'antd';
import OtherTableComponent from './OtherTableComponent';
import { getProccedingData } from '../../lib/tempApi';
const { Panel } = Collapse;

  
  
const ProccedingComponent = () => {
    const[pData,setPdata]=React.useState(null)
    const[list,setList]=React.useState(null)
    const[isLoading,setIsLoading]=React.useState(false)
    const columns = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: (text,record) =>{
            
            return(
                <>
                    
                    <label><b>{text}</b></label>
                    </>
            )
          }
        },
        
        {
            title: 'Venue',
            dataIndex: 'vanue',
            key: 'vanue',
          },
        {
          title: 'Chair',
          dataIndex: 'chair',
          key: 'chair',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
          },
          {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
          },
          {
            title: 'Attendees',
            dataIndex: 'attendees',
            key: 'attendees',
            render: (text,record) =>{
                console.log('record',record)
                return(
                    <>
                        <h6>{text.noOfAttendees}</h6>
                        <a href={text.uploadAttendanceSheets.mediaItemUrl} target='_blank'>{"View"}</a>
                        </>
                )
              }
          },
          {
            title: 'Attachment',
            dataIndex: 'attachment',
            key: 'attachment',
            render: (text,record) =>{
                return(
                        <a href={text} target='_blank'>{"View Details"}</a>
                )
              } 
          },
          
      ];
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getProccedingData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
             console.log('cData',cData)
               setPdata(cData)
               let arr=[]
               cData.forEach((ele,idx) => {
                arr.push({
                    key:idx,
                    date:ele.proceedings.dateAndTime,
                    title:ele.proceedings.title,
                    vanue:ele.proceedings.venue,
                    chair:ele.proceedings.chair.name,
                    startTime:ele.proceedings.startTime,
                    duration:ele.proceedings.duration,
                    attendees:ele.proceedings.attendanceDetails,
                    attachment:ele.proceedings.attachments.mediaItemUrl,
                    ip:ele.proceedings.individualProceedings,
                    recorder:ele.proceedings.recorder
                    

                })
                
               });
               setList(arr)
               setIsLoading(false)
               
            }
          }
          fetchData()
          return()=>{
            isApiSubscribed=false
          }
    },[])
    console.log('list',list)
  return (
      <>
          <Spin spinning={isLoading}>
            {pData!==null?
            
            <div className='proc-box text-center'>
                  <h5>Gram Sabha for Period {pData[0].proceedings.proceedingsPeriods.name }</h5>
                  <div className='proc-table scheme-block'>
                    <p>List of Meeting held as on</p>
                    <Table className='scrollable-div' bordered 
                    dataSource={list} 
                    columns={columns} 
                    expandable={{
                        expandedRowRender: (record) =>{
                            console.log('expamnd',record)
                            return(
                            <div className='proc-accord'>
                                <div className='proc-1-box'>
                                    <h5>Individual Proceedings</h5>
                                    <div className='record-box'>
                                        <label><b>Recorded By:</b></label>
                                        {record.recorder.map((r,rx)=>
                                        <a>{r.designation.description}<span>({r.designation.name})</span></a>
                                        )}
                                        
                                        
                                    </div>
                                </div>
                                
                                <Collapse accordion>
                                    {record.ip.map((i,idx)=>
                                    <>
                                    
                                    <Panel  header={i.title} key={idx}>
                                        <div className='row'>
                                            <div className='col-md-9'>
                                                <div dangerouslySetInnerHTML={{ __html:i.description}} />
                                            </div>
                                            <div className='col-md-3'>
                                                <OtherTableComponent data={i}/>
                                                
                                            </div>
                                        </div>
                                    
                                    </Panel>
                                    </>
                                    )
                                    }
                                    
                                    
                                </Collapse>
                          </div>
                            )
                        }, 
                        rowExpandable: (record) => record.ip.length >0,
                      }}
                    />
                  </div>
              </div>
            :<></>}
              
          </Spin>
      </>
  )
}

export default ProccedingComponent