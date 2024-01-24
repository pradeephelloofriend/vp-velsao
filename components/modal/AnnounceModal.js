import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button} from 'antd';

const AnnounceModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    }; 

    useEffect(() => {
        setShow(true);
      }, []);

  return (
    <div>
        <Modal className="announce-block" show={show} onHide={handleClose} size="md" >
            {/* <Modal.Header closeButton>
                <Modal.Title>Welcome to Our Website!</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                {/* This is a Bootstrap modal that appears when the website opens. */}
                  <div className='img-announce'>
                      {/* <img  style={{ width: "100%" }} alt="Modal Image" /> */}
                      <Button onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")} className='team-level '>Join Us</Button>
                  </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer> */}
        </Modal>
    </div>
  )
}

export default AnnounceModal