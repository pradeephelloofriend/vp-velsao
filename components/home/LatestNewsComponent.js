import React from 'react'
import { useState, useEffect } from 'react';
import { getNewsLetterDataHome, getSliderEventData, getRecentDevData } from '../../lib/api';
import { useRouter } from 'next/router';
import { Card } from 'antd';
import moment from 'moment';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function LatestNewsComponent() {
    const [expandedImgSrc, setExpandedImgSrc] = React.useState('https://res.cloudinary.com/depg2aab2/image/upload/v1696835540/vp/pissurlem/MRF_shed1-min_ef1vk8.jpg');
    const [imgText, setImgText] = React.useState('');
    const [containerDisplay, setContainerDisplay] = React.useState('none');
  
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [rdData,setRddata]=React.useState(null)
  
    const handleLoad = () => {
      setIsLoaded(true);
    };
  
    const ViewDispImg = (imgs) => {
      setExpandedImgSrc(imgs.src);
      setImgText(imgs.alt);
      setContainerDisplay('block');
    };
  
    const router=useRouter()
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
      //alert(pathId)
      
              setTabKey(uri)
              router.push({
                  pathname: `/${pathId}/`,
                  query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
              })
  }
    
    const [newsData,setNewsdata]=React.useState(null)
    const [eventMnyData, setEventMnyData]=React.useState(null)
    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
               
            const nwData = await getNewsLetterDataHome()
            const emData = await getSliderEventData()
            const rData = await getRecentDevData()
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              // console.log('nwData new',nwData)
              setNewsdata(nwData)
              setEventMnyData(emData)
              setRddata(rData)
            }
          }
        
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    // console.log('newsData',newsData)
    // console.log('newsData.length : ', newsData.length)
    console.log('rdData',rdData)
  return (
    <div className='tab-less'>
       {/* <div className='vil-info'> */}

      <Tabs defaultActiveKey="1">
  <TabPane tab="Latest News" key="1">
  <div className='news-sidebar m-t20'>
  {newsData!==null?newsData.map((n,idx)=>{
      //console.log('date',)
      let day = n.newsLetter.date;
      let parsed = moment(day, "DD/MM/YYYY");
      const date=parsed.format("ll")
      const tempDate=date.split(',')
      //console.log('date-nes',tempDate)
    return(
      <>
        
        <div key={idx} className="news-block">
          <a title="" onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}>
            <h4></h4>
              <div className="news-date">{tempDate[0]}<span>{tempDate[1]}</span></div>
              <div className='news-content'>
                <div className='f-right news-status'>
                  <span className="badge bg-c-red rounded-pill blink">New</span>
                </div>
                <h6>{n.newsLetter.title}</h6>
                <p>{n.newsLetter.desc}</p>
              </div>
              
          </a>
      </div>
      </>
      
      
    )
    
  }
      
  ):<></>}
  <a
    onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}
    href="#"
    className="more hover link-disp-blue mt-3 f-right news-vw">View More</a>
    </div>
  </TabPane>
</Tabs>
{/* </div> */}
{/* <Card className='abt-card mb-5' >
<marquee direction="up" 
  // scrollamount="4" 
  scrollamount={newsData && newsData.length == 1 ? "0" : "4"}
>
  <div className='news-sidebar m-t20'>
  {newsData!==null?newsData.map((n,idx)=>{
      //console.log('date',)
      let day = n.newsLetter.date;
      let parsed = moment(day, "DD/MM/YYYY");
      const date=parsed.format("ll")
      const tempDate=date.split(',')
      //console.log('date-nes',tempDate)
    return(
      <>
        
        <div key={idx} className="news-block">
          <a title="" onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}>
            <h4></h4>
              <div className="news-date">{tempDate[0]}<span>{tempDate[1]}</span></div>
              <div className='news-content'>
                <div className='f-right news-status'>
                  <span className="badge bg-c-red rounded-pill blink">New</span>
                </div>
                <h4>{n.newsLetter.title}</h4>
                <p>{n.newsLetter.desc}</p>
              </div>
              
          </a>
      </div>
      </>
      
      
    )
    
  }
      
  ):<></>}
    </div>
    </marquee>
  <a
    onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}
    href="#"
    className="more hover link-disp-blue mt-3 f-right news-vw">View More</a>
    
</Card> */}

  
</div>
  )
}

export default LatestNewsComponent
