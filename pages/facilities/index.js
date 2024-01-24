import React from 'react'
import { useState } from 'react';
import {Container ,Card, Col, Button, Row} from 'react-bootstrap';  
import { Radio } from 'antd';
import { Anchor } from 'antd';
const { Link } = Anchor;

const index = () => {
  const [value, setValue] = useState('1');
  const [urlLink, setUrlLink] = useState();

  const [valuetwo, setValueTwo] =useState('1');

  const RadioChange = (e) => {
    console.log(e)
    setValue(e.target.value)

    if(e.target.value == '1')
    {
       setUrlLink('https://www.goaelectricity.gov.in/payment_home.aspx');
    }
    else if(e.target.value == '2')
    {
      setUrlLink('https://gedbbps.tjsbbank.co.in/');
    }
    else
    {
      setUrlLink('https://goaonline.gov.in/PG/76_ELE/ELEBILL?__Key=&__cscKey=');
    }
  }

  const newChange = (e) => {
    setValueTwo(e.target.valuetwo);
  }

  return (

    <div className='responsive-diagonal'>
    <div className='container'>
    <h1 className='p-6 text-danger'>Enjoy New Payment Facilities</h1>
    <h3 className='text-center text-blue'>Pay Your Electricity and Water Bills Online with the Best Facilities Available</h3>
    

              <div className="App">  
              <Container className='p-4 '>  
              <Row className='d-flex justify-content-center'>
              <Col md="4" >  
              <Card>  
              <Card.Body>  
                <Card.Title className='text-blue'><i className="fa fa-lightbulb-o" aria-hidden="true" ></i> Electricity Bill
                <div >
                  <Radio.Group onChange={ (e) => RadioChange(e) } defaultValue={value}>
                  <Radio className='text-danger' value="1">AXIS BANK</Radio>
                  <Radio className='text-danger' value="2">TJSB BANK</Radio>
                  <Radio className='text-danger' value="3">GOA ONLINE</Radio>
                  </Radio.Group>
                  </div>
                </Card.Title>  
                <Card.Link>  
                Pay your Electricity Bill
                </Card.Link>
                <Button onClick={event =>  window.location.href=`${urlLink}`}  variant="primary" className='m-5'>PAY NOW</Button> 
                </Card.Body>  
            </Card>  
                </Col> 

              <Col md="4" >  
              <Card>  
              <Card.Img variant="top"/>  
              <Card.Body>  
                <Card.Title className='text-blue'> <i className="fa fa-money" aria-hidden="true"></i> Water Bill
                <div>
                <Radio.Group onChange={ (e) => newChange(e)} defaultValue= {valuetwo} >
                  <Radio className='text-danger' value='1'>TJSB BANK</Radio>
                  </Radio.Group>
                  </div>
                </Card.Title>  
                <Card.Link>  
                Pay your Water Bill
                </Card.Link>  
                <Button className='primary m-5' onClick={event =>  window.location.href='https://goapwd.tjsbbank.co.in/'}>PAY NOW</Button>  
              </Card.Body>  
            </Card> 
                </Col>  
                </Row>
            </Container>  
                </div> 



  </div>
  </div>
  )
}

export default index