import React from 'react'
import { Card,Typography,Tabs,Button, Spin } from 'antd';
import { Tree, TreeNode } from 'react-organizational-chart';
import Image from 'next/image'
import t1 from '../../public/img/team/Dario.jpg'
const {Title,Text}=Typography
import { getPanchMemData } from '../../lib/api';

const PanchayatMemberComponent = () => {
    const [pmData,setPmdata]=React.useState(null)
    const[isLoading,setIsloading]=React.useState(false)
    React.useEffect(() => {
        let isApiSubscribed = true;
        setIsloading(true)
        async function fetchData() {
            
            const pData = await getPanchMemData() //applo client
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setPmdata(pData)
                setIsloading(false)
            }
          }
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
      },[])
    //   console.log('pmData Panch Members',pmData)
  return (
      <>
          <div className='pm-block h-scroll'>
            <Spin spinning={isLoading}>
            <Tree label={<div>
                <Button  className='team-level'>{ pmData ? pmData.directorateOfPanchayats.fieldGroupName :<></>}</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                {pmData !== null ?
                                  <Image className='lazy' layout='fill' 
                                  // src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} 
                                  src={pmData.directorateOfPanchayats.image.sourceUrl} 
                                  alt=""  />
                                 :<></>}
                               
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">{ pmData ? pmData.directorateOfPanchayats.name :<></>}</p>
                                <p className="grey"> { pmData ? pmData.directorateOfPanchayats.designation :<></>}  </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            }>
                <TreeNode label={<div>
                    <Button className='team-level'>{ pmData ? pmData.directorateOfPanchayats.blockDevelopmentOfficer.fieldGroupName :<></>}</Button>
                    <div className='team-content-block'>
                        <div className="team-block">
                        <div className="team-image">
                                {pmData !== null ?
                                  <Image className='lazy' layout='fill' 
                                  // src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} 
                                  src={pmData.directorateOfPanchayats.blockDevelopmentOfficer.image.sourceUrl} 
                                  alt=""  />
                                 :<></>}
                               
                            </div>
                            <div className="team-content">
                                {/* <p className="darkGrey">Suryajirao V. Rane</p> */}
                                <p className="darkGrey">{ pmData ? pmData.directorateOfPanchayats.blockDevelopmentOfficer.name :<></>}</p>
                                {/* <p className="grey">BDO  </p> */}
                                <p className="grey">{ pmData ? pmData.directorateOfPanchayats.blockDevelopmentOfficer.designation :<></>}  </p>
                            </div>
                        </div>
                    </div>
                    </div>
                }>
                
                {pmData!==null ? pmData.directorateOfPanchayats.blockDevelopmentOfficer.members.map((d,ix)=>
                <TreeNode label={
                    <div>  
                        
                    <div key={ix}>
                        <Button className='team-level'>{ d.designation ? d.designation :<></>}</Button>
                        <div className='team-content-block'>
                        <div className="team-block">
                            <div className="team-image">
                                {pmData !== null ?
                                    <Image className='lazy' layout='fill' 
                                    // src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} 
                                    src={d.image.sourceUrl} 
                                    alt=""  />
                                    :<></>}
                            </div>
                            <div className="team-content">
                                <p className="darkGrey">{ d.name ? d.name :<></>}</p>
                                <p className="grey">{ d.designation ? d.designation :<></>}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>  
                }>

                    {d.member!==null ? d.member.map((j,jx)=>
                    <TreeNode label={
                        <div key={jx}>
                            <Button className='team-level'>Ward No.{ j.wordNo ? j.wordNo :<></>}</Button>
                            <div className='team-content-block'>
                                <div className="team-block">
                                    <div className="team-image">
                                    {pmData !== null ?
                                  <Image className='lazy' layout='fill' 
                                  // src={'https://res.cloudinary.com/depg2aab2/image/upload/v1667626182/vp/nagoa/user-min_dbcgcb.jpg'} 
                                  src={j.image.sourceUrl} 
                                  alt=""  />
                                 :<></>}
                                    </div>
                                    <div className="team-content">
                                        <p className="darkGrey">{ j.name ? j.name :<></>}</p>
                                        <p className="grey">{ j.designation ? j.designation :<></>}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        }>
                            
                        </TreeNode>
                        ):<></>}

                </TreeNode>
                
                ):<></>}
                
                </TreeNode>
                
            </Tree>
            </Spin>
          </div>
      </>
  )
}

export default PanchayatMemberComponent