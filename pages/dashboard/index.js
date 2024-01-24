import React from 'react'
import { Card } from 'react-bootstrap'
import {useRouter} from 'next/router'
import Image from 'next/image'
import i3 from '../../public/img/community.png'
import i4 from '../../public/img/growth.png'
import i5 from '../../public/img/accounting.png'
import i6 from '../../public/img/report.png'
import i7 from '../../public/img/megaphone.png'

const index = () => {
    const router=useRouter()
    return (
        <>
            <section className="wrapper bg-light  dashboard  ">
                <div className="row">
                    <div className="col-lg-4 col-12 mt-2">
                        <h6 className="p-2 display-7 text-white fw-bolder dashheader">Panchayat System Updates</h6>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-12 dashimagebg mb-10">
                            <figure className="card-img-top card-img-center sliderfigure mx-auto pt-4">
                                <Image alt="example"
                                    height={140}
                                    width={140}
                                    src={i3}
                                />
                            </figure>
                            <h6 className="dashimgname mx-auto">Panchayat Community</h6>
                        </div>
                        <div className="col-lg-10 col-12">
                            <div className="row">
                                <div className="col-lg-3 col-12  mb-2   ">
                                <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Panchayat Profile/Roles</h6>
                                        </Card.Header>
                                        <Card.Body className="trcardbody">

                                            <p className="mb-0 ">Elected Members.<span style={{ float: 'right' }}>18</span></p>
                                            <p className="mb-0 ">Members<span style={{ float: 'right' }}>10</span></p>
                                            <p className="mb-0 ">Staff<span style={{ float: 'right' }}>8</span></p>
                                            <p className="mb-0  fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Citizen Grievencies or Complaint </h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">
                                            <p className="mb-0 ">Complaint Register<span style={{ float: 'right' }}> No. <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>54</span></span></p>
                                            <p className="mb-0 mt-6 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Notices,Circulars, Certificate</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3"> <span style={{ float: 'right', marginTop: '12px' }}> No. <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>23</span></span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <a className="mb-0 alinkstextcolor " onClick={() => router.push('dashapplications')}>
                                            <Card.Header className="">
                                                <h6 className="mb-0">Applications</h6>
                                            </Card.Header>
                                            <Card.Body>
                                                <p className="mb-0 ">Recieved<span style={{ float: 'right' }}> 2</span></p>
                                                <p className="mb-0 marginb">Process<span style={{ float: 'right' }}> 3</span></p>
                                                <p className="mb-0  fontsize">2021-22</p>
                                            </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2  col-12 dashimagebg mb-10">
                            <figure className="card-img-top card-img-center sliderfigure mx-auto pt-4">
                                <Image alt="example"
                                    height={140}
                                    width={140}
                                    src={i4}
                                />
                            </figure>
                            <h6 className="dashimgname mx-auto">Development Planning</h6>
                        </div>
                        <div className="col-lg-10 col-12">
                            <div className="row">
                                <div className="col-lg-3 col-12  mb-2   ">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Development Programmees</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">
                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>15</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Schemes</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">
                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>32</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <a  className="mb-0  alinkstextcolor" onClick={() => router.push('project')}>
                                        <Card.Header className="">
                                            <h6 className="mb-0">Projects</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">
                                            <p className="mb-0 mt-3"> <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>18</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                    <a className="mb-0 alinkstextcolor" onClick={() => router.push('tenders')}>
                                        <Card.Header className="">
                                            <h6 className="mb-0">Tenders</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">
                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>4</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2  col-12 dashimagebg mb-10">
                            <figure className="card-img-top card-img-center sliderfigure mx-auto pt-4">
                                <Image alt="example"
                                    height={140}
                                    width={140}
                                    src={i5}
                                />
                            </figure>
                            <h6 className="dashimgname mx-auto text-center">Accounting</h6>
                        </div>
                        <div className="col-lg-10 col-12">
                            <div className="row">
                                <div className="col-lg-3 col-12  mb-2   ">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Contribution</h6>
                                        </Card.Header>
                                        <Card.Body>
                                            <p className="mb-0 ">State<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>3,86,000</span></span></p>
                                            <p className="mb-0 marginb">Central<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>10,37,000</span></span></p>
                                            <p className="mb-0 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <a className="mb-0  alinkstextcolor" onClick={() => router.push('dashrevenue')}>
                                            <Card.Header className="">
                                                <h6 className="mb-0"> Revenue Collection</h6>
                                            </Card.Header>
                                            <Card.Body >

                                                <p className="mb-0 "><span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>3,86,000</span></span></p>
                                                <p className="mb-1 mt-10 fontsize">2021-22</p>
                                            </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <a className="mb-0 alinkstextcolor" onClick={() => router.push('dashstatement')}>
                                            <Card.Header className="">
                                                <h6 className="mb-0">Statement Of Account</h6>
                                            </Card.Header>
                                           <Card.Body className="trcardbody">

                                            <p className="mb-0 ">Income<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>40,000</span></span></p>
                                            <p className="mb-0 ">Expenditure <span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>1,150</span></span></p>
                                            <p className="mb-0 ">Receipt<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>2,193</span></span></p>
                                            <p className="mb-0  fontsize">2021-22</p>
                                        </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Project Report</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 ">Income<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>2,58,000</span></span></p>
                                            <p className="mb-0 marginb">Expenditure<span style={{ float: 'right' }}>Rs.<span style={{ float: 'right' }}>37,000</span></span></p>
                                            <p className="mb-0 mt-2 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2  col-12 dashimagebg mb-10">
                            <figure className="card-img-top card-img-center sliderfigure mx-auto pt-4">
                                <Image alt="example"
                                    height={140}
                                    width={140}
                                    src={i6}
                                />
                            </figure>
                            <h6 className="dashimgname mx-auto text-center">Reporting</h6>
                        </div>
                        <div className="col-lg-10 col-12">
                            <div className="row">
                                <div className="col-lg-3 col-12  mb-2   ">
                                    <Card >
                                    <a  className="mb-0  alinkstextcolor" onClick={() => router.push('projectstatus')}>
                                        <Card.Header className="">
                                            <h6 className="mb-0">Project Status</h6>
                                        </Card.Header>
                                        <Card.Body className="trcardbody">

                                            <p className="mb-0 ">Approved.<span style={{ float: 'right' }}>1</span></p>
                                            <p className="mb-0 ">In Progress<span style={{ float: 'right' }}>2</span></p>
                                            <p className="mb-0 ">Completed<span style={{ float: 'right' }}>2</span></p>
                                            <p className="mb-0  fontsize">2021-22</p>
                                        </Card.Body>
                                        </a>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Property Ownership</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3"> <span style={{ float: 'right', marginTop: '12px' }}> No. <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>9</span></span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Gram Sabha Report</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3"> <span style={{ float: 'right', marginTop: '12px' }}> No. <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>4</span></span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Schemes Beneficiaries</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>35</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2  col-12 dashimagebg mb-10">
                            <figure className="card-img-top card-img-center sliderfigure mx-auto pt-4">
                                <Image alt="example"
                                    height={140}
                                    width={140}
                                    src={i7}
                                />
                            </figure>
                            <h6 className="dashimgname mx-auto text-center">Communication</h6>
                        </div>
                        <div className="col-lg-10 col-12">
                            <div className="row">
                              <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">SMS/Notifications</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>49</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-3">
                                    <Card >
                                        <Card.Header className="">
                                            <h6 className="mb-0">Email Based Alerts</h6>
                                        </Card.Header>
                                        <Card.Body className="seccardbody">

                                            <p className="mb-0 mt-3">  <span style={{ float: 'right', fontSize: '35px', position: 'relative', bottom: '20px' }}>57</span></p>
                                            <p className="mb-0 mt-11 fontsize">2021-22</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index
