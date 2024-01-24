import React from 'react'
import { Radio, Input, Select, Spin, Space, Button, Checkbox,Typography, Divider } from 'antd';
import Typewriter from 'typewriter-effect';
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from 'next/router'
const {Title,Text}=Typography
const { Option } = Select;
const UperEndComponent = ({searchItem}) => {
    const router= useRouter()
    //console.log('searchData',router)
    const [fetchingFrom, setFetchingFrom] = React.useState(false);
    const[searchData,setSearchData]=React.useState(undefined);
    //const body = document.body;
    function onChangeFrom(value) {
        if(value==""){
            setSearchData(undefined)
        }
        else{
            setSearchData(value) 
            const data=value.split(',')
            //console.log('serachValue',value)
            if(router.pathname=='/'){
                router.push({
                    pathname: `services/${data[2]}/${data[1]}`,
                    query:{cat:data[2],id:data[1],tabTitle:data[3],desc:data[0]}
                })
                
            }else{
                router.push({
                    pathname: `${router.pathname}`,
                    query:{cat:data[2],id:data[1],tabTitle:data[3],desc:data[0]}
                }) 
            }
            
        }
         
    }
    //console.log('pickupvalue',data.pickUpPlace)
    function onSearchFrom(val) {
        //console.log('search:', val);
        
    }
    //console.log('search:', searchData);
    /*function myHandler(){
        alert('hi')
        setSearchData(undefined)
    }
   // console.log('body',body)
    React.useEffect(() => {
        document.body.addEventListener('click', myHandler);
        return function cleanup() {
            window.removeEventListener('click', myHandler );
        } 
    }, [])*/
    return (
        <section className="wrapper bg-gray home-search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="col-xl-10 mx-auto">
                <div className="card bg-white bg-overlay-300 text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top">
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-8">
                            
                            <div className="flex">
                            <SearchOutlined />
                            <Select
                            //className="main-search"
                            dropdownClassName="main-search"
                          suffixIcon={""}
                          showSearch
                          style={{ width: '100%' }}
                          placeholder={<Typewriter
                              options={{
                                strings: ['<a>Announcements</a>', 'Deposit(fixed,savings etc)','Loan(Gold,Housing,Car loan etc' ],
                                autoStart: true,
                                loop: true,
                              }}
                            />}
                          optionFilterProp="children"
                          value={searchData}
                          bordered={false}
                          onChange={onChangeFrom}
                          onSearch={onSearchFrom}
                          notFoundContent={fetchingFrom ? <Spin size="small" /> : null}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                          <Option value="">None</Option>
                          {searchItem.content.map((i,index)=>
                          <Option key={index} value={`${i.item_value.DL01},${i.item_value.KY},${i.item_value.RT},${i.itemCat.DL01}`}>{i.item_value.DL01}</Option>
                          )}
                          
                          
                      </Select>
                            </div>
                              
                    
                          
                          </div>
                          <div className="col-md-4">
                                <Button type="dashed" disabled block>{searchItem.searchButton.title}</Button>
                          </div>
                      </div>
                  
                    
                  </div>
                  
                </div>
                
              </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UperEndComponent
