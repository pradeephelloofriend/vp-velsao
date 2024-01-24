import React from 'react'
import { connect, Connect } from 'react-redux';
import { setRegStatus } from '../../redux/menu/menuAction';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
const RegistrationComponent = ({setRegStatus}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        //console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        //console.log('Failed:', errorInfo);
      };
  return (
      <>
          <div className="text-center mb-4">
              <h2 className="m-0 link-c-blue">New User RegiStration</h2>
          </div>
          <Form
              layout="vertical"
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
                  className='link-c-blue'
                  label="Full Name"
                  name="username"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your username!',
                      },
                  ]}
              >
                  <Input placeholder='Enter your full name' />
              </Form.Item>
              <Form.Item
                  className='link-c-blue'
                  label="Email"
                  name="Email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your Email!',
                      },
                  ]}
              >
                  <Input placeholder='Enter your Email' />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={'+91'} style={{ width: '100%' }} />
            </Form.Item>
              <Form.Item

                  label="Password"
                  name="password"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your password!',
                      },
                  ]}
              >
                  <Input.Password />
              </Form.Item>

              <div className="form-group">
                  <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                          <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />

                      </div>
                      <div className="eltio_k2">
                          <a className='link-c-blue' href="#">Lost Your Password?</a>
                      </div>
                  </div>
              </div>

              <Form.Item>

                  <Button className='mt-2 bg-c-blue text-white' htmlType="submit">
                      Submit
                  </Button>
              </Form.Item>
              <div className="form-group text-center mb-0">
                  <p className="extra">Allready a member?<a onClick={() => setRegStatus(false)} href="#et-register-wrap" className="link-c-blue"> Login Wow</a></p>
              </div>
          </Form>
      </>
  )
}
const mapDispatchToProps=dispatch=>({
    setRegStatus:data=>dispatch(setRegStatus(data))
  })
export default connect(null,mapDispatchToProps) (RegistrationComponent)