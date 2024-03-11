// import React from 'react'
// import {Card, Tabs, List, Spin} from 'antd'
// import Carousel from 'react-bootstrap/Carousel';
// const { TabPane } = Tabs;
// import {connect} from 'react-redux'
// import { setTabKey } from '../../redux/menu/menuAction'
// import {useRouter} from 'next/router'
// import Image from 'next/image'
// import moment from 'moment';
// import { CalendarOutlined } from '@ant-design/icons';
// import RecentDevelopmentComponent from './RecentDevelopmentComponent'
// import {getNewsLetterDataHome } from '../../lib/api'
// import Marquee from "react-fast-marquee";
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { getSliderEventData } from '../../lib/api';
// import { getRecentDevData } from '../../lib/api';
// import PopulationCountSectionComponent from './PopulationCountSectionComponent';
// import LatestNewsComponent from './LatestNewsComponent';
// import RecentDevComponent from './RecentDevComponent';
// const onChange = (key) => {
//   // console.log(key);
// };
// const NewsSectionComponent = ({setTabKey,devData}) => {
//   const [expandedImgSrc, setExpandedImgSrc] = React.useState('https://res.cloudinary.com/depg2aab2/image/upload/v1696835540/vp/pissurlem/MRF_shed1-min_ef1vk8.jpg');
//   const [imgText, setImgText] = React.useState('');
//   const [containerDisplay, setContainerDisplay] = React.useState('none');
//   const [isLoaded, setIsLoaded] = React.useState(false);
//   const [rdData,setRddata]=React.useState(null)
//   const handleLoad = () => {
//     setIsLoaded(true);
//   };
//   const ViewDispImg = (imgs) => {
//     setExpandedImgSrc(imgs.src);
//     setImgText(imgs.alt);
//     setContainerDisplay('block');
//   };
//   const router=useRouter()
//   function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
//     //alert(pathId)
//             setTabKey(uri)
//             router.push({
//                 pathname: `/${pathId}/`,
//                 query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
//             })
// }
//   const [newsData,setNewsdata]=React.useState(null)
//   const [eventMnyData, setEventMnyData]=React.useState(null)
//   React.useEffect(()=>{
//       //setLoading(true)
//       let isApiSubscribed = true;
//       async function fetchData() {
//           const nwData = await getNewsLetterDataHome()
//           const emData = await getSliderEventData()
//           const rData = await getRecentDevData()
//           // 👇️ only update state if component is mounted
//           if (isApiSubscribed) {
//             // console.log('nwData new',nwData)
//             setNewsdata(nwData)
//             setEventMnyData(emData)
//             setRddata(rData)
//           }
//         }
//         fetchData()
//         return () => {
//           // cancel the subscription
//           isApiSubscribed = false;
//         };
//   },[])
//   // console.log('newsData',newsData)
//   // console.log('newsData.length : ', newsData.length)
//   console.log('rdData',rdData)
//   return (
//       <>
//           {/* <section className="wrapper news-bgm-anim news-bgm-anim-duplicate1"> */}
//           <section className="wrapper abt_sec news-bgm-anim pb-10">
//               <div className="py-10 py-md-10 pb-md-10">
//                   <div className="row px-4">
//                       <div className="col-md-4 col-xl-4  news-bgm-anim-duplicate2" style={{display: 'none'}}>
//                         <div className='dev-card'>
//                           <Card className='dev0-card recent-devs abt-card' 
//                           title={
//                           <>
//                           {/* <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070682/vp/nagoa/social_gbnief.png'} alt='' height={35} width={35} /> */}
//                             {/* <span className='abt-card-head-title link-c-white'> Recent development works</span> */}
//                             <div className='top_head_rbar '>
//                             <div className='th_title'>
//                               <h4>Recent development works</h4>
//                             </div>
//                           </div>
//                           </>}>
//                               {/* <RecentDevelopmentComponent devData={devData}/> */}
//                               <RecentDevelopmentComponent/>
//                             </Card>
//                           </div>
//                       </div>
//                       <div className="col-md-5 col-xl-5 news-rw">
//                          <LatestNewsComponent/>
//                       </div>
//                       <div className="col-md-6 col-xl-6 news-rw">
//                         <div className='row'>
//                         <div className="col-md-6 col-xl-6">
//                           <Card className='abt-card bg-c-blue2 mb-5' >    
//                             <div className='add_mem_block'>
//                               <Carousel fade>
//                                 {eventMnyData !== null ? eventMnyData.map((i, index) =>
//                                   <Carousel.Item key={index}>
//                                     <img className="d-block w-100 h-100"
//                                       alt="s1"
//                                       src={i.image.sourceUrl}
//                                     />
//                                     {i.link !== null ?
//                                       <><a href={i.link} target='_blank'><h4 className='text-black py-4 px-sm-2'>{i.title}</h4></a></>
//                                       :
//                                       (i.title !== null ? <><h4 className='text-black py-4 px-sm-2'>{i.title}</h4></> : <></>)
//                                     }
//                                   </Carousel.Item>
//                                 ) : <></>}
//                               </Carousel>
//                             </div>
//                           </Card>
//                         </div>
//                           <div className='col-md-6 col-sm-12'>
//                             {/* <div>
//                               <div className='top_head_bar' style={{marginBottom : '45px'}}>
//                                 <div className='th_title'>
//                                   <h4>Socials</h4>
//                                 </div>
//                               </div>
//                               {!isLoaded && 
//                                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}><Spin/></div>}
//                               <TwitterTimelineEmbed
//                                 sourceType="profile"
//                                 screenName="mygovindia"
//                                 options={{ height: 300, width: "auto"}}
//                                 onLoad={handleLoad}
//                               />
//                             </div> */}
//                              <div>
//                 <h2>Recent development works</h2>
//               </div>
//               <Card className='rec-card mb-5' style={{ backgroundColor: "#d4d4d4", margin: '10% 0px' }}>
//               <Carousel fade>
//                     {rdData !== null ? rdData.map((i, index) =>
//                       <Carousel.Item key={index}>
//                         <div style={{ position: 'relative' }}>
//                           <img className="d-block w-100" alt="s1" src={i.developments.image.sourceUrl} />
//                           <div className='rec-dev-text'>
//                             {i.developments.title !== null ?
//                               <span className='text-white'>{i.developments.title}</span>
//                               :
//                               <></>
//                             }
//                           </div>
//                         </div>
//                       </Carousel.Item>
//                     ) : <></>}
//                   </Carousel>
//               </Card>
//                           </div>
//                         </div>
//                       </div>
// </div>
// <div className='pt-5'>
//                       <PopulationCountSectionComponent/>
// </div>
// <div className='px-4'>
//                    <RecentDevComponent />
// </div>
//                   </div>
//           </section>
//       </>
//   )
// }
// const mapDispatchToProps=dispatch=>({
//   setTabKey:data=>dispatch(setTabKey(data))
// })
// export default connect(null,mapDispatchToProps)(NewsSectionComponent)
"use strict";
//# sourceMappingURL=NewsSectionComponent.dev.js.map
