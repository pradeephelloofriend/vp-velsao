import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card } from 'antd';
import { Collapse } from 'antd';
import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from '../detail/UploadDocumentComponent';

const { Panel } = Collapse;

const { TabPane } = Tabs;
const RtiTabDetailComponent = ({regCertData,cDetailData}) => {
    //console.log('cDetailData',cDetailData)
    const{description,button}=cDetailData
    
     
  return (
    <>
        <div className='page-content '>
                <div dangerouslySetInnerHTML={{ __html:description!==null || description!==''?description:<></>}} />
                <div className='btn-block mt-3 f-right'>
                    <a  href={`${button.link}`}> <Button className='view-btn mr-5'>{button.name}</Button></a>
                </div>
          </div>
          
          

      </>
  )
}
const mapStateToProps=createStructuredSelector({
    regCertData:selectRegCertData
})
export default connect(mapStateToProps) (RtiTabDetailComponent)