import React from 'react'
import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Axios from 'axios';
import { API_PATH } from '../../Global';


const { TextArea } = Input;
const ContactComponent = () => {


  const onFinish = (values) => {
    Axios.post(API_PATH + 'send-email.php',
      JSON.stringify({
        name: values.Name,
        email: values.Email,
        phone: values.Phone,
        message: values.Message,

      })
    )
      .then(({ data }) => {
        //console.log('data', data)

      })

   // console.log('success:', values)
  };
  const onFinishFailed = (errorInfo) => {
   // console.log('Failed:', errorInfo)
  };

  return (
    <section className="wrapper  bg-light">
      <div className="container py-10 py-md-8 ">

        <div className="row ">
          <div className="col-lg-12 col-12">
            <h3 className="mt-0  mb-6 display-5">Contact Us</h3>
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7 col-md-12 mt-10">

            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email-id!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Phone NO.!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="Message"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Message!',
                  },
                ]}
              >
                <TextArea showCount maxLength={350} autoSize={{ minRows: 3, maxRows: 6 }} />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit"  >

                  Submit

                </Button>


              </Form.Item>
            </Form>
          </div>

          <div className="col-lg-4 mt-n15">
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-0"> <i className="uil uil-location-pin-alt"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">Address</h5>
                <address>Talapwada,Pirna,Bardez-Goa,403513.
                </address>
              </div>

            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">Phone</h5>
                <p>00 (123) 456 78 90 <br className="d-none d-md-block" />00 (987) 654 32 10</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
              </div>
              <div>
                <h5 className="mb-0">E-mail</h5>
                <p className="mb-1"><a href="mailto:sandbox@email.com" className="link-body">sandbox@email.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





export default ContactComponent
