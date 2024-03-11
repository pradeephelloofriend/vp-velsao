import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';
import {createStructuredSelector} from 'reselect';
import {selectFootData} from '../../redux/footer/footSelector';

  
  const Footer = ({footdata}) => {  
   //console.log('footerdata',footdata)

    const router = useRouter()
    function goToPage(pathId, catCode, desc, title, uri, iscomplete) {
        //alert(pathId)
        setTabKey(uri)
        // router.push({
        //     pathname: `/${pathId}/`,
        //     query: { catCode: catCode, desc: desc, title: title, uri: uri, iscomplete: iscomplete }
        // })

        const url = `${pathId}/?catCode=${catCode}&desc=${desc}&title=${title}&uri=${uri}&iscomplete=${iscomplete}`;
        window.open(url, '_blank');
    }
     return (
         <>
             <footer className='c-footer'>
                 <div className="container-fluid pb-2 mt-5 mt-md-5">
                    <div className='row'>
                        <div className='col-md-4'>
                        <h6 className='mb-5 text-white text-decoration-underline'> Helpline Contact </h6>
                                <p className='text-white'>Police – <b>100</b></p>
                                <p className='text-white'>Fire – <b>101</b></p>
                                <p className='text-white'>Ambulance –  <b>102</b></p>
                                <p className='text-white'>Women Helpline - <b>1091</b></p>
                                <p className='text-white'>Child Helpline - <b>1098</b></p>
                        </div>
                        <div className='col-md-4'>
                        <h6 className='mb-5 text-white text-decoration-underline'> Quick Links </h6>
                                <p onClick={() =>goToPage('reporting/admin-and-audit','admin-and-audit','Admin and Audit','Reporting','/admin-and-audit/','Yes')} className='text-white'>Admin & Audit</p>
                                <p onClick={() =>goToPage('reporting/grants-received','grants-received','Grants Received','Reporting','/grants-received/','Yes')} className='text-white'>Grants Received</p>
                                <p onClick={() =>goToPage('reporting/tenders','tenders','Tenders','Reporting','/tenders/','Yes')} className='text-white'>Tenders</p>
                                <p onClick={() =>goToPage('reporting/applications','applications','Applications','Reporting','/applications/','Yes')} className='text-white'>Applications</p>
                                <p onClick={() =>goToPage('about-us/panchayat-members','panchayat-members','Panchayat Members','About Us','/panchayat-members/','Yes')} className='text-white'>Members</p>
                                <p onClick={() =>goToPage('about-us/projects','projects','Projects Members','About Us','/projects/','Yes')} className='text-white'>Projects</p>
                       
                        </div>
                        <div className='col-md-4'>
                        <h6 className='mb-5 text-white text-decoration-underline'> Contact Details </h6>
                                <p className='text-white'>Address:Village Panchayat Velsao Pale 120, MDR43, Consua, Goa 403712</p>
                                <p className='text-white'>Phone number: +91 84089 16719</p>
                                <p className='text-white'>Email: info@gmail.com</p>
                        </div>
                    </div>
                     
                    <div className='f-link'>
                        <nav className="nav social social-muted mb-0 justify-content-center">
                            <a href="https://drive.google.com/file/d/1eUwFVm31xbqLrVmo6Ue_SnOM9BFTePmz/view?usp=sharing" target='_blank'>Website Policy</a>
                            <a href="https://drive.google.com/file/d/1dDcvJZBR6QlArzjiUhlOlXpurKNVtiWZ/view?usp=sharing" target='_blank'>Help</a>
                            <a href="https://drive.google.com/file/d/1UCbSPL3dfca2Z6QmFRioMNPH_HqvNSqm/view?usp=sharing" target='_blank'>Disclaimer</a>
                            <a href="https://drive.google.com/file/d/1dOrmwoHSozEldxdOwLvWUYto6EkP7sQz/view?usp=sharing" target='_blank'>Terms and Conditions</a>
                            {/* <a href="#">Feedback</a> */}
                            {/* <a onClick={() => goToPage('hall-book/', 'hall-book', 'hall-book', 'hall-book', '', 'Yes')}>Hall Book</a> */}
                        </nav>
                    </div>
                     <hr className="mt-0 mb-2" />
                    <div className="footer-bs">
                     <div className="c-footer-pd text-center ">
                        {/* <h6>Follow Us </h6> */}

                        <a target='_blank'>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a> 
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100090479850251'>
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a> 
                        <a target='_blank'>
                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                        </a> 
                        <a target='_blank'>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </a> 
                     </div>

                     <div className='row'>
                        <div className='col-md-4 col-sm-12'></div>

                        {/* <div className='col-md-4 col-sm-12'>
                            <div className="c-footer-pd text-center ft-addrs">
                                <p className="mb-2 mb-lg-0 adress-block">
                                    <span className='mr-5'><i className="fa fa-map-marker" aria-hidden="true"></i> HNo. 42, Gaonkarwada, Pissurlem Sattari North Goa, 403530</span>
                                    <span className='mr-5'><i className="fa fa-phone" aria-hidden="true"></i>+91 84462 98664</span>
                                    <span className='mr-5'> <i className="fa fa-envelope-o" aria-hidden="true"></i> vppissurlem01@gmail.com</span></p>

                            </div>
                        </div> */}

                        <div className='col-md-4 col-sm-12'>
                        <div className="c-footer-pd text-center ft-addrs wrapper-ft" style={{ display : 'none'}}>
                                     
                            </div>
                        </div>
                     </div>

                     

                     <div className="c-footer-pd text-center ft-rights">
                        <p className="mb-2 mb-lg-0">© 2023 VPVelsaoPaleIssorcim. All rights reserved.</p>
                     </div>

                     </div>
                 </div>

             </footer>

         </>
    )
}
const mapStateToProps=createStructuredSelector({
    footdata:selectFootData
})


export default connect(mapStateToProps) (Footer)


