// import React from 'react';
// import {Card, Tabs, List, Spin} from 'antd'
// import Carousel from 'react-bootstrap/Carousel';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { getNewsLetterDataHome, getRecentDevData, getSliderEventData } from '../../lib/api';
// const RecentDevComponent=() => {
//     const [rdData,setRddata]=React.useState(null)
//     const handleLoad = () => {
//       setIsLoaded(true);
//     };
//     const ViewDispImg = (imgs) => {
//       setExpandedImgSrc(imgs.src);
//       setImgText(imgs.alt);
//       setContainerDisplay('block');
//     };
//     const router=useRouter()
//     function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
//       //alert(pathId)
//               setTabKey(uri)
//               router.push({
//                   pathname: `/${pathId}/`,
//                   query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
//               })
//   }
//     const [newsData,setNewsdata]=React.useState(null)
//     const [eventMnyData, setEventMnyData]=React.useState(null)
//     React.useEffect(()=>{
//         //setLoading(true)
//         let isApiSubscribed = true;
//         async function fetchData() {
//             const nwData = await getNewsLetterDataHome()
//             const emData = await getSliderEventData()
//             const rData = await getRecentDevData()
//             // 👇️ only update state if component is mounted
//             if (isApiSubscribed) {
//               // console.log('nwData new',nwData)
//               setNewsdata(nwData)
//               setEventMnyData(emData)
//               setRddata(rData)
//             }
//           }
//           fetchData()
//           return () => {
//             // cancel the subscription
//             isApiSubscribed = false;
//           };
//     },[])
//     // console.log('newsData',newsData)
//     // console.log('newsData.length : ', newsData.length)
//     console.log('rdData',rdData)
//   return (
//     // <div>
//     //      <div className='row' style={{ marginTop: '50px' }}>
//     //                   <div className='col-md-5' >
//     //           <div>
//     //             <h2>Recent development works</h2>
//     //           </div>
//     //           <Card className='rec-card mb-5' style={{ backgroundColor: "#d4d4d4", margin: '10% 0px' }}>
//     //           <Carousel fade>
//     //                 {rdData !== null ? rdData.map((i, index) =>
//     //                   <Carousel.Item key={index}>
//     //                     <div style={{ position: 'relative' }}>
//     //                       <img className="d-block w-100" alt="s1" src={i.developments.image.sourceUrl} />
//     //                       <div className='rec-dev-text'>
//     //                         {i.developments.title !== null ?
//     //                           <span className='text-white'>{i.developments.title}</span>
//     //                           :
//     //                           <></>
//     //                         }
//     //                       </div>
//     //                     </div>
//     //                   </Carousel.Item>
//     //                 ) : <></>}
//     //               </Carousel>
//     //           </Card>
//               {/* <div class="masonry-container-lg">
//                           <img class="" 
//                             src={expandedImgSrc} 
//                             style={{border : '15px solid #d4d4d4'}}
//                             width={500} and height={400} alt="" />
//                         </div> */}
//             // </div>
//             // <div className='col-md-3 col-sm-12'>
//             //                 <div className=''>
//             //                   <div className='top_head_bar'>
//             //                     <div className='th_title'>
//             //                       <h4>Activities</h4>
//             //                     </div>
//             //                   </div>
//             //                   <Card className='' style={{ backgroundColor: '#ffffff00' }}>
//             //                     <Card
//             //                       // title={d.name} 
//             //                       className='act-card link-ct-blue mb-0 text-center '
//             //                       hoverable
//             //                       cover={
//             //                         <Image alt="facilities"
//             //                           className=''
//             //                           priority={true}
//             //                           src={"https://res.cloudinary.com/depg2aab2/image/upload/v1692851739/vp/Chicalim/g20_xqpocf.png"}
//             //                           height={150}
//             //                           width={282}
//             //                         />}
//             //                     >
//             //                       {/* <h6 className=''> One Earth One Family One Future </h6> */}
//             //                       <p className=''>One Earth One Family </p>
//             //                     </Card>
//             //                     <Card
//             //                       // title={d.name} 
//             //                       className='act-card link-ct-blue mb-0 text-center '
//             //                       hoverable
//             //                       cover={
//             //                         <Image alt="facilities"
//             //                           className=''
//             //                           priority={true}
//             //                           src={"https://res.cloudinary.com/depg2aab2/image/upload/v1694513170/vp/nagargoa/docimg1-min_yvg2ke.png"}
//             //                           height={150}
//             //                           width={282}
//             //                         />}
//             //                     >
//             //                       {/* <h6 className=''> One Earth One Family One Future </h6> */}
//             //                       <p className=''>Heath Benefits For The Public</p>
//             //                     </Card>
//             //                   </Card>
//             //                 </div>
//             //               </div>
//     //                       <div className='col-md-4 col-sm-12'>
//     //                         <Card
//     //                           // title={d.name} 
//     //                           className='act-card link-ct-blue mb-0 '
//     //                           hoverable
//     //                         >
//     //                           <h6 className='mb-5 text-center text-decoration-underline'> Helpline Contact </h6>
//     //                           <ul>
//     //                             <li><p className=''>Police – <b>100</b></p></li>
//     //                             <li><p className=''>Fire – <b>101</b></p></li>
//     //                             <li><p className=''>Ambulance –  <b>102</b></p></li>
//     //                             <li><p className=''>Women Helpline - <b>1091</b></p></li>
//     //                             <li><p className=''>Child Helpline - <b>1098</b></p></li>
//     //                           </ul>
//     //                         </Card>
//     //                       </div>
//     //                       </div>
//     // </div>
//   )
// }
// export default RecentDevComponent
"use strict";
//# sourceMappingURL=RecentDevComponent.dev.js.map
