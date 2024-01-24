import React from 'react'
import { useRouter } from 'next/router'

import BreadcumbComponent from '../../../components/breadcumb/BreadcumbComponent'
import {Button,Typography,List, Avatar, Space} from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image'
import dummy from '../../../public/img/services/dummy.png'
const {Title,Text}=Typography
export async function getServerSideProps() {
    
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/produt-tab-area`)
    const data = await res.json()
    //-----------------------------------
    //BIND RETURN DATA THROUGH PROPS
    //-----------------------------------
    return { props: { data } }
}
const index = ({data}) => {
    const router=useRouter()
    const [sData]=data.serviceContent.filter(d=>d.tabLink.KY==router.query.catCode )
    //console.log('tabdata',sData)
   // console.log('router',router)
    const pathName=router.pathname
    function goToPage(cat,id,tabTitle,desc){
        router.push({
            pathname: `${pathName}/[id]`,
            query:{cat:cat,id:id,tabTitle:tabTitle,desc:desc}
        })
    }
    //console.log('router',pathName)
    return (
        <>
        {/*<BreadcumbComponent pageInfo={{title:router.query.desc,desc:router.query.cat}} />*/}
            <section className="wrapper bg-light dy-service">
                <div className="container pt-15 pt-md-11 pb-13 pb-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card serv-card">
                                <div className="card-body">
                                    <div className="scheme-content">
                                        <div className="scheme-header mb-5 ">
                                            
                                                <Title level={2} className="text-blue m-0">{sData.tabTitle}</Title>

                                            

                                        </div>

                                    </div>
                                    <div className="serv-list">
                                        <List
                                            itemLayout="vertical"
                                            pagination={{
                                                onChange: page => {
                                                    //console.log(page);
                                                },
                                                pageSize: 3,
                                                
                                            }}
                                            dataSource={sData.tabContent}
                                        
                                            renderItem={item => (
                                                <List.Item
                                                
                                                    key={"item.title"}
                                                    actions={[
                                                        <a className="hover link-blue" 
                                                        onClick={()=>goToPage(item.serviceLink.RT,item.serviceLink.KY,sData.tabTitle,item.serviceLink.DL01)}
                                                        >
                                                           
                                                            Read More <RightOutlined className="arrow-animation" />
                                                        </a>
                                                        
                                                      ]}
                                                      extra={
                                                        <Image
                                                            width={177}
                                                            height={156}
                                                            alt="logo"
                                                            src={item.serviceImage.url}
                                                        />
                                                      
                                                    }
                                                    
                                                >
                                                     <Button style={{float:'right',}}> Download </Button>
                                                   
                                                
                                                   
                                                    <List.Item.Meta
                                                        avatar={<Avatar src={item.serviceIcon} />}
                                                        title={<Title className="text-c-blue m-0" level={4}>{item.serviceTitle}</Title>}
                                                        
                                                        
                                                    />
                                                    {item.serviceDesc}
                                                </List.Item>
                                            )}
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

export default index
