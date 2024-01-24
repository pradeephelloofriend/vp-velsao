import React from 'react'
import {Button,Typography,Tabs,Collapse,Select } from 'antd';
import Image from 'next/image'
import oth from '../../public/img/finance/bank.svg'
import rev from '../../public/img/finance/money-bag.svg'
import ac from '../../public/img/finance/coins.svg'
const {Title,Text}=Typography
const { TabPane } = Tabs;
const { Option } = Select;


const AccountsComponent = ({financeData}) => {
    
    //console.log('financeData',financeData)
    const [year,setYear]=React.useState('2018-19')
    function handleChange(value) {
  //  console.log(`selected ${value}`);
        setYear(value)
        
      }
    
    return (
        <>
            <section className="wrapper bg-gray fin-area">
                <div className="container pt-10 pb-12 pt-md-12 pb-md-12">
                    <div className="row">
                        <div className='col-lg-12'>
                            <Title level={2} className="text-c-blue no-margin">{"Business"}</Title>
                            <Text className="">{"Finance"}</Text >
                        </div>



                        <div className='col-lg-12 mt-10'>
                            


                            <Tabs defaultActiveKey="0" tabPosition={"left"}>
                                {financeData.map((i, index) =>
                                    <>



                                        <TabPane key={index}
                                            tab={
                                                <div>
                                                    <Image src={rev} width={40} height={40} className="svg-inject icon-svg icon-svg-md text-primary mb-0" alt="" />
                                                    <Title level={5} className="text-c-blue">{i.finGroup}</Title>
                                                </div>
                                            } key={index}  >
                                            <div>
                                                {/*<Title level={3} className="text-c-blue text-center">{"Revenue"}</Title>*/}
                                                <div className='row'>
                                                    <div className="col-lg-12 col-12 mb-5">
                                                <Select defaultValue="2018-19" style={{ width: 130 }} onChange={handleChange}>
                                                 
                                                    {Array.from(new Set(i.content.map(obj => obj.year.year))).map(year=> {
                                                        return <option value={year}>{year}</option>
                                                    })}
                                                </Select>
                                                
                                                </div>
                                                </div>
                                                <div className="row">
                                                    {i.content.filter(d=>d.year.year== year).map((c, index2) =>

                                                        <div key={index2} className='col-md-4'>
                                                            <div className="card">
                                                                <div className='card-header text-center bg-gray-100'>
                                                                    <Title level={4} className="text-c-blue text-center mt-0 mb-0  pd-0">{c.title}</Title>
                                                                    <Text className="text-center text-blue mb-0">Rs.99999.000</Text>
                                                                </div>
                                                                {c.finnace_subgroup.map((s, index) =>
                                                                    <div key={index} className="card-body cardbodypad">
                                                                        <div>
                                                                            <p className=" mt-0 mb-0 p-0 lead titlefontsize">{s.title}<span className='float-end text-blue mt-0'>{s.amount}</span></p>

                                                                        </div>

                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </TabPane>

                                    </>
                                )}
                            </Tabs>


                        </div>
                    </div>
                </div>

            </section>
            </>
    )
}

export default AccountsComponent
