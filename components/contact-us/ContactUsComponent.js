import React from 'react'

const ContactUsComponent = ({cData}) => {
    //console.log('contact',cData)
    const{acf}=cData
  return (
      <>
          <section className="wrapper bg-gray">
              <div className="container  py-10 py-md-12">
                  <div className="row">
                  <div className="caption1">
                                  <h1>{cData.title.rendered}</h1>
                              </div>
                      <div className='col-md-6'>
                            <div className='desc-block'>
                                <strong><i className="fa fa-home" aria-hidden="true"></i>Address:</strong>
                                <div dangerouslySetInnerHTML={{ __html:acf.address!==null?acf.address:<></>}} />
                            <p><strong><i className="fa fa-phone-square" aria-hidden="true"></i>Phone: </strong>
                            {acf.phone.map((p,idx)=>
                            p.number
                            )}
                            </p>

                            <p><strong><i className="fa fa-envelope" aria-hidden="true"></i>Email: </strong>
                            {acf.email.map((p,idx)=>
                            p.email_id
                            )}
                            </p>
                            </div>
                            
                          
                      </div>
                      <div className='col-md-6'>
                      <div className='scg-image-block '>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30778.993503011257!2d73.9347280619629!3d15.356208107164571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0ae69d3273f7d35!2sNagoa%20Village%20Panchayat!5e0!3m2!1sen!2sin!4v1664186610670!5m2!1sen!2sin"  width="100%" height="300"  loading="lazy"></iframe>
                            </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default ContactUsComponent