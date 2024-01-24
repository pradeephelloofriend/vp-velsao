import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;
const ContactComponent = ({ BrchData }) => {
  //console.log('brdata778',BrchData)
  return (
    <section className="wrapper ">
      <div className="container-fluid bgsection">
        
         
      
        <div className="row ">
          <div className="col-lg-12 mx-auto px-14 py-3 ">
            <div className="row gy-10  add-card">
           
              <div className="col-lg-8 baredcolor">
              <h1 className=" mb-n6 mt-8 contacthead">Contact us</h1>
                <form className="contact-form needs-validation form-pad" method="post" action="./assets/php/contact.php" novalidate>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6 ">
                      <div className="form-floating mb-4 mt-4 ">
                          <input id="form_name " type="text" name="name" className="form-control" placeholder="Jane" required />
                          <label for="form_name ">First Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please enter your first name.</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4 mt-4">
                          <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Doe" required />
                          <label for="form_lastname">Last Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please enter your last name. </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                          <input id="form_email" type="email" name="email" className="form-control" placeholder="jane.doe@example.com" required />
                          <label for="form_email">Email *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please provide a valid email address. </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-select-wrapper">
                        <select className="form-select" id="form-select" required>
                          <option selected disabled value="">Select a department</option>
                          <option value="1"> Customer Support</option>
                          <option value="2">Public Complaints</option>
                        </select>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback"> Please select a department. </div>
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="form-floating mb-4 ">
                          <TextArea className="" showCount maxLength={350} autoSize={{ minRows: 3, maxRows: 6 }} placeholder="Message*" required />
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback"> Please enter your messsage!!. </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mb-4">
                          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                          <label className="form-check-label text-white" for="invalidCheck"> I agree to <a href="#" className="hover text-white">terms and policy</a>. </label>
                          <div className="invalid-feedback"> You must agree before submitting. </div>
                      </div>
                    </div>
                    <div className="col-12">
                          <input type="submit" className="btn  rounded-pill btn-send mb-3 submitbtn" value="Send message" />
                          <p className="text-white"><strong>*</strong> These fields are required.</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-12 mt-14 class-contact ">
                <div className="d-flex flex-row  ">
                  <div>
                    <div className="icon text-primary fs-28 me-2 mt-2"> <i className="uil uil-location-pin-alt icon"></i> </div>
                  </div>
                  <div>
                    <h5 className="mb-0 mt-4">Address:</h5>
                    <address ><a  href="https://goo.gl/maps/fyEBpJbQpmb8b9By7 "  className="adresslinkhov">Camorlim, Salcete Goa</a></address>
                  </div>
                </div>
                <div className="d-flex flex-row ">
                  <div>
                    <div className="icon text-primary fs-28  me-2 mt-n1"> <i className="uil uil-phone-volume icon"></i> </div>
                  </div>
                  <div>
                    <h5 className="mb-0 mt-1">Phone:</h5>
                    <p><a href="#" className="link-body">0832-2777019</a> </p>
                  </div>
                </div>
                <div className="d-flex flex-row ">
                  <div>
                    <div className="icon text-primary fs-28 me-2 mt-n1"> <i className="uil uil-envelope icon"></i> </div>
                  </div>
                  <div>
                    <h5 className="mb-0 mt-1">E-mail:</h5>
                    <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-body">sarpanch@vpcamorlimsalcete.com</a></p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent
