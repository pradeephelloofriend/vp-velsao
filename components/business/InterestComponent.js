import React from 'react'
import {Button,Typography,Tabs,Collapse } from 'antd';
const {Title,Text}=Typography
const { TabPane } = Tabs;
const InterestComponent = ({data}) => {
    //console.log('roi=',data)
    return (
        <>
            <section className="wrapper bg-light roi-area">
                <div className="container py-14 py-md-16">
                    <h2 className="display-4 mb-3">{data.title}</h2>
                    <p className="lead fs-lg">{data.desc1}</p>
                    <div className="row">
                        {/*<div class="col-lg-4">
                            <p>{data.desc2}</p>
                        </div>*/}
                        <div className="col-lg-12">
                        <Tabs defaultActiveKey="1" tabPosition={"left"}>
                            {data.content.filter(d=>d.__component=='roi-area.roi-content').map((r,index)=>
                            
                            
                            <TabPane tab={
                                        <div>
                                            {/*<Image src={rev} width={40} height={40} class="svg-inject icon-svg icon-svg-md text-primary mb-0" alt="" />*/}
                                            <Title level={5} className="text-c-blue">{r.title}</Title>
                                        </div>
                                    } key={index}>
                                    <div className="table-responsive">
                                        <table className="table table-borderless table-striped text-center">
                                            <thead>
                                                <tr>
                                                    <th className="w-25"><div className="h4 mb-1">{r.title}</div></th>
                                                    <th>
                                                        <div className="h4 mb-1">Interest</div>
                                                    </th>
                                                    <th>
                                                        <div className="h4 mb-1">Additional Interest</div>
                                                    </th>
                                                    <th>
                                                        <div className="h4 mb-1">Max Tenure</div>
                                                    </th>
                                                    <th>
                                                        <div className="h4 mb-1">Processing fee</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {r.roiList.map((item,index)=>
                                                    <tr key={index}>
                                                        <td className="option text-start">{item.title}</td>
                                                        <td>{item.Interest}</td>
                                                        <td>{item.Additional_Interest}</td>
                                                        <td>{item.Max_Tenure}</td>
                                                        <td>{item.Processing_fee}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                            </TabPane>
                            )}
                        </Tabs>
                        </div>
                    </div>

                    
                    

                </div>

            </section>

        </>
    )
}

export default InterestComponent
