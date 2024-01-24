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

                        <div className='col-md-4 col-sm-12'>
                            <div className="c-footer-pd text-center ft-addrs">
                                <p className="mb-2 mb-lg-0 adress-block">
                                    <span className='mr-5'><i className="fa fa-map-marker" aria-hidden="true"></i> HNo. 42, Gaonkarwada, Pissurlem Sattari North Goa, 403530</span>
                                    <span className='mr-5'><i className="fa fa-phone" aria-hidden="true"></i>+91 84462 98664</span>
                                    <span className='mr-5'> <i className="fa fa-envelope-o" aria-hidden="true"></i> vppissurlem01@gmail.com</span></p>

                            </div>
                        </div>

                        <div className='col-md-4 col-sm-12'>
                        <div className="c-footer-pd text-center ft-addrs wrapper-ft">

                            <div>
                                <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1697617150/vp/pissurlem/qr_pissurlem-min_pf6gmu.jpg'
                                    height={200} width={200} alt="g20"></img>
                                <p>SCAN & PAY</p>
                                <span className='mr-5'>UPI ID  : <span className='bnk-bd'>vppissurlem@sbi</span></span>
                            </div>
                            <div className='bnk-box'>
                                <p className="mb-2 mb-lg-0 adress-block">
                                    <span className=''>Name of Account Holder : <span className='bnk-bd'>Village Panchayat Pissurlem</span></span>
                                    <span className=''>Name of Bank : <span className='bnk-bd'>State Bank Of India</span></span>
                                    <span className=''>Branch/Code : <span className='bnk-bd'>Honda-Sattari(Goa) / 6191</span></span>
                                    <span className=''>Account Number : <span className='bnk-bd'>11327816620</span></span>
                                    <span className=''>Account Type : <span className='bnk-bd'>Regular Savings Bank Account</span></span>
                                    <span className=''>IFSC Code  : <span className='bnk-bd'>SBIN0006191</span></span>
                                </p>
                            </div>
                                     
                            </div>
                        </div>
                     </div>

                     

                     <div className="c-footer-pd text-center ft-rights">
                        <p className="mb-2 mb-lg-0">© 2023 VPPissurlem. All rights reserved.</p>
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


