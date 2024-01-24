import React from 'react'
import { connect } from 'react-redux';
import { setUserUploadStatus,setRegCertData } from '../../redux/menu/menuAction';
import {Button,Typography,Tabs,Card,Form, Input, Upload, } from 'antd';
import { PlusOutlined, UploadOutlined  } from '@ant-design/icons';
const UploadDocumentComponent = ({setRegCertData}) => {

  
  const [currFile, setCurrFile] = React.useState(new FormData());
  const [form] = Form.useForm();
  const onReset = () => {
    setRegCertData(null)
  };
  const onFinish = (values) => {

    //console.log('Success:', values)
    //console.log('Success:', values.upload.map(d => d.originFileObj))


    currFile.append("addrNo", abAN);

    currFile.append("atDtp", values.name);

    currFile.append("atDocnm", selectData.filter(d => d.KY == values.name).map(d => d.DL01)[0]);

    currFile.append("atDoco", selectData.filter(d => d.KY == values.name).map(d => d.Ref)[0]);

    currFile.append("atRMK", values.comment);

    currFile.append("role", role);


    for (const  pair of currFile.entries()) {
        //console.log(pair[0] + '=' + pair[1]);
    }


    let url = `${process.env.ADMIN_API_PATH}upload-files.php`;

    //console.log("url", url)


    /*Axios.post(url, currFile, {

        headers: {
            'content-type': 'multipart/form-data'
        }
    }).then((res) => {
         console.log("res", res)
       

        const newFormData=new FormData()
        //setCurrFile(newFormData)
       // fetchUploadData(abAN)
        router.back()
        // const file = document.querySelector('.file');
        // if (file.value!==""){
        //     file.value = '';
        // }
       
      

    }, error => {
        console.log("error", error)
        router.back()
    });*/

};
const handleFileChange = (event) => {


  //console.log("event.target.files", event.target.files)
  const [imgData] = event.target.files

  const info = new FormData();

  info.append("file", imgData);

  info.append("atDoctype", imgData.type);
    
 // const documentType = imgData.type


  setCurrFile(info)
}

console.log("curfile", currFile)
  return (
    <>
      <div className='upload-docs mt-8'>
        <Card
          className='faci-card'
          hoverable
        >
          <h4 className='link-c-blue mb-0'>Submit Inward Apllication Form </h4>
          <div className='upload-block'>
            <Form
              name="basic"
              form={form}

              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
              layout='vertical'
            >
              <div className='row'>
                <div className='col-md-7'>
                <Form.Item
                name="upload"
                label="Upload Application"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Upload Salary Certificate(if any)"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>  
              <Form.Item
                name="upload"
                label="An affidavit containing full details of family members and their income."
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              
              <Form.Item
                name="upload"
                label="Original Income certificate from C.C.P. / Village Panchayat / Municipality."
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Self Declaration stating the no. of family members, part no. sr. no."
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Marriage Certificate (incase of married woman). [Self attested]."
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
                </div>


                <div className='col-md-5'>
                <Form.Item
                name="upload"
                label="Upload Family Ration Card"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="School Leaving Certificate. [Self attested]"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Voter’s card. [Self attested]"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Birth Certificate.[Self attested]"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Doctor’s Certificate. [Self attested]."
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
              <Form.Item
                name="upload"
                label="Ration card copy. [Self attested]"
                rules={[
                  {
                    required: true,
                    message: 'Invalid Url!',
                  },
                ]}
              >
                <input type="file" onChange={handleFileChange} className="file" />
              </Form.Item>
                </div>
              </div>
              
              
              
              
              
              
              
              <Form.Item

              >
                <Button className='mr-5' type="secondary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={()=>onReset()}>
            Cancel
          </Button>


              </Form.Item>
            </Form>
            
            </div>
                                              
                                                
                                              
                                              
                                             
                                              
                                              
                                           
                                            
                                        

        </Card>
      </div>
    </>
  )
}
const mapDispatchToProps=dispatch=>({
  setUserUploadStatus:data=>dispatch(setUserUploadStatus(data)),
  setRegCertData:(data)=>dispatch(setRegCertData(data))
})
export default connect(null,mapDispatchToProps) (UploadDocumentComponent)