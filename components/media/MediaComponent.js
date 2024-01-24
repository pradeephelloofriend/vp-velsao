import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card } from 'antd';
import { useRouter } from 'next/router'
import {getRtiPageData} from '../../lib/api'

import Axios from 'axios';


import SchemeComponent from './SchemeComponent';
import NewsLetterComponent from './NewsLetterComponent';
import OtherTabDetailComponent from './OtherTabDetailComponent';
import PublicNoticeComponent from './PublicNoticeComponent';
import TabDetailsComponent from '../about-us/TabDetailsComponent';
const { TabPane } = Tabs;
const MediaComponent = ({tabKey,routeTitle,menuData,cDetailData,routeUri,setTabKey}) => {
  const router = useRouter();  
  const [mData,setMdata]=React.useState(null);
    const {title,desc,catCode,uri}= router.query
    //const [tabKey,setTabKey]=React.useState(routeUri)
    const [crData,setCrData]=React.useState(null)
    const[tabCode,setTabcode]=React.useState(uri)
    
    const[tabLayout,setTablLayout]=React.useState('left')
    React.useEffect(async()=>{
        //console.log('tabKey',tabKey)
        if(menuData.length>=1){
            const [data]=menuData.filter(d=>d.node.label==routeTitle)
            //console.log('filterData',data)
            setMdata(data.node)
        }
        if(tabKey!==null){
            //console.log('tabKey',tabKey)
            /*const cData = await getRtiPageData(tabKey) //applo client 
            setCrData(cData)*/
            setTabcode(tabKey)
        }
        /**Responsive tab */
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("left")
              
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("left")
              
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("left")
              
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
        
        
    },[menuData,routeTitle,tabKey])
    
    
   
   //console.log('crData',router.query)
  return (
    <>
          <section className="wrapper bg-gray">
              <div className="container-fluid  py-10 py-md-12">
                  <div className="row">
                      <div className='col-12'>
                          <div className='about-us-tab'>
                              <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)} tabPosition={tabLayout}>
                                {mData!==null?mData.childItems.edges.map((t,idx)=>
                                    <TabPane tab={t.node.label} key={t.node.uri}>
                                        <div className='page-content pr-10'>
                                            <div className="caption1">
                                                <h1>{t.node.label}</h1>
                                            </div>
                                            {tabCode=='/schemes/'?
                                            <SchemeComponent/>
                                            :tabCode=='/news-letters/'?
                                            <NewsLetterComponent/>
                                            :tabCode=='/public-notices/'?
                                            <PublicNoticeComponent/>
                                            :
                                            
                                            <TabDetailsComponent/>
                                            }
                                            
                                            
                                            
                                            
                                        </div>
                                        
                                 </TabPane>
                                ):<></>}
                                  
                                  
                              </Tabs>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    
    </>
  )
}

const mapStateToProps=createStructuredSelector({
    menuData:selectMenuData,
    tabKey:selectTabKey
})
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (MediaComponent)