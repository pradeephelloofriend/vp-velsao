import React from 'react'
import on12 from '../../public/img/photos/serimg1.jpg';
import Image from 'next/image';
import { Select, Tabs} from 'antd';
import ServicesHeaderComponent from '../../components/services/loans/ServicesHeaderComponent';
const { Option } = Select;
const { TabPane } = Tabs;
const RightProduct = ({ udcData, serviceAllData}) => {
    
    const [fetchingFrom, setFetchingFrom] = React.useState(false);
    const [fetchingTo, setFetchingTo] = React.useState(false);
    const [serviceData, SetServiceData] = React.useState([]);
    const [sCatData, setScatData] = React.useState([]);
    const [header, setHeader] = React.useState([]);
    const [faqs, setFaqs] = React.useState([]);
    const [pHoldData, SetPholdData] = React.useState('none');
    function onChangeFrom(value) {
        //console.log(`selectedFrom ${value}`);
        const [fData] = serviceAllData.filter(i => i.serviceCode == value).map(d => d.serviceCatgory)
        SetServiceData(fData)
        
        if (value=='none') {
            SetPholdData('none')
        }
        
    }
    //console.log('serviceData=', serviceData)
   
    function onSearchFrom(val) {
        //console.log('search:', val);
        setFetchingFrom(true);
    }
    //---------------To---------*/
    function onChangeTo(value) {
        //console.log(`selectedTo ${value}`);
        const [subData] = serviceData.filter(i => i.catCode == value).map(d => d.subCatgory)
        const [tempHead] = serviceData.filter(i => i.catCode == value).map(d => d.loanHeader)
        setScatData(subData)
        setHeader(tempHead)
        SetPholdData(value)
    }
    function onSearchTo(val) {
        //console.log('search:', val);
        setFetchingTo(true);
    }
    function tabCallback(key) {
      //  console.log(key);
    }
    //console.log('subData=', sCatData)
    return (
        <>
        <section className="wrapper textblue1" >
            <div className="container">
                <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto">
                            <div className="text-center">
                                <h2 className=" text-uppercase  textclassredbg">Find the right product for you</h2>
                            </div>
                        </div>
                </div>

                <div className="row ">
                    <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                        <div className="row rightproductpadding ">
                            <div className="col-md-3 c-flex-center">
                                <h5>I am interested in </h5>
                            </div>
                            <div className="col-md-3 c-flex-center">
                                <Select
                                    showSearch
                                    style={{ width: '8rem' }}
                                    placeholder="Services"
                                    optionFilterProp="children"
                                    onChange={onChangeFrom}
                                    onSearch={onSearchFrom}
                                    notFoundContent={fetchingFrom ? <Spin size="small" /> : null}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value='none'>None</Option>
                                    {serviceAllData.map((d,index)=>
                                        <Option key={index} value={d.serviceCode}>{d.serviceName}</Option>
                                    )}
                                        

                                </Select>
                            </div>
                            <div className="col-md-1 c-flex-center">
                                <h5>For</h5>
                            </div>
                            <div className="col-md-5 c-flex-center">
                                <Select
                                    showSearch
                                    value={pHoldData}
                                    style={{ width: '15rem' }}
                                    placeholder='None'
                                    optionFilterProp="children"
                                    onChange={onChangeTo}
                                    onSearch={onSearchTo}
                                    notFoundContent={fetchingTo ? <Spin size="small" /> : null}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value='none'>None</Option>
                                        {serviceData.map((d,index)=>
                                        <Option key={index} value={d.catCode} d>{d.catName}</Option>
                                    )}
                                        
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-sm-4">
                    <div className="card-body">
                        {pHoldData!=='none'?
                        <>
                                <ServicesHeaderComponent KY={pHoldData} sData={header} />
                                <Tabs defaultActiveKey="1" onChange={tabCallback}>
                                    {sCatData.map((t,index)=>
                                        <TabPane tab={t.Title} key={index}>
                                            <p>{t.serviceDesc}</p>
                                        </TabPane>
                                    )}
                                    
                                    
                                </Tabs>
                                </>
                        :
                        <div>
                           <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                                        <div className="col-lg-7">

                                            <figure>
                                                <Image
                                                    className="w-auto"
                                                    alt="171x180"
                                                    src={on12}
                                                />
                                            </figure>
                                        </div>

                                        <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
                                            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">Grow Your Business with Our Solutions.</h1>
                                            <p className="lead fs-lg mb-7">We help our clients to increase their website traffic, rankings and visibility in search results.</p>
                                            <span><a className="btn btn-primary rounded-pill me-2" href="#">Pick your Service </a></span>
                                        </div>
                                    </div>
                        </div>
                        }
                        
                    </div>
                </div>
                        
                    
            </div>
        </section>
        </>
    )
}

export default RightProduct
