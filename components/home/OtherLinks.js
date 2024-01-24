import React from 'react'
import Marquee from "react-fast-marquee";
import { NotificationOutlined, HomeOutlined, ProjectOutlined, TeamOutlined, FormOutlined, BookOutlined, LikeOutlined, AuditOutlined} from '@ant-design/icons';
import { getNoticeHomeData } from '../../lib/api';
import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const OtherLinks = ({setTabKey}) => {
    //console.log('noticedata1',noticeData)
    const [nData,setNdata]=React.useState(null)
   

    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getNoticeHomeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
            //   console.log('cData',cData)
               setNdata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    //console.log('Ndata = ', nData)


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
        <section className='slider-bottom-bar bg-light'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="container">
                            <Card className='news-links news-ps'>
                                <Card.Body>
                                    <div className="kam-topbar-left  align-items-center">
                                    <ul className='sm-btm-right d-flex justify-content-between'>
                                                    
                                        <li onClick={() =>goToPage('reporting/admin-and-audit','admin-and-audit','Admin and Audit','Reporting','/admin-and-audit/','Yes')}>
                                            <span>
                                            <AuditOutlined />
                                            </span>
                                            <a>Admin & Audit</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        <li onClick={() =>goToPage('reporting/grants-received','grants-received','Grants Received','Reporting','/grants-received/','Yes')}>
                                            <span>
                                                <LikeOutlined />
                                            </span>
                                            <a>Grants Received</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        <li onClick={() =>goToPage('reporting/tenders','tenders','Tenders','Reporting','/tenders/','Yes')}>
                                            <span>
                                                <BookOutlined />
                                            </span>
                                            <a>Tenders</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        <li onClick={() =>goToPage('reporting/applications','applications','Applications','Reporting','/applications/','Yes')}>
                                        <span>
                                            <FormOutlined />
                                            </span>
                                            <a>Applications</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        <li onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')}>
                                        <span>
                                            <TeamOutlined />
                                            </span>
                                            <a>Members</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        <li onClick={() =>goToPage('about-us/projects','projects','Projects Members','About Us','/projects/','Yes')}>
                                        <span>
                                            <ProjectOutlined />
                                            </span>
                                            <a>Projects</a>
                                            {/* <p>hello</p> */}
                                        </li>
                                        {/* <li>
                                            <span onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")}>
                                            <HomeOutlined />
                                            </span>
                                            <a onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")}>House Tax</a>
                                        </li> */}
                                    </ul>
                                </div>
                                </Card.Body>
                            </Card>

                            <div className='col-md-12 news-ps2'>
                                <div className='mar-container'>
                                <div className='marquee-box'>
                                    <Marquee
                                                gradient={false}
                                                speed={50}
                                                pauseOnHover={true}
                                            >
                                                {nData!==null?nData.map((data, index) =>
                                                    <a key={index} className="text-black ms-7"><span className="animate-text1">New</span><span className='not-text'>{data.notices.title}</span>
                                                    </a>
                                                ):<></>}
                                            </Marquee>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className='row'>
                    
                    
                     <div className='col-md-6 news-links'>
                        <div className="kam-topbar-left  align-items-center">
                            <ul className='sm-btm-right d-flex justify-content-between'>
                                            
                                <li onClick={() =>goToPage('reporting/admin-and-audit','admin-and-audit','Admin and Audit','Reporting','/admin-and-audit/','Yes')}>
                                    <span>
                                    <AuditOutlined />
                                    </span>
                                    <a>Admin & Audit</a>
                                </li>
                                <li onClick={() =>goToPage('reporting/grants-received','grants-received','Grants Received','Reporting','/grants-received/','Yes')}>
                                    <span>
                                        <LikeOutlined />
                                    </span>
                                    <a>Grants Received</a>
                                </li>
                                <li onClick={() =>goToPage('reporting/tenders','tenders','Tenders','Reporting','/tenders/','Yes')}>
                                    <span>
                                        <BookOutlined />
                                    </span>
                                    <a>Tenders</a>
                                </li>
                                <li onClick={() =>goToPage('reporting/applications','applications','Applications','Reporting','/applications/','Yes')}>
                                <span>
                                    <FormOutlined />
                                    </span>
                                    <a>Applications</a>
                                </li>
                                <li onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')}>
                                <span>
                                    <TeamOutlined />
                                    </span>
                                    <a>Members</a>
                                </li>
                                <li onClick={() =>goToPage('about-us/projects','projects','Projects Members','About Us','/projects/','Yes')}>
                                <span>
                                    <ProjectOutlined />
                                    </span>
                                    <a>Projects</a>
                                </li>
                                <li>
                                    <span onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")}>
                                    <HomeOutlined />
                                    </span>
                                    <a onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")}>House Tax</a>
                                </li>
                            </ul>
                        </div>
                    </div> 

                </div>*/}
            </div>

        </section>
       
         
    )
}

const mapDispatchToProps=dispatch=>({
    setTabKey:(data)=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps) (OtherLinks)
