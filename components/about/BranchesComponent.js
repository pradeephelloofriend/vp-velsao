import React from 'react'
import Image from 'next/image';
import c1 from '../../public/img/photos/ab1.jpg'
import { Card,Typography } from 'antd';
import { MailOutlined,PhoneOutlined,UserOutlined  } from '@ant-design/icons';

const { Meta } = Card;

const {Title,Text}=Typography
const BranchesComponent = ({data}) => {
  //console.log('brdata778',data)
    return (
      <section className="wrapper bg-light branch-area">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <h2 className="display-4 mb-3">Branches</h2>
            {data.content.filter(d=>d.__component== 'about-page.branches').map((b,index)=>
            
            <div key={index} className="col-md-4">
              <div className="card">
                <div className='card-header bg-c-blue text-center'>
                  <Title level={4} className="text-white mb-0"><a href="" className="text-white">{b.branchName}</a></Title>

                </div>
                <div className='card-body'>
                  <div className="d-flex flex-row">
                    <div>
                      <div className="icon text-c-blue fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
                    </div>
                    <div className="addlineheight">
                      <h5 className="mb-0  text-c-blue">Address</h5>
                      <address className='mb-0'>{b.add1}</address>
                      <address className='mb-0'>{b.add2}</address>
                      <address className='mb-0'>{b.add3}</address>
                    </div>
                  </div>
                  <div className="d-flex flex-row mb-1 mt-1">
                    <div>
                      <div className="icon text-c-blue fs-28 me-6 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
                    </div>
                    <div>
                      <h5 className="mb-0 text-c-blue">Phone</h5>
                      {b.contactNo.map((c,idx)=>
                      <p key={idx} className='mb-0'>{c.number}</p>
                      )}
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div>
                      <div className="icon text-c-blue fs-28 me-6 mt-n1"> <i className="uil uil-envelope"></i> </div>
                    </div>
                    <div>
                      <h5 className="mb-0 text-c-blue">E-mail</h5>
                      <p className="mb-0"><a href={`mailto:${b.email}`} className="text-c-gray">{b.email}</a></p>
                    </div>
                   
                </div>
                <div className="d-flex flex-row">
                    <div>
                      <div className="icon text-c-blue fs-28 me-6 mt-n1"> <i className="uil uil-user"></i> </div>
                    </div>
                <div>
                  
                      <h5 className="mb-0 mt-1 text-c-blue">Manager</h5>
                      <p className="mb-0">{b.contactPerson}</p>
                  </div>

              </div>
            </div>
          </div>
          </div>
            )}
          </div>
        
        </div>
      </section>
    )
 }

export default BranchesComponent
