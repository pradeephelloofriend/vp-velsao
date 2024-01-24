import React from 'react'
import { Button, Checkbox, Form, Input,Table,Card,Empty} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Axios from 'axios';
import MakeTaxPaymentComponent from '../payment/MakeTaxPaymentComponent';

const TaxPaymentComponent = () => {
    const router= useRouter()
    const [form] = Form.useForm();
    const [taxData,setTaxData]=React.useState(null)
    const [selctionData,setSelectionData]=React.useState(null)
    const [tAmt,setTamt]=React.useState(0)
    const columns = [
        {
          title: 'Sr. No',
          dataIndex: 'sNo',
          key: 'sNo',
          width:'70px',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
            
            render: text => <a>{text}</a>,
          },
        {
          title: 'Date',
          dataIndex: 'dddocdt',
          key: 'dddocdt',
          
          render: text => <a>{text}</a>,
        },
        {
          title: 'Amount',
          dataIndex: 'ddamount',
          key: 'ddamount',
          width:'100px',
          render: (text,record) =>{
            //console.log('record',record)
            return(
              <a>{text}</a>
            )
          }
        },
        
      ]
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectionData(selectedRows)
            const sum=selectedRows.reduce((a,v) =>  a = a + parseFloat(v.ddamount), 0 )
            setTamt(sum.toFixed(2))
          //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };  
    const onFinish = (values) => {
        //var num=Number('516/Q')
        Axios.post(`/api/getTaxPayment`,{ hNo:values.houseNo})
            .then(({ data }) => {
                const tempData=[]
                //console.log('api-taxi-data',data)
                data.forEach((element,idx) => {
                    //console.log('element',element)
                    tempData.push({key:element.dddocno,sNo:idx+1,desc:element.ddrmk,dddocdt:element.dddocdt,ddamount:element.ddamount,ddan:element.ddan,dddocno:element.dddocno,ddrefno
                    :element.ddrefno,ddid:element.ddid})
                  });
                setTaxData(tempData.length>=1?tempData:null)
                
            })
        //router.push('/payment')
        // console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
      };
      //console.log('selctionData',selctionData)
  return (
      <>
          <section className="wrapper bg-gray">
              <div className="container  py-12 py-md-12">
                  <div className="row">
                      <div className='col-12 mb-10'>
                          <div className="caption1">
                              <h1>{'TAX PAYMENTS'}</h1>
                              <p>Enter the details to get Your tax payments list and details.</p>
                          </div>
                          <div className='form-box'>
                              <Form
                                  layout="inline"
                                  form={form}
                                  className='login-form'
                                  name="basic"

                                  initialValues={{
                                      remember: true,
                                  }}
                                  onFinish={onFinish}
                                  onFinishFailed={onFinishFailed}
                                  autoComplete="off"
                              >
                                  <Form.Item
                                      className='link-c-blue tax-form-item'
                                      label=""
                                      name="houseNo"
                                      
                                      rules={[
                                          {
                                              required: true,
                                              message: 'Please input your house number or email id !',
                                          },
                                      ]}
                                  >
                                      <Input placeholder='Enter House Number or Reference Number '  />
                                  </Form.Item>





                                  <Form.Item>

                                      <Button icon={<SearchOutlined />}  className='bg-c-blue text-white' htmlType="submit">
                                          Search
                                      </Button>
                                  </Form.Item>

                              </Form>
                          </div>

                      </div>
                      {taxData!==null?
                      <>
                      <div className='col-md-6'>
                        <div className='scheme-block'>
                            
                            <Table bordered 
                            rowSelection={{
                                type:'checkbox',
                                ...rowSelection,
                              }}
                            columns={columns} 
                            dataSource={taxData} 
                            /*footer={()=>
                                {
                                    const sum=taxData.reduce((a,v) =>  a = a + parseFloat(v.ddamount), 0 )
                                    return(
                                        <div className='tax-table-footer'>
                                            <h4>Total Amount</h4>
                                            <h4>{sum.toFixed(2)}</h4>
                                            
                                        </div>
                                        
                                    )
                                }
                                
                                
                            } */
                            />
                            
                            
                            </div>
                      </div>
                      <div className='col-md-6'>
                        <MakeTaxPaymentComponent tAmt={tAmt} selctionData={selctionData}/>
                        
                      </div>
                      </>
                      :
                      <>
                      <p className='text-red'>No Data Found</p>
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                      </>
                      
                      }
                      
                  </div>
              </div>
          </section>



      </>
  )
}

export default TaxPaymentComponent