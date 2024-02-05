import React from 'react'
import Banner from '../components/home/Banner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {setServiceAreaData,setSchemeAreaData} from '../redux/services/serviceAction'

import { selectServiceData} from '../redux/services/serviceSelector';
import MapComponent from '../components/home/MapComponent';

import AboutUsBlockComponent from '../components/home/AboutUsBlockComponent';
import NewsSectionComponent from '../components/home/NewsSectionComponent';
import PopulationSectionComponent from '../components/home/PopulationSectionComponent';
import FacilitesComponent from '../components/home/FacilitesComponent';
import Schemes from '../components/home/Schemes';
import OtherLinks from '../components/home/OtherLinks';
import BigMenuComponent from '../components/home/BigMenuComponent';
import ProfileComponent from '../components/home/ProfileComponent';
import OtherLinksComponent from '../components/home/OtherLinksComponent';
import Sliderbanner from '../components/home/Sliderbanner';
import { selectIsloading } from '../redux/menu/menuSelector';
import { Spin } from 'antd';
import OurClientsComponent from '../components/home/OurClientsComponent';
import PosterComponent from '../components/home/PosterComponent';
import HallBookButtonComponent from '../components/home/HallBookButtonComponent';
import AnnounceModal from '../components/modal/AnnounceModal';
import StepsComponent from '../components/StepsComponent';
import PopulationCountSectionComponent from '../components/home/PopulationCountSectionComponent';

//get initial ServerSideProps

const index = ({isLoading}) => {
    return (
        <>
            <Spin spinning={isLoading}>
            {/* <AnnounceModal/> */}
            <Sliderbanner/>
            <OtherLinks />
            {/* <StepsComponent/> */}
            <Banner />
            <NewsSectionComponent />
            {/* <HallBookButtonComponent/> */}
            {/* <PosterComponent /> */}
            
            <ProfileComponent/>
            <OtherLinksComponent/> 
            <PopulationSectionComponent/>
            <FacilitesComponent/>
            <Schemes/>
            <OurClientsComponent/>
            <MapComponent/>
            </Spin>
        </>
    )
}
//for fetching data from store
const mapStateToProps=createStructuredSelector({
    isLoading:selectIsloading
})
export default  connect(mapStateToProps) (index)