import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card } from 'antd';
import { useRouter } from 'next/router'
import {getRtiPageData} from '../../lib/api'

import Axios from 'axios';

import RtiTabDetailComponent from './RtiTabDetailComponent';
import SpinningComponent from '../spin/SpinningComponent';
const { TabPane } = Tabs;
const RtiComponent = ({tabKey,routeTitle,menuData,cDetailData,routeUri,setTabKey}) => {
    const [mData,setMdata]=React.useState(null);
    //const [tabKey,setTabKey]=React.useState(routeUri)
    const [crData,setCrData]=React.useState(null)
    const router = useRouter();
    const[tabLayout,setTablLayout]=React.useState('left')
    React.useEffect(async()=>{
        //console.log('tabKey',tabKey)
        let isApiSubscribed = true;
        if(menuData.length>=1){
            const [data]=menuData.filter(d=>d.node.label==routeTitle)
            //console.log('filterData',data)
            setMdata(data.node)
        }
        if(tabKey!==null){
            //console.log('tabKey',tabKey)
            async function fetchData() {
              const cData = await getRtiPageData(tabKey) //applo client  
        
              // 👇️ only update state if component is mounted
              if (isApiSubscribed) {
                setCrData(cData)
              }
            }
            fetchData()
            
            
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
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
        
    },[menuData,routeTitle,tabKey])
    
    
   const {title,desc}= router.query
   //console.log('crData',crData)
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
                                            {crData!==null?
                                            <RtiTabDetailComponent cDetailData={crData}/>
                                            
                                            :<SpinningComponent/>   }
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
export default connect(mapStateToProps,mapDispatchToProps) (RtiComponent)