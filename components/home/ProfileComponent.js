import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import pmap from '../../public/img/nagarganvpanchayat.jpg'
import { Table } from 'antd';

const ProfileComponent = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Pissurlem',
      area: '733.2018 Ha',
    },
    {
      key: '2',
      name: 'Ponshem',
      area: '296.0275 Ha',
    },
    {
      key: '3',
      name: 'Vagurem',
      area: '276.3132 Ha',
    },
    {
      key: '4',
      name: 'Codiem',
      area: '175.1650 Ha',
    },
    {
      key: '5',
      name: 'Cumarcon ',
      area: '549.0850 Ha',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
    
  ];

  return (
    <>
    <section className="wrapper bg-image bg-overlay profile-section" >
      <div className="container py-12">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            
            {/* <div class="dcard">
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>
              <div class="trigger"></div>

              <div class="card card-mp mp-img">
                <div class="frame">
                </div>
              </div>

            </div> */}
              {/* <Image className='image prof-mp-mb' alt="example" src={'https://res.cloudinary.com/depg2aab2/image/upload/v1694516015/vp/nagargoa/nagarganvpanchayatMAPimgweb-final_mntwo0.png'} 
                height={1400} width={1090}/> */}
                <a href='https://tcp.goa.gov.in/wp-content/uploads/2019/02/land-use-plan/SattariTaluka/pissurlempanchayat.jpg' target='_blank'>
                <Image
                  className='image' alt="example" 
                  src='https://res.cloudinary.com/depg2aab2/image/upload/v1696588589/vp/pissurlem/pissurlempanchayat_yv71le.jpg'
                  height={500} width={500}/> 
                </a>
                
                {/* <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1670342628/vp/dongrim/dongurli-map-min_jhxgx1.png' height={800} width={800}
                 alt=''/> */}
            
            
          </div>
          
          <div className='col-lg-7 col-md-12'>
            <div className='pf-content-block prof-text'>
            <h4 className="display-6 mb-0 text-white" style={{position: 'relative', textAlign: 'center'}}>Pissurlem Profile</h4>
            <div class="flex-container-prof1">
                <div>
                  <p>Block / Taluka</p>
                  <h2>Sattari</h2>
                </div>

                <div>
                  <p>District</p>
                  <h2>North Goa</h2>
                </div>

                <div>
                  <p>State</p>
                  <h2> Goa </h2>
                </div>

                <div>
                  <p>Pincode </p>
                  <h2> 403530 </h2>
                </div>
              </div>

              <div class="flex-container-prof1">
                <div>
                  <p>Population (Census 2011) </p>
                  <h4>Total - 3287</h4>
                  <h4>Male - 1619</h4>
                  <h4>Female - 1668</h4>
                </div>

                <div>
                  <p>Households </p>
                  <h4>With H.No - 824</h4>
                  <h4>With EHN - 120</h4>
                </div>


                <div>
                  <p>Wards </p>
                  <h4>Ward - 07</h4>
                  <h4>Hamlets - 15</h4>
                </div>
              </div>

              

              <div class="flex-container-prof2">
                <div>
                  <p>Assembly Constituency </p>
                  <h2>18</h2>
                  <h2>Poriem</h2>
                </div>

                <div>
                  <p>Parliament Constituency </p>
                  <h2>North Goa</h2>
                </div>  
              </div>

              <div class="flex-container-prof3">
                <div>
                  <h3>V.P Pissurlem</h3>
                  <h3>Total Geographical Area - 2029.7925 Ha</h3>
                  <Table dataSource={dataSource} columns={columns} />
                  {/* <h6>Pissurlem 733.2018 Ha</h6>
                  <h6>Ponshem 296.0275 Ha</h6>
                  <h6>Vagurem 276.3132 Ha</h6>
                  <h6>Codiem 175.1650 Ha</h6>
                  <h6>Cumarcon 549.0850 Ha</h6> */}
                </div>
              </div>

                
            </div>

            {/* <div className='pf-content-block prof-text'>
            <h4 className="display-6 mb-0 text-white" style={{position: 'relative'}}>Nagargao Profile</h4>
                  <ul className='pf-ul text-white mt-3 pf-ho-an'>
                    <li>Block / Taluka: 
                      <p>Sattari</p>
                    </li>
                    <li>District : 
                      <p>North Goa</p>
                    </li>
                    <li>State: 
                      <p>Goa</p>
                    </li>
                    <li>Pincode : 
                      <p>403506</p>
                    </li>
                  </ul>
                  <ul class="pf-ul text-white mt-3 pf-ho-an">
                    <li>Area :<p>161 hectares</p></li>
                    <li>Population :<p>549</p></li>
                    <li>Households :<p>117</p></li>
                  </ul>
               
              <ul className='pf-ul pf-other text-white text-center mt-3 pf-ho2-an'>
              
                  <ul className='pf-ul text-white mt-3'>
                    <li className='pf-bg-orange'>Assembly Constituency
                      <p>Valpoi</p>
                    </li>
                    <li className='pf-bg-merun'>Parliament Constituency
                      <p>North Goa</p>
                    </li>
                    

                  </ul>
               
              </ul> 
            </div> */}
            

          </div>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default ProfileComponent