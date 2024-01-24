import React from 'react'
import {Button,Typography,Form, Input, Checkbox,Select } from 'antd';
import Image from 'next/image'
import d1 from '../../../public/img/icons/home/phone-circle.svg'
const {Title,Text}=Typography
const QuoteForm = () => {
    const [form] = Form.useForm();
    function onFormValueChange(value){
       // console.log(value)
    }
    return (
        <>
        <Form form={form} onValuesChange={onFormValueChange} layout="vertical" size="large">
            <Form.Item  name="name">
                <Input placeholder="Your Name" /> 
            </Form.Item>
            <Form.Item  name="email">
                <Input placeholder="Your Email" /> 
            </Form.Item>
            <Form.Item  name="number">
                <Input placeholder="Your Contact Number" /> 
            </Form.Item>
            <Form.Item >
            <Select placeholder="Choose Scheme">
                <Select.Option value="None"></Select.Option>
            </Select>
        </Form.Item>

            <Form.Item>
                <Button type="primary" block>Get Details</Button>
            </Form.Item>
        </Form>
            <div>
                
                <div className="d-flex flex-row add-content">

                    <div className="mb-0">
                        {/*<Image  className="svg-inject icon-svg icon-svg-sm text-yellow me-4"
                                    width={72}
                                    height={72}
                                    src={d1}
                                    alt="d1"
                                    />*/}
                    </div>
                    <div>
                        <h4 className="mb-0 text-white mt-3" >Call Us</h4>
                        <p className="text-white mb-0"> 0832-2210126</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuoteForm
