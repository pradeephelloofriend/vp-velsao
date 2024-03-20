import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectMenuData,selectTabKey} from '../../redux/menu/menuSelector'
import {setTabKey} from '../../redux/menu/menuAction'
import {Tabs,Card,Spin,Modal } from 'antd';
import { useRouter } from 'next/router'
import {getGalleryCat} from '../../lib/api'
import { getGalleryV2Data } from '../../lib/api';
import load from '../../public/img/loading.png'
import Image from 'next/image'
const { Meta } = Card;

import Axios from 'axios';

import TabDetailsComponent from '../about-us/TabDetailsComponent';
import GalleryTabDetailComponent from './GalleryTabDetailComponent';

const { TabPane } = Tabs;
const GalleryComponent = ({tabKey,routeTitle,menuData,cDetailData,routeUri,setTabKey}) => {
    const [mData,setMdata]=React.useState(null);
    const [isLoading,setIsLoading]=React.useState(false);
    //const [tabKey,setTabKey]=React.useState(routeUri)
    const [crData,setCrData]=React.useState(null)
    const router = useRouter();
    const[tabLayout,setTablLayout]=React.useState('left')

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [gallv2Data, setGallv2Data] = React.useState(null)
    const [selectedIdx, setSelectedIdx] = React.useState(null);

    const showModal = (idx) => {
      setSelectedIdx(idx);
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    React.useEffect(()=>{
        //console.log('tabKey',tabKey)
        let isApiSubscribed = true;
        setIsLoading(true)
        if(menuData.length>=1){
            const [data]=menuData.filter(d=>d.node.label==routeTitle)
            //console.log('filterData',data)
            setMdata(data.node)
        }
        if(tabKey!==null){
            //console.log('tabKey',tabKey)
            if(isApiSubscribed){
              if(tabKey=='/photos-and-video/'){
                async function fetchData() {
                  const cData = await getGalleryCat() //applo client  
                  const gallyv2Data = await getGalleryV2Data()
            
                  // 👇️ only update state if component is mounted
                  if (isApiSubscribed) {
                    setCrData(cData)
                    setGallv2Data(gallyv2Data)
                    setIsLoading(false)

                    // console.log("new data", cData)
                  }
                }
                fetchData()
                
                
              }
              
            }
            
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
            //setIsLoading(false)
          };
        
    },[menuData,routeTitle,tabKey])
    
    
   const {iscomplete}= router.query
   //console.log('crData',crData)
   console.log("gallv2Data : ", gallv2Data)
  return (
    <>
          <section className="wrapper bg-gray">
              <div className="container-fluid  py-10 py-md-12">
                  <div className="row">
                      <div className='col-12'>
                          <div className='gallery-disp-tab'>
                          <div className='row'>
                        {gallv2Data !== null ? gallv2Data.map((n, idx) => (
                        
                        <div className='col-lg-4 col-md-4 col-sm-12' key={idx}>
                        {n.galleryv2 !== null ? 
                            <Card
                            className=' faci-card card-article'
                            title={n.galleryv2.title}
                              hoverable
                              cover={
                                <Image alt="facilities"
                                    className=''
                                    placeholder="blur"
                                    blurDataURL={load}
                                    priority={true}
                                    src={n.galleryv2.image.mediaItemUrl !== null ?
                                      n.galleryv2.image.mediaItemUrl :
                                      'https://res.cloudinary.com/depg2aab2/image/upload/v1696576498/donbosco/noimgavail-min_ndtaun.jpg'
                                  }
                                    height={500}
                                    width={800}
                                />
                            }
                              onClick={() => showModal(idx)}
                            >
                            </Card>
                          :
                          <></>}
                        </div>
                        
                      )) : <><p>asd</p></>}
                      </div>



                      <Modal
                      width={1000}
                        // title="More Images"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                      >
                        {selectedIdx !== null && gallv2Data[selectedIdx] && (
                          <div className='row' key={selectedIdx}>
                            
                              {
                                gallv2Data[selectedIdx].galleryv2.articleGallery !== null ?
                                  gallv2Data[selectedIdx].galleryv2.articleGallery.map((gall_val, gall_id) => (
                                    <div className='col-lg-4 col-md-4 col-sm-12 my-4'>
                                    <img className='my-4' key={gall_id} src={gall_val.mediaItemUrl !== null ? gall_val.mediaItemUrl : ""}
                                      height={200} width={300}></img>
                                      </div>
                                  ))
                                  :
                                  <></>
                              }
                            
                          </div>
                        )}
                      </Modal>


                              {/* <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key)} tabPosition={tabLayout}>
                                {mData!==null?mData.childItems.edges.map((t,idx)=>
                                    <TabPane tab={t.node.label} key={t.node.uri}>
                                      <Spin spinning={isLoading} >
                                        <div className='page-content'>
                                            <div className="caption1">
                                                <h1>{t.node.label}</h1>
                                            </div>
                                            {crData!==null&&iscomplete=='Yes'?
                                           <GalleryTabDetailComponent cDetailData={crData}/>
                                            : <></>   }
                                        </div>
                                        </Spin>
                                 </TabPane>
                                ):<></>}
                                  
                                  
                              </Tabs> */}
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
export default connect(mapStateToProps,mapDispatchToProps) (GalleryComponent)