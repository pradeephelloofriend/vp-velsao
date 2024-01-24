import React from 'react'
import Image from 'next/image'
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction';
import { NotificationOutlined,CalendarOutlined,PushpinOutlined ,BankOutlined,TranslationOutlined,ReadOutlined    } from '@ant-design/icons';
import OtherLinks from './OtherLinks';
import { useRouter } from 'next/router'

  
const SliderBottomBarComponent = ({noticeData,setTabKey}) => {
    //console.log('noticeData',noticeData)
    const router = useRouter()
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
        //alert(pathId)
        
                setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
    }
  return (
      <>
      <section className='slider-bottom-bar bg-c-blue'>
          <div className='container'>
              <div className='row'>
                  {/*<div className='col-md-6'>
                      <OtherLinks noticeData={noticeData} />
                  </div>*/}
                  <div className='col-12'>
                    <div className="kam-topbar-left  align-items-center">
                    <ul className='sm-btm-right d-flex justify-content-center'>
                                
                                <li onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')}>
                                    <span>
                                    <NotificationOutlined />
                                    </span>
                                    <a>Members</a>
                                </li>
                                <li>
                                    <span>
                                    <CalendarOutlined/>
                                    </span>
                                    <a>Events</a>
                                </li>
                                <li onClick={() =>goToPage('media/public-notices','public-notices','Public Notices','Media Links','/public-notices/','Yes')}>
                                    <span>
                                    <PushpinOutlined />
                                    </span>
                                    <a>Notices</a>
                                </li>
                                <li onClick={() =>goToPage('media/schemes','schemes','Schemes','Media Links','/schemes/','Yes')}>
                                    <span>
                                    <BankOutlined  />
                                    </span>
                                    <a>Schemes</a>
                                </li>
                                <li>
                                    <span>
                                    <TranslationOutlined  />
                                    </span>
                                    <a>Admin & Audit</a>
                                </li>
                                <li onClick={() =>goToPage('about-us/region','region','Region','About Us','/region/','Yes')}>
                                    <span>
                                    <ReadOutlined  />
                                    </span>
                                    <a >Region</a>
                                </li>
                                <li>
                                    <span>
                                    <CalendarOutlined/>
                                    </span>
                                    <a>E-Services</a>
                                </li>
                                <li>
                                    <span>
                                    <ReadOutlined  />
                                    </span>
                                    <a>Projects</a>
                                   
                                </li>
                                <li>
                                    <span onClick={()=> window.open("https://users.vpnagoasalcetegoa.com","_blank")}>
                                    <BankOutlined  />
                                    </span>
                                    <a onClick={()=> window.open("https://users.vpnagoasalcetegoa.com","_blank")}>Tax Payments</a>
                                </li>
                            </ul>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      </>
    
  )
}
const mapDispatchToProps=dispatch=>({
    setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps)(SliderBottomBarComponent)