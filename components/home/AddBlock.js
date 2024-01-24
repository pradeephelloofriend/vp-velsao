import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectServiceData } from '../../redux/services/serviceSelector'
import d1 from '../../public/img/photos/about4.jpg'
import { API_PATH } from '../../Global'
import { Button } from 'antd'
const AddBlock = () => {
    //const router = useRouter()
    //console.log('serviceData',serviceData) 
    //const [filterData]=serviceData.filter(d=>d.serviceCode==router.query.catCode).map(i=>i.serviceCatgory)
    //console.log('service-cat',filterData)
    return (
        <section className="wrapper bg-light">
            <div className="container py-2 py-md-10">
                <div className="row">
                    <div className="col-12 mb-10">
                        <h1 className="display-7 allheadcolor">News & Upadtes</h1>
                    </div>
                </div>
                <div className="row gx-md-2  align-items-center mb-20">
                <div className="col-lg-1">
                   <p className="mb-14 text-center text-black  paraclassdate"><span className="fw-bolder day">31</span><br/> Dec-2021</p>
                   </div>
                    <div className="col-lg-9  mb-10">
                    <h5 className="newshead mb-0">Youth farmers harvest 64 sacks of paddy:</h5>
                        <h6 className="newspara">A group of farmers in (place) reaped what they had sowed,
                        but this was a special harvest.
                        The 14,000 sqm field area that was cultivated had been lying fallow for many years
                         and the farmers who revived it were a group of youth who took to farming to inspire
                          others.</h6>
                            <a> <Button className="newsviewmorebtn2 newsbutn"> Read More </Button></a>
                    </div>
                    <div className=" col-lg-2 ">
                        <img className="newsimageheight" src='https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'></img>
                    </div>
                </div>
                <div className="row gx-md-2  align-items-center mb-20">
                <div className="col-lg-1">
                   <p className="mb-14 text-center text-black  paraclassdate"><span className=" fw-bolder day">1</span><br/> Jan-2022</p>
                   </div>
                    <div className="col-lg-9  mb-10">
                        <h5 className="newshead mb-0">Unsegregated waste: panchayat to levy fine:</h5>
                        <h6 className="newspara">At the gram sabha held on Sunday, the (place) panchayat resolved 
                        to impose a fine of Rs 1,000 on villagers who hand in unsegregated garbage. 
                        The panchayat has also given a strict warning to the villagers to handle their garbage 
                        carefully before giving it to the garbage collectors.(place) sarpanch said, 
                        “Our villagers are educated and responsible people.</h6>
                            <a> <Button className="newsviewmorebtn2 newsbutn">Read More </Button></a>
                    </div>
                    <div className=" col-lg-2 ">
                        <img className="newsimageheight" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3vUbgesmSD65IQmJmuLs4uIopRtAXu2QWg&usqp=CAU'></img>
                    </div>
                </div>
                <div className="row gx-md-2  align-items-center mb-20">
                    <div className="col-12 align-items-center newsviewmorebtn">
                        <Button className="newsviewmorebtn2"> View More</Button>
                    </div>
                </div>






            </div>
        </section>
    )
}

export default AddBlock
