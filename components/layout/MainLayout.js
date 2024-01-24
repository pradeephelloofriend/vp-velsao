import React from 'react'
import { Layout } from 'antd';
import {useRouter} from 'next/router'
import TopHeaderAreaComponent from '../header/TopHeaderAreaComponent';
import NavbarComponent from '../header/NavbarComponent';
import Footer from '../footer/Footer';

const MainLayout = ({children}) => {
    const router=useRouter()
    //console.log('main-layout-router',router)
    const{iscomplete}=router.query
    
    return (
        <>
        <Layout className="content-wrapper">
            
                {/* <TopHeaderAreaComponent/> */}
                <NavbarComponent/>
                    {children}
                <Footer/>
            
        </Layout>
        </>
    )
}
export default  MainLayout