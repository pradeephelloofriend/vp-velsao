import React from 'react'
import { useRouter } from 'next/router'
import { connect, Connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { setRegStatus } from '../../redux/menu/menuAction';
import { selectCuser } from '../../redux/user/userSelector';
import LoginModalComponent from '../modal/LoginModalComponent'
import BookingListModal from '../modal/BookingListModal';

const TopHeaderAreaComponent = ({setRegStatus,cUser}) => {
    const [show,setShow]=React.useState(false)
    const [show1,setShow1]=React.useState(false)

    const router = useRouter();
    const newClick = () => {
    router.push('/facilities');
}
  const handleShow = () => {
      setShow(true)
  };
  const handleClose = () => {
    setShow(false)
    setRegStatus(false)
  };
    const handleShow1 = () => {
        setShow1(true)
    };
    const handleClose1 = () => {
    setShow1(false)
    
    };
    return (
        <>
            <div className="top-header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="header-content-left top-hd-sec1">
                            <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1694071183/vp/nagargoa/BharatFlagiconpng_ty5ika.png'}
                                height={22} width={41} alt="Village Panchayats" />
                                <a>Welcome To Velsao-Pale-Issorcim Panchayat!</a>
                            </div>
                        </div>
                                
                            <div className="col-lg-9">
                            <div className="header-content-right top-hd-sec2">
                                    
                                    <a href="mailto:hello@surety.com" className="me-xl-8 text-icon-blue ">
                                    <i className="fa fa-envelope-o me-xl-1"></i>
                                        Email: vppissurlem01@gmail.com
                                    </a>
                                    <a href="tel:+822456974" className="me-xl-8 text-icon-blue">
                                    <i className="fa fa-mobile me-xl-1"></i>
                                        Call Us For Inquiry: +91 84462 98664
                                    </a>
                                    {/* <a onClick={()=> newClick()} className=" me-xl-8 text-black">
                                    <i className="fa fa-angle-double-right me-xl-1"></i>
                                        Utility Billing 
                                    </a>
                                    <a href="#" onClick={()=>handleShow1()} className="me-xl-8 text-dblue blink1">
                                    <i className="fa fa-angle-double-right me-xl-1 "></i>
                                        View hall booking list
                                    </a> */}
                                    {/*cUser!==null?
                                    <a href="#" onClick={()=>handleShow()} className="text-red">
                                    <i className="fa fa-sign-out me-xl-1"></i>
                                        Log Out
                                    </a>
                                    */}
                                    {/*<a href="#" onClick={()=> window.open("https://chicalim-user.netlify.app/","_blank")} className="text-white">*/}
                                    {/* <a href="#" onClick={()=> window.open("https://users.vpchicalim.in/login/","_blank")} className="text-black">
                                    <i className="fa fa-user-o me-xl-1"></i>
                                        Login/Register
                                    </a> */}


                                    <span className='soc-md-sec'>
                                        <a className='soc-md-icon' target='_blank'>
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a className='soc-md-icon' target='_blank' href='https://www.facebook.com/profile.php?id=100090479850251'>
                                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                        </a>
                                        <a className='soc-md-icon' target='_blank'>
                                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                        </a>
                                        <a className='soc-md-icon' target='_blank'>
                                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>

                                    </span>
                                    
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                
                           
                   
            <LoginModalComponent
            show={show}
            onClick={handleClose}
            onHide={handleClose}
            />
            <BookingListModal
            show={show1}
            onClick={handleClose1}
            onHide={handleClose1}
            />
        </>
    )
}
const mapStateToProps=createStructuredSelector({
    cUser:selectCuser
})
const mapDispatchToProps=dispatch=>({
    setRegStatus:data=>dispatch(setRegStatus(data))
  })
export default connect(mapStateToProps,mapDispatchToProps) (TopHeaderAreaComponent)
