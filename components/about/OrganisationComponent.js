import React from 'react'
import on1 from '../../public/img/photos/on1.jpg';
import on2 from '../../public/img/photos/on2.jpg';
import on3 from '../../public/img/photos/on3.jpg';
import on4 from '../../public/img/photos/on4.jpg';
import on5 from '../../public/img/photos/on5.jpg';
import on6 from '../../public/img/photos/on6.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {API_PATH} from '../../Global'

const OrganisationComponent = ({orgData}) => {
  //console.log('orgData',orgData)
    return (
      <section className="wrapper  Organisationbgcolor">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center Organisationcolor">
            <div className="col-lg-6">
              <h2 className="display-4 mb-3">Organisational Structure</h2>
            </div>
            <div class="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 ">
            {orgData.map((i,index)=>
              <div key={index} className="col-md-6 col-lg-3 orgpaddingtop">
                <div class="card">
                  <figure class="card-img-top">
                    <Image
                      className="svg-inject icon-svg icon-svg-md text-yellow mb-3 "
                      height={600}
                      width={600}
                      alt="171x180"
                      src={`${API_PATH}assets/image/organisation/${i.PIImage}`}
                    />
                  </figure>
                  <div class="card-body  orgpaddingname">
                    <h4 class="mb-0">{i.PIName}</h4>
                    <h5 class="mb-1 "><b>{i.PIDesg}</b></h5>
                    <p class="mb-0  mt-1 Description">{i.PIDesc}</p>
                  </div>
                </div>
            </div>
            )}
          
              
            </div>

          </div>
        </div>
    </section>
   
   
       











   
    )
}

export default OrganisationComponent
