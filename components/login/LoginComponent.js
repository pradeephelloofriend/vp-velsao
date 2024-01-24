import React from 'react'
import { connect, Connect } from 'react-redux';
import { setRegStatus } from '../../redux/menu/menuAction';
import { setUserPhone } from '../../redux/user/userAction';
import firebase, { auth, googleProvider, createUserProfileDocument,firestore } from '../../firebase/firebaseUtility';
import { Button, Checkbox, Form, Input } from 'antd';
const LoginComponent = ({setRegStatus,setUserPhone}) => {
    const form = Form.useForm();
    const [userInput,setUserInput]=React.useState('') //email or mobile
    const [inputText,setInputText]=React.useState('')
    const [userText,setUserText]=React.useState('')
    const [pwdText,setPwdText]=React.useState('')
    const[mConfirm,setMconfirm]=React.useState(false) //mobile confirm for otp
    const [msg,setMsg]=React.useState('')
    const [msgPwd,setMsgPwd]=React.useState('')
    const [error,setError]=React.useState(true)
    const [erPwd,setErPwd]=React.useState(true)
    var recaptchaVerifier=null;
    const [capthaVerifier,setCapthaVerifier]=React.useState(false)
    var recaptchaWrapperRef=null
    const onFinish = (values) => {
        // console.log('Success:', values);
        if(erPwd && error ){
            alert('enter all input')
        }else{
          if(userInput=='mobile'){
            if(mConfirm){
              window.confirmationResult.confirm(pwdText).then((result) => {
                const user = result.user;
                setUserPhone(user.phoneNumber)
                const userRef = firestore.collection("users").doc(user.uid);
                userRef.get().then((snapShot)=>{
                  if (snapShot.exists) {
                    //setLoginStep('mobile')//used in search component
                    //toggleModalVisible()
                    //console.log('snapShot.data()',snapShot.data())
                    
                  }else{
                      //console.log('snapShot.data()',snapShot.data())
                      //this.setState({ loginStep: 'm-success', otpUser: user })
                      //setLoginStep('m-success')
                  }
                })
              }).catch((error) => {
                alert(error)
              });
            }else{
              alert('You r not Sending OTP')
            }
            
          }else{
            alert('You r in email')
          }
        }
        

    };
    
      const onTextPasswordChange=(e)=>{
        setPwdText(e)
        if(e.length<1){
          setErPwd(true)
          setMsgPwd('Please Enter Valid Password')
        }else{
          setErPwd(false)
          setMsgPwd('')
        }
      }
      const onTextChange=(e)=>{
          //console.log('userinput',e)
          setUserText(e)
          const result = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e)
          let tempValue=''
          if (!isNaN(+e) && e.length > 4  ){
            tempValue='mobile'
            setUserInput('mobile')
            
            if (e.length ==10 && tempValue=='mobile'){
              setMsg('')
              setInputText(e)
              setError(false)
              //console.log('text', 'mobile number')
            }else{
              setError(true)
              setMsg('invalid mobile number')
              //console.log('text', 'invalid mobile number')
            }
            
            
        }else{
        
          tempValue='email'
          setUserInput('email')
            if (result){
              setMsg('')
              setError(false)
                //console.log('text', ' valid email id')
            }else{
              setMsg('invalid email id')
              setError(true)
              //console.log('text', ' invalid email id')
            }
            
        }
        
        
    }
    const configureCaptcha = (id) => {
      if (recaptchaVerifier  && recaptchaWrapperRef){
        recaptchaVerifier.clear()
        recaptchaWrapperRef.innerHTML = `<div id="captchaVerify"></div>`
        setCapthaVerifier(false)
      }
      recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captchaVerify', {
          'size': 'invisible',
          'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              //this.onBtnClick(id);
              setCapthaVerifier(true)
              //console.log("Recaptca varified")
          },
          defaultCountry: "IN"
      });
      
      
      
  }
    const getOtp=()=>{
      configureCaptcha()
      const phoneNumber = "+91" + inputText
      const appVerifier = recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          setMconfirm(true)
          //console.log("OTP has been sent")
          
          // ...
      }).catch((error) => {
          // Error; SMS not sent
          // ...
          //alert(error)
          setMconfirm(false)
          recaptchaVerifier.clear()
          alert(error)
      });
    }

  //console.log('userInput',userInput)
  return (
      <>
          <div className="text-center mb-4">
              <h2 className="m-0 link-c-blue">Login</h2>
          </div>
          <div className='login-form'>
            <div className='user-name mb-3'>
              <Input placeholder='Email ID Or Phone Number' 
                onChange={(e)=>onTextChange(e.target.value)}
                />
              <a className='text-danger' href="#">{msg}</a>
            </div>
            <div className='password mb-3'>
                <Input.Password placeholder='OTP/Password'
                onChange={(e)=>onTextPasswordChange(e.target.value)}addonAfter={error?<></>:<a className='hover' onClick={()=>getOtp()}>Get OTP</a>} 
      
              />
              <a className='text-danger' href="#">{msgPwd}</a>
            </div>
            <div className="eltio_k2">
											<a className='link-c-blue' href="#">Lost Your Password?</a>
										</div>
            <div className='btn-login'>
              
        <Button onClick={()=>onFinish()}  className='mt-2 bg-c-blue text-white'>
          Submit
        </Button>
            </div>
            <div className="form-group text-center mb-0">
									<p className="extra">Not a member?<a onClick={()=>setRegStatus(true)} href="#et-register-wrap" className="link-c-blue"> Register</a></p>
								</div>
          </div>
         
    <div ref={ref =>recaptchaWrapperRef = ref}>
                            <div id="captchaVerify"></div>
                        </div>
      </>
  )
}
const mapDispatchToProps=dispatch=>({
  setRegStatus:data=>dispatch(setRegStatus(data)),
  setUserPhone:(phone)=>dispatch(setUserPhone(phone)),
  setCurrentUser: cUser => dispatch(setCurrentUser(cUser)),
})
export default connect(null,mapDispatchToProps) (LoginComponent)