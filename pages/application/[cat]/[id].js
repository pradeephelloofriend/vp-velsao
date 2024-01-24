import React from 'react'
//import BreadcumbComponent from '../../../components/breadcumb/BreadcumbComponent'
//import UperEndComponent from '../../../components/home/UperEndComponent'
import { useRouter } from 'next/router'
import {Button,Typography,Tabs,Collapse } from 'antd';
const {Title,Text}=Typography
const { TabPane } = Tabs;
const { Panel } = Collapse;
export async function getServerSideProps() {
    const searchAreaData = await fetch(`${process.env.API_PATH}/search-area`)
    const searchData = await searchAreaData.json()
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/service-details`)
    const data = await res.json()
    //-----------------------------------
    //BIND RETURN DATA THROUGH PROPS
    //-----------------------------------
    return { props: { data,searchData } }
}
const Index = ({data,searchData}) => {
    const router= useRouter()
    const [sData]=data.filter(d=>d.serviceLink.KY==router.query.id && d.serviceLink.RT==router.query.cat )
   // console.log('router',router)
   // console.log('data',data)

    
    return (
        <>
        {/*<BreadcumbComponent pageInfo={{title:router.query.tabTitle,desc:router.query.desc}} />*/}
        
            <section className="wrapper bg-gray sd-area">
                <div className="container pt-10 pb-12 pt-md-12 pb-md-12">
                    <div className="row">
                      <div className='col-lg-12'>
                        <Title level={2} className="text-c-blue no-margin">{sData.title}</Title>
                        <Text  className="">{sData.desc1}</Text >
                      </div> 

                      <div className='col-lg-12 mt-10'>
                            <Tabs defaultActiveKey="1" tabPosition={"left"}>
                                {sData.content.map((i,index)=>
                                    <TabPane tab={i.tabTitle} key={index}  >
                                        <div>
                                        <Title level={3} className="text-c-blue">{i.tabTitle}</Title>
                                            <ul className="icon-list bullet-bg bullet-soft-green">
                                                {i.tabContent.map((v,index)=>
                                                <li key={index}><span><i className="uil uil-check"></i></span><span>{v.title}</span></li>
                                                )}
                                                
                                                
                                            </ul> 
                                        </div>
                                    </TabPane>
                                )}
                                
                                <TabPane tab={"FAQs"} key={"Faq"} >
                                    <div>
                                        <Title level={3} className="text-c-blue">{"FAQs"}</Title>
                                        <Collapse accordion>
                                            {sData.faqs.faqItem.map((f, index) =>
                                                <Panel header={f.title} key={index}>
                                                    <p>{f.desc}</p>
                                                </Panel>
                                            )}


                                        </Collapse>


                                    </div>
                                </TabPane>
                            </Tabs>
                      </div> 
                    </div>
                </div>

            </section>
        </>
    )
}

export default Index
