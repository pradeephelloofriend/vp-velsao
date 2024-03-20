import React from 'react'
import Marquee from "react-fast-marquee";
import { NotificationOutlined, HomeOutlined, ProjectOutlined, TeamOutlined, FormOutlined, BookOutlined, LikeOutlined, AuditOutlined} from '@ant-design/icons';
import { getNoticeHomeData } from '../../lib/api';
import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const NewOtherLinks = ({setTabKey}) => {
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
        <div className='all-links container'>
                <div className='first-div'>
                                                    <div onClick={() =>goToPage('reporting/admin-and-audit','admin-and-audit','Admin and Audit','Reporting','/admin-and-audit/','Yes')}>
                                                        <span>
                                                        <AuditOutlined className='icon-div'/>
                                                        </span>
                                                        {/* <span></span> */}
                                                        <a>Admin & Audit</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                    <div className='second-div'>
                                                    <div onClick={() =>goToPage('reporting/grants-received','grants-received','Grants Received','Reporting','/grants-received/','Yes')}>
                                                        <span>
                                                            <LikeOutlined className='icon-div'/>
                                                        </span>
                                                        <a>Grants Received</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                    <div className='third-div'>
                                                    <div onClick={() =>goToPage('reporting/tenders','tenders','Tenders','Reporting','/tenders/','Yes')}>
                                                        <span>
                                                            <BookOutlined className='icon-div'/>
                                                        </span>
                                                        <a>Tenders</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                    <div className='fourth-div'>
                                                    <div onClick={() =>goToPage('reporting/applications','applications','Applications','Reporting','/applications/','Yes')}>
                                                    <span>
                                                        <FormOutlined className='icon-div'/>
                                                        </span>
                                                        <a>Applications</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                    <div className='fifth-div'>
                                                    <div onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')}>
                                                    <span>
                                                        <TeamOutlined className='icon-div'/>
                                                        </span>
                                                        <a>Members</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                    <div className='sixth-div'>
                                                    <div onClick={() =>goToPage('about-us/projects','projects','Projects Members','About Us','/projects/','Yes')}>
                                                    <span>
                                                        <ProjectOutlined className='icon-div'/>
                                                        </span>
                                                        <a>Projects</a>
                                                        {/* <p>hello</p> */}
                                                    </div>
                                                    </div>
                                                </div>
       
         
    )
}

const mapDispatchToProps=dispatch=>({
    setTabKey:(data)=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps) (NewOtherLinks)

