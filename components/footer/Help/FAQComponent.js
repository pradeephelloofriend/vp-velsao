import React from 'react'
import { Collapse } from 'antd';
import Accordion from 'react-bootstrap/Accordion'



const { Panel } = Collapse;
const FAQComponent = () => {
    return (
        
<section className="wrapper bg-light">
    <div className="container py-14 py-md-16">
      <h2 className="display-4 mb-3 text-center"> FAQ'S</h2>
      <p className="lead text-center mb-10 px-md-16 px-lg-0">If you don't see an answer to your question, you can send us an email from our contact form.</p>
         <div className="row">
          <div className="col-lg-12">
          <Collapse accordion>
    <Panel header="What is the customer care connect.?" key="1">
      <p>Customers can contact on Landline +91 – 22 – 66 58 66 58 or send an email to customercare@prina.com</p>
    </Panel>
    <Panel header="What Is NEFT ? " key="2">
      <p>NEFT stands for `National Electronic Funds Transfer`. NEFT system is a nation wide funds 
        transfer system to facilitate transfer of funds from any bank branch to any other bank branch.</p>
    </Panel>
    <Panel header="What Is IFSC ?" key="3">
      <p>IFSC or Indian Financial System Code is an alpha-numeric code that uniquely identifies a 
        bank-branch participating in the NEFT system. This is a 11 digit code with the first 4 
        alpha characters representing the bank code, 5th character is 0 (zero) and the last 6 numeric 
        characters representing the branch code.</p>
    </Panel>
    <Panel header="Why IFSC Code required ?" key="4">
      <p>RBI had advised all the banks to publish their IFSC. This is useful for inter-intra banking 
        transcation to their customers.</p>
    </Panel>
    <Panel header="Alteration of information?" key="5">
      <p>Alteration on the account opening form requires customer’s authentication letter duly signed.</p>
    </Panel>
    <Panel header="GST Rate Applicability?." key="6">
      <p>A GST rate of 18% will be applicable on banking services and products from 01 July, 2017.</p>
    </Panel>
  </Collapse>,
          </div>
        </div>
    </div>
        
  
</section>

    )
}

export default FAQComponent
