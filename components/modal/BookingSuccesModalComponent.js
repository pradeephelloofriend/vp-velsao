
import React from 'react'
import { connect } from 'react-redux';
import {Result,Button} from 'antd'
import { createStructuredSelector } from 'reselect';


import { Modal, Toast } from 'react-bootstrap';
import { getHallBookingById } from '../../lib/api';
import jsPDF from "jspdf";
import "jspdf-autotable";
import HallBookingDownloadComponent from '../hall-book/HallBookingDownloadComponent';
const BookingSuccesModalComponent = ({show,onHide,bookingId}) => {
   
  return (
      <>
          <Modal
              show={show}
              onHide={() => onHide()}
              className="modal-login payment-modal"
              size="sm"
              autoFocus={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
          >
              <button onClick={() => onHide()} type="button" className="close">
                  <i class="fa fa-times " aria-hidden="true"></i>
              </button>
              <Modal.Body className='p-2'>
                  <HallBookingDownloadComponent bookingId={bookingId} onHide={onHide}/>
              </Modal.Body>

          </Modal>
      </>
  )
}

export default BookingSuccesModalComponent