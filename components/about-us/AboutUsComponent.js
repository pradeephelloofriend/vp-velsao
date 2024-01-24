import React from 'react'
import dynamic from "next/dynamic";

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card } from 'antd';
import { useRouter } from 'next/router'



import TabDetailsComponent from './TabDetailsComponent';
import VillageComponent from './VillageComponent';
import MessageComponent from './MessageComponent';
import RegionComponent from './RegionComponent';
import TaxesComponent from './TaxesComponent';
import ObligationComponent from './ObligationComponent';
import PowerComponent from './PowerComponent';
import HousetaxtestComponent from '../housetaxtest/HousetaxtestComponent';
import PanchStaffComponent from './PanchStaffComponent';
import ProjectComponent from './ProjectComponent';
// import HousetaxtestComponent from './HousetaxtestComponent';

const PmComponent = dynamic(
  () => import("./PanchayatMemberComponent"),
  {
      ssr: false,
  })
const { TabPane } = Tabs;
const AboutUsComponent = ({routeTitle,menuData,tabKey,setTabKey}) => {
    const [mData,setMdata]=React.useState(null);
    const[tabLayout,setTablLayout]=React.useState(null)
    const router = useRouter();
    // console.log('menuData fg',menuData.filter(d=>d.node.label))
    // console.log('routeTitle abou',routeTitle)

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
                        {t.node.route.code == 'panchayat-members' ?
                          <PmComponent />
                          :t.node.route.code =='village'?
                          <VillageComponent/>
                          :t.node.route.code=='message'?
                          <MessageComponent/>
                          :t.node.route.code=='region'?
                          <RegionComponent/>
                          :t.node.route.code == 'taxes-fees'?
                          <TaxesComponent/>
                          :t.node.route.code == 'vp_oblig'?
                          <ObligationComponent />
                          :t.node.route.code == 'power_duties'?
                          <PowerComponent />
                          :t.node.route.code == 'house-tax-test'?
                          <HousetaxtestComponent />
                          :t.node.route.code == 'panch-staff-members'?
                          <PanchStaffComponent />
                          :t.node.route.code == 'projects'?
                          <ProjectComponent />
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
export default connect(mapStateToProps,mapDispatchToProps) (AboutUsComponent)