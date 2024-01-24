import React from 'react'
import dynamic from "next/dynamic";

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card } from 'antd';
import { useRouter } from 'next/router'



import TabDetailsComponent from './TabDetailsComponent';
import ApplicationsComponent from './ApplicationsComponent';
import GrantsReceivedComponent from './GrantsReceivedComponent';
import TendersComponent from './TendersComponent';
import AdminAudit from './AdminAudit';

const { TabPane } = Tabs;
const ReportingComponent = ({routeTitle,menuData,tabKey,setTabKey}) => {
    const [mData,setMdata]=React.useState(null);
    const[tabLayout,setTablLayout]=React.useState(null)
    const router = useRouter();
    // console.log('mData new',menuData.filter(d=>d.node))
    // console.log('routeTitle report',routeTitle)
    
    React.useEffect(()=>{
        //console.log('menuData',menuData)
        if(menuData.length>=1){
            const [data]=menuData.filter(d=>d.node.label==routeTitle)
            //console.log('filterData',data)
            setMdata(data.node)
        }
        //for responsive
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

    },[menuData,routeTitle])
    // console.log('mData',mData)

   const {title}= router.query
  return (
    <>
      <section className="wrapper bg-gray">
        <div className="container-fluid  py-10 py-md-12">
          <div className="row">
            <div className='col-12'>
              <div className='about-us-tab'>
                <Tabs activeKey={tabKey} onTabClick={(key)=>setTabKey(key)} tabPosition={tabLayout}>
                  {mData !== null ? mData.childItems.edges.map((t, idx) =>
                    <TabPane tab={t.node.label} key={t.node.uri}>
                      <div className='page-content'>
                        <div className="caption1">
                          <h1>{t.node.label}</h1>
                          
                        </div>
                        {t.node.route.code == 'applications' ?
                          <ApplicationsComponent/>
                          :t.node.route.code =='grants-received'?
                          <GrantsReceivedComponent/>
                          :t.node.route.code=='tenders'?
                          <TendersComponent/>
                          :t.node.route.code=='admin-and-audit'?
                          <AdminAudit/>
                          :
                          <TabDetailsComponent/>
                        }
                      </div>

                    </TabPane>
                  ) : <></>}


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
export default connect(mapStateToProps,mapDispatchToProps) (ReportingComponent)