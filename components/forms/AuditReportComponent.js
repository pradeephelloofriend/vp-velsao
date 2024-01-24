import React from 'react'
import {Card,Table,Button,Icon } from 'antd';
import { useRouter } from 'next/router';

import SpinningComponent from '../../components/spin/SpinningComponent'
import { getAuditReportData } from '../../lib/api';

const AuditReportComponent = () => {
    const router=useRouter()
    const[sData,setSdata]=React.useState(null);
    const columns = [
        {
          title: 'Sr. No',
          dataIndex: 'sNo',
          width:'70px',
          key: 'sNo',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: text => <a>{text}</a>,
        },
        // {
        //   title: 'Date Published',
        //   dataIndex: 'date',
        //   key: 'date',
        //   render: (text,record) =>{
        //     //console.log('record',record)
        //     return(
        //       <a
        //       /*onClick={()=>router.push({
        //         pathname:`/media/schemes/${record.title}`,
        //         query:{slug:record.slug,title:record.title}
        //       })}*/
        //       >{text}</a>
        //     )
        //   }
        // }
        ,
        {
          title: 'Details/Download',
          dataIndex: 'download',
          key: 'download',
          render: (text,record) =>{
            return(
                    <a target='_blank' href={record.url}>{text}</a>
            )
          } 
        }
      ]

      React.useEffect(()=>{
        let isApiSubscribed = true;
        const tempData=[]
        async function fetchData() {
          const cData = await getAuditReportData() //applo client
    
          // 👇️ only update state if component is mounted
          if (isApiSubscribed) {
            cData.forEach((element,idx) => {
              //console.log('element',element)
              tempData.push({key:idx,sNo:idx+1,title:element.title,date:element.auditReport.date,download:'Download PDF',slug:element.slug,url:element.auditReport.downloadUrl
              })
            });
            setSdata(tempData)
            
          }
        }
        fetchData()
        return () => {
          // cancel the subscription
          isApiSubscribed = false;
        };
      },[])
  return (
    <div>
        {sData !== null ?
        <div className='page-content'>
          {/*<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>     */}
          <div className='scheme-block'>

            <Table className='scrollable-div' bordered columns={columns} dataSource={sData} />


          </div>
        </div>
        :
        <SpinningComponent />
      }
    </div>
  )
}

export default AuditReportComponent