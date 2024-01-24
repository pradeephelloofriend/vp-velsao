import React from 'react'
import {Card, Tabs, List, Spin} from 'antd'
const { TabPane } = Tabs;
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction'
import {useRouter} from 'next/router'
import Image from 'next/image'
import moment from 'moment';
import { CalendarOutlined } from '@ant-design/icons';
import RecentDevelopmentComponent from './RecentDevelopmentComponent'
import {getNewsLetterDataHome } from '../../lib/api'
import Marquee from "react-fast-marquee";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const onChange = (key) => {
  // console.log(key);
};

const NewsSectionComponent = ({setTabKey,devData}) => {
  const [expandedImgSrc, setExpandedImgSrc] = React.useState('https://res.cloudinary.com/depg2aab2/image/upload/v1696835540/vp/pissurlem/MRF_shed1-min_ef1vk8.jpg');
  const [imgText, setImgText] = React.useState('');
  const [containerDisplay, setContainerDisplay] = React.useState('none');

  const [isLoaded, setIsLoaded] = React.useState(false);

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
  React.useEffect(()=>{
      //setLoading(true)
      let isApiSubscribed = true;
      async function fetchData() {
             
          const nwData = await getNewsLetterDataHome()
          // 👇️ only update state if component is mounted
          if (isApiSubscribed) {
            // console.log('nwData new',nwData)
            setNewsdata(nwData)
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
  return (
      <>
          {/* <section className="wrapper news-bgm-anim news-bgm-anim-duplicate1"> */}
          <section className="wrapper abt_sec news-bgm-anim">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      


                      <div className="col-md-6 col-xl-7  news-bgm-anim-duplicate2" style={{display: 'none'}}>
                        <div className='dev-card'>
                          <Card className='dev0-card recent-devs abt-card' 
                          title={
                          <>
                          {/* <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070682/vp/nagoa/social_gbnief.png'} alt='' height={35} width={35} /> */}
                            {/* <span className='abt-card-head-title link-c-white'> Recent development works</span> */}
                            <div className='top_head_rbar'>
                            <div className='th_title'>
                              <h4>Recent development works</h4>
                            </div>
                          </div>
                          </>}>
                              {/* <RecentDevelopmentComponent devData={devData}/> */}
                              <RecentDevelopmentComponent/>
                            </Card>
                          </div>
                      </div>


            <div className='col-md-6'>
              <Card className='rec-card mb-5' style={{ backgroundColor: "#142f4700", border: '0px' }}>
                <div>
                  <h2>Recent development works</h2>
                </div>
                <div class="masonry-container">
                  <div class="panel" >
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://res.cloudinary.com/depg2aab2/image/upload/v1696835540/vp/pissurlem/MRF_shed1-min_ef1vk8.jpg" alt="" />
                    </div>
                  </div>
                  <div class="panel" >
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://res.cloudinary.com/depg2aab2/image/upload/v1696835529/vp/pissurlem/VP_Pissurlem_Ghar1-min_pjhidv.jpg" alt="" />
                    </div>
                  </div>
                  {/* <div class="panel" >
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/waves.jpg" alt="" />
                    </div>
                  </div>
                  <div class="panel">
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/docks.jpg" alt="" />
                    </div></div>
                  <div class="panel">
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/forest.jpg" alt="" />
                    </div>
                  </div>
                  <div class="panel">
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/docks.jpg" alt="" />
                    </div></div>
                  <div class="panel">
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/forest.jpg" alt="" />
                    </div>
                  </div>
                  <div class="panel">
                    <div class="panel-wrapper">
                      <img class="panel-img" onMouseOver={(e) => ViewDispImg(e.target)} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/375042/waves.jpg" alt="" />
                    </div>
                  </div> */}
                </div>
              </Card>
            </div>

            <div className='col-md-6' style={{ marginTop: '24px' }}>
              <Card className='rec-card mb-5' style={{ backgroundColor: "#d4d4d4", margin: '10% 0px' }}>
                <img class="rec-img-sz"

                  src={expandedImgSrc}
                  // src={"https://res.cloudinary.com/depg2aab2/image/upload/v1694587483/vp/nagargoa/vpnimg-min_smnzhc.jpg"} 
                  // style={{border : '15px solid #d4d4d4'}}
                  alt="" />
              </Card>
              {/* <div class="masonry-container-lg">
                          <img class="" 
                            src={expandedImgSrc} 
                            style={{border : '15px solid #d4d4d4'}}
                            width={500} and height={400} alt="" />
                        </div> */}
            </div>



                      <div className="col-md-6 col-xl-6 news-rw">
                          <div className='vil-info'>

                          <div className='top_head_bar'>
                            <div className='th_title'>
                              <h4>Latest News</h4>
                            </div>
                          </div>
                          <Card className='abt-card mb-5' >
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
                                
                                  {/* <div className='news-content'>
                                  <p onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')} 
                                  ><span>{'> '}</span>{n.newsLetter.title} </p>
                                </div> */}
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
                              
                          </Card>

                            
                          </div>
                      </div>

                      <div className="col-md-6 col-xl-6 news-rw">
                        <div className='row'>
                          <div className='col-md-5 col-sm-12'>
                            <div className=''>
                              <div className='top_head_bar'>
                                <div className='th_title'>
                                  <h4>Activities</h4>
                                </div>
                              </div>
                              <Card className='mb-5' style={{ backgroundColor: '#ffffff00' }}>
                                <Card
                                  // title={d.name} 
                                  className='act-card link-ct-blue mb-0 text-center '
                                  hoverable
                                  cover={
                                    <Image alt="facilities"
                                      className=''
                                      priority={true}
                                      src={"https://res.cloudinary.com/depg2aab2/image/upload/v1692851739/vp/Chicalim/g20_xqpocf.png"}
                                      height={150}
                                      width={282}
                                    />}
                                >
                                  {/* <h6 className=''> One Earth One Family One Future </h6> */}
                                  <p className=''>One Earth One Family </p>
                                </Card>
                                <Card
                                  // title={d.name} 
                                  className='act-card link-ct-blue mb-0 text-center '
                                  hoverable
                                  cover={
                                    <Image alt="facilities"
                                      className=''
                                      priority={true}
                                      src={"https://res.cloudinary.com/depg2aab2/image/upload/v1694513170/vp/nagargoa/docimg1-min_yvg2ke.png"}
                                      height={150}
                                      width={282}
                                    />}
                                >
                                  {/* <h6 className=''> One Earth One Family One Future </h6> */}
                                  <p className=''>Heath Benefits For The Public</p>
                                </Card>
                              </Card>
                            </div>
                          </div>

                          <div className='col-md-7 col-sm-12'>
                            <div>
                              <div className='top_head_bar' style={{marginBottom : '45px'}}>
                                <div className='th_title'>
                                  <h4>Socials</h4>
                                </div>
                              </div>
                              {!isLoaded && 
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}><Spin/></div>}
                              <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="mygovindia"
                                options={{ height: 300, width: "auto"}}
                                onLoad={handleLoad}
                              />
                            </div>
                          </div>
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
export default connect(null,mapDispatchToProps)(NewsSectionComponent)