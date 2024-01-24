import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { Form,Input, InputNumber, Button, DatePicker, Upload, Space, Card,Icon, Checkbox,message,Select, Spin, Tooltip } from 'antd';

import Axios from 'axios';
import moment from 'moment';
import { getComplainCategoryData, getFacilityTypes, getHallBookingDate, getHallBookingSlots } from '../../lib/api';
import BookingSuccesModalComponent from '../modal/BookingSuccesModalComponent';

import {useRouter} from 'next/router'

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const HallBookingComponent = () => {    
    const dateFormat = 'DD/MM/YYYY';
    const[cData,setCdata]=React.useState(null)
    const[bookDate,setBookDate]=React.useState(undefined)
    const [fileList, setFileList] = React.useState([]);
    const [form] = Form.useForm();
    const { getFieldDecorator } =form;
    const[isLoading,setIsLoading]=React.useState(false)
    const[chkLoading,setChkLoading]=React.useState(false)
    //console.log(moment().format('DDMMYYYY'))
    const imgUpload = React.useRef(null);
    const [img, setImg] = React.useState(''); 
    const [crData,setCrData]=React.useState(null)
    const [show,setShow]=React.useState(false)
    const [bookingId,setBooikngId]=React.useState(null)
    const [slotData,setSlotData]=React.useState(null)
    const[selDate,setSelDate]=React.useState(null)
    const router=useRouter()

    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {

      setShow(false)
      window.location.href = window.location.href;
      
    };
    
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getFacilityTypes()//applo client  
            const hbSlot=await getHallBookingSlots()
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                const arr=[]
                //console.log('booking slots',selDate)
                if (selDate!==null) {
                    try {
                        setChkLoading(true)
                        Axios.post(`/api/hallBooking/hallBookingByDate`,{date:selDate})
                        .then(({data})=>{
                            //console.log('avilability hall-',data)
                            const arr=[]
                            hbSlot.forEach(element => {
                                if (data.length>=1) {
                                    const{acf}=data[0]
                                    /**merge array */
                                    const tempArray=[]
                                    data.forEach(s => {
                                        const sTaken=s.acf.slot_taken.split(',')
                                        sTaken.forEach(a => {
                                            tempArray.push(a)
                                        });
                                        
                                    });
                                    //console.log('tempArray',tempArray)
                                    
                                    arr.push({
                                        id:element.termTaxonomyId,
                                        name:element.name,
                                        slug:element.slug,
                                        status:tempArray.find((x)=>{
                                            if(x==element.termTaxonomyId){
                                                return true
                                            }else{
                                                return false
                                            }
                                        })
                                    })
                                    
                                }else{
                                    arr.push({
                                        id:element.termTaxonomyId,
                                        name:element.name,
                                        slug:element.slug,
                                        status:false
                                    })
                                }
                            });
                            setSlotData(arr)
                            setChkLoading(false)
                        })
                    } catch (error) {
                        setChkLoading(false)
                    } 
                }
                
                
                
                //console.log('booking slots',hbSlot)
                setCrData(cData)
                setIsLoading(false)
                //console.log('hblistdate',hbList)
            }
          }
          fetchData()
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[selDate])
    
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      };
      

    const dateRender = (date) => {
        console.log('date-render',date)
       
        if (date!==null) {
            setSelDate(moment(date._d).format('YYYY-MM-DD'))
        }else{
            setSelDate(null)
        }
        
        //console.log('selleeDate',moment(date._d).format('YYYY-MM-DD'))
        
    }
    function onChangeDate(date, dateString) {
        //console.log('date', moment(date._d).format('YYYY-MM-DD'));
        if(date!==null){
            setBookDate(moment(date._d).format('YYYY-MM-DD'))
        }
        else{
            setBookDate(undefined)
        }
        
    }
    console.log('facility type',bookDate)
    const onFinish = (values) => {
        const imgList=values.idproof.file.originFileObj;
        console.log('img list',values)
        const formData = new FormData();
        formData.append("file",imgList,imgList.name)
        formData.append("title", imgList.name);
        const userAr=[]
        values.users.forEach(element => {
            userAr.push('    '+element.typework+' -  Name: '+element.fullname+' '+' Contact: '+element.contact+'\r\n\r\n,')
        });
        
        let userArData='\r\n'+userAr.join('').toString()
        //console.log('values-data',userArData)
        try {
            setIsLoading(true)
            Axios.post(`/api/hallBooking/idUpload`,formData,{ 
                headers:{
                "content-type":"multipart/form-data"
            },
            })
            .then(({data})=>{
                //console.log('image return data',data)
                const dataTemp={
                    dob:moment(values.dobk._d).format('YYYY-MM-DD'),
                    noh:values.nohrs,
                    event:values.event,
                    hirer:values.hirer,
                    address:values.address,
                    contact:values.contact,
                    imgId:data.id,
                    //bkId:"HB/"+moment().format('DDMMYYYY')+"/"+data.id,
                    fInfo:userArData
                }
                
                try {
                    
                    Axios.post(`/api/hallBooking/addNewBooking`,{dataTemp})
                    .then(({ data }) => {
                        //console.log('after booking',data)
                        setBooikngId(data.id)
                        setShow(true)
                        form.resetFields()
                        setFileList([])
                        setBookDate(undefined)
                        setSlotData(null)
                        setSelDate(null)
                        setIsLoading(false)

                        
                        //console.log('api-taxi-data',data)
                        
                    })
                    
                } catch (error) {
                    setIsLoading(false)
                }

            })
        } catch (error) {
            
        }
        
      }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }

      
  return (
    <div className="bg-light-pch">
    <div className="container py-10 py-md-10 pb-md-10">
        <h2>Register Chicalim Panchayat Hall</h2>
      <div className="cm-pb-2">
        <Spin spinning={isLoading}>
        <Form
                name="basic"
                form={form}
                layout='vertical'
                className='hb-form'
                initialValues={{
                    remember: true,
                }}
                
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
            <div className='row'>
             <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                <h5>Booking Information</h5>
                
                    <Form.Item
                    label="Date of Booking"
                    name="dobk"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Date of Booking!',
                        },
                    ]}
                >
                   
                    <DatePicker 
                    style={{width:'100%'}}
                    disabledDate={disabledDate}
                    //disabledTime={disabledDateTime}
                    //showTime={{format: 'HH:mm',}}
                    format={dateFormat} 
                    onChange={onChangeDate}
                    onSelect={(values)=>dateRender(values)}
                    />
                </Form.Item>
                    
                        {bookDate!==undefined?
                        <Spin spinning={chkLoading}>
                        <Form.Item
                        label="Select Available Slot"
                        name="nohrs"
                        
                        rules={[
                            {
                                required: true,
                                message: 'Please select available slot',
                            },
                        ]}
                    >
                        
                        <CheckboxGroup className='hb-chkbox'>
                            {slotData!==null?slotData.map((d,dx)=>
                            <Tooltip 
                            title={d.status?"Not Available":"Available"}
                            color={d.status?"red":"green"}
                            >
                            <Checkbox
                            key={dx}
                            value={d.id}
                            disabled={d.status}
                            style={{
                            lineHeight: '32px',
                            }}
                        >
                            {d.name}
                        </Checkbox>
                        </Tooltip>
                            ):<></>}
                            
                        </CheckboxGroup>
                        
                    </Form.Item>
                    </Spin> 
                        :<></>}
                    
                 
                

                
                
                <Form.Item
                    label="Event"
                    name="event"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Event!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Hirer"
                    name="hirer"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Hirer!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                
                <Form.Item
                    label="Contact Number"
                    name="contact"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/^[0-9]{10}$/),
                            message: 'Please input your Phone Number!',
                        },
                    ]}
                >
                    

                    <Input/>
                </Form.Item>

                

                <Form.Item
                    label="ID Proof"
                    name="idproof"
                    rules={[
                        {
                            required: true,
                            
                            message: 'Please input your ID Proof.!',
                        },
                    ]}
                >
                    <Upload 
                    name="logo"  
                    listType="picture"
                    fileList={fileList}
                    onChange={handleChange}
                    >
                         {fileList.length >= 1 ? null : 
                            <Button>
                            Click to upload
                                </Button>
                         }
                        
                    </Upload>
                   
                </Form.Item>
                </Card>
             
             </div>
             <div className='col-lg-6 col-md-6 col-sm-6'>
                <Card>
                <h5>Facility  Information</h5>
            <p>Fill-up Facility Information(Decorator, Video Grapher, Caterer, etc)</p>

            <Form.List name="users">
                {(fields, { add, remove }) => (
            <>
                {fields.map(({ key, name, ...restField }) => (
                <Space
                    key={key}
                    style={{
                    display: 'flex',
                    marginBottom: 8,
                    }}
                    align="baseline"
                >
                    <Form.Item
                    {...restField}
                    name={[name, 'typework']}
                    rules={[
                        {
                        required: true,
                        message: 'Missing Type Work',
                        },
                    ]}
                    >
                    <Select placeholder="Type of Work">
                        {crData!==null?crData.map((f,idx)=>
                        <Option key={idx} value={f.name}>{f.name}</Option>
                        ):<></>}
                        
                        
                    </Select>
                    </Form.Item>
                    <Form.Item
                    {...restField}
                    name={[name, 'fullname']}
                    rules={[
                        {
                        required: true,
                        message: 'Full Name',
                        },
                    ]}
                    >
                    <Input placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                    {...restField}
                    name={[name, 'contact']}
                    rules={[
                        {
                        required: true,
                        pattern: new RegExp(/^[0-9]{10}$/),
                        message: 'Invalid Contact Number',
                        },
                    ]}
                    >
                    <Input placeholder="Contact Number" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
                ))}
                <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add field
                </Button>
                </Form.Item>
            </>
            )}
            </Form.List>
            </Card>
            <Form.Item
            name="policy"
            //  rules={[
            //      {
            //      required: true,
            //      message: 'Please select the checkbox..',
            //      },
            //  ]}
            valuePropName="checked"
            rules={[
                {
                    validator: async (_, checked) => {
                        if (!checked) {
                            return Promise.reject(
                                new Error("Please accept the Rules and Regulations!"),
                            );
                        }
                    },

                }
            ]}
             >
            <Checkbox>I agree to the<a href="/rulesandregulations" target='_blank'> Rules and Regulations</a> of Panchayat.</Checkbox>
            </Form.Item>

                <Form.Item className='mt-10'>
                        <Button type="primary" htmlType="submit" block  >Book Now</Button>
                    </Form.Item>

                
             </div>
             
            </div>
            </Form>
            
        </Spin>
      </div>
    </div>
   <BookingSuccesModalComponent
   show={show}
   onClick={handleClose}
   onHide={handleClose}
   bookingId={bookingId}
   />
    </div>
  )
}

export default HallBookingComponent