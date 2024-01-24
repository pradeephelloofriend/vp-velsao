import React , { useState }  from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card } from 'antd';
import Router , {useRouter}  from 'next/router';
import { Collapse } from 'antd';
import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from './UploadDocumentComponent';


const { Panel } = Collapse;

const { TabPane } = Tabs;

const DetailComponent = ({regCertData,cDetailData,tabKey}) =>{
  // console.log("tab", tabKey)
  //onsole.log('cDetailData',cDetailData)
    const{applicationTab,faqTab, otherTabs, requiredDocuments}=cDetailData
    //const{requiredDocuments} =cDetailData
   // [requiredDocuments] =[otherTabs]
    const [show,setShow]=React.useState(false)
    const [dta,setData] =React.useState()
    const[regData,setRegData]=React.useState(null)
    const[tabLayout,setTablLayout]=React.useState(null)
    const[cdata, setcData] =React.useState()
    React.useEffect(()=>{
        //console.log('regData',regCertData)
        if(regCertData!==null){
            setRegData(regCertData.regStatus)
            
        }
        else{
            setRegData(null)
        }
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("right")
             
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("right")
             
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("right")
              
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 768px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else if(window.matchMedia("(min-width: 576px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else{
              setTablLayout("top")
              
              //console.log("min-width: 576px")
            }
          
          }
          handleResize()
          window.addEventListener('resize', handleResize)
    },[regCertData])
    
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
      setShow(false)
      //setRegStatus(false)
    };   

   
  //console.log('cDetailData',cDetailData)
    //console.log('applicationTab.cardMenuBox new',applicationTab.cardMenuBox)

    // console.log("details", cDetailData)
    // console.log("new",cDetailData.otherTabs)
    // console.log("first", cDetailData.requiredDocuments)
    const router = useRouter()

  return (
      <>
 <div className='facility-tab'>
              <Tabs tabPosition={tabLayout} className='sub-tab'>

                  <TabPane tab="Application" key="app">
                      <div className='page-content'>
                      <div dangerouslySetInnerHTML={{ __html:applicationTab.desc!==null?applicationTab.desc:<></>}} />
                          
                          <div className='row'>
                            {applicationTab.cardMenuBox!==null ?applicationTab.cardMenuBox.map((m,mix)=>
                            <div key={mix} className='col-md-6'>
                                <Card
                                    className='faci-card'
                                    hoverable
                                >

                                    <h4 className='link-disp-blue mb-0'>{m.manuName}</h4>
                                    <p className='mb-0'>{m.menuDesc}</p>
                                    <div className='btn-block mt-3 f-right'>
                                        {m.menuButton.map((b,bix)=>
                                            <>
                                            { b.btnLink!== null ? 
                                              <a key={bix} href={`${b.btnLink}`} target="_blank"><Button className='view-btn mr-5'>{b.btnName}</Button></a>
                                              :<><h6 style={{color:'red'}}>NOTE : The following can be applied by visiting the Panchayat.</h6></>
                                            }
                                            </>
                                        )}
                                    {mix==0?
                                    
                                    <Button onClick={()=>{window.location= 'http://localhost:3002/application?routeCode='+tabKey}} style={{display:'none'}} className='view-btn'>Upload Offline</Button>
                                    :
                                    <></>
                                    }
                                        
                                    </div>
                                    {m.manuName=='Online Application'?
                                    <div className='btn-block mt-3'>
                                    <Button onClick={() => handleShow()} style={{display:'none'}}   className='view-btn'>Upload Offline</Button>
                                    </div>
                                    :
                                    <>
                                    <div className='btn-block mt-3'>
                                    <Button onClick={()=>{window.location= 'http://localhost:3002/application?routeCode='+tabKey}} style={{display:'none'}}  className='view-btn'>Upload Offline</Button>
                                    </div>
                                    </>
                                    }


                                </Card>
                            </div>
                            ):<></>}
                              
                              
                          </div>
                          <div className='row'>
                                {regData!==null || regData=='Y'?
                                <UploadDocumentComponent/>
                                :
                                <></>
                                }
                                
                          </div>
                      </div>



                  </TabPane>


                  {otherTabs!==null? otherTabs.map((ot,otx)=>

                    <TabPane tab={ot.tabName} key={otx}>
                        {ot.tabName=="Documents"?
                        <>
                        <h5>Required Documents</h5>
                        {requiredDocuments!==null?requiredDocuments.map((ft,ftx)=>
                         <ul key={ftx}>
                                <li>{ft.description}</li>
                              </ul>
                              ):<></>}
                              </>
                        :
                        <div dangerouslySetInnerHTML={{ __html:ot.desc}} />
                        }
                         
                    </TabPane>
                            ):<></>
                            
                  }

                  
                  <TabPane tab="FAQ" key="faq">
                      <Collapse accordion>
                        {faqTab!==null ?faqTab.map((ft,ftx)=>
                            <Panel header={ft.ttitle} key={ftx}>
                            <div dangerouslySetInnerHTML={{ __html:ft.desc}} />
                            </Panel>
                        ):<></>}
                         
                      </Collapse>
                  </TabPane>

              </Tabs>
          </div>
        

      </>
  )
}
const mapStateToProps=createStructuredSelector({
    regCertData:selectRegCertData
})
export default connect(mapStateToProps) (DetailComponent)