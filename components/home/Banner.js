import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography,Card,Divider } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import { getSliderHomeData } from '../../lib/api';
import { getVillageData } from '../../lib/api'
// import abt1 from '../../public/img/abtus1a.png'
// import abt1 from '../../public/img/big_193821_big_172262_velsao-pale-VP.png'
import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';
import { connect } from 'react-redux';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Banner = ({sliderData, setTabKey}) => {
  // console.log('sliderdata',sliderData)
  //const Demo= sliderData.content.map(i=>i)
  //console.log('demo',Demo)
  const [slData,setSldata]=React.useState(null)
    const [vilData, setVilData]=React.useState(null)

    const router = useRouter();

    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
      //alert(pathId)
              setTabKey(uri)
              router.push({
                  pathname: `/${pathId}/`,
                  query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
              })
    }

      React.useEffect(()=>{
          //setLoading(true)
          let isApiSubscribed = true;
          async function fetchData() {
              
              const cData = await getSliderHomeData() //applo client   
              const vData = await getVillageData()
              // 👇️ only update state if component is mounted
              if (isApiSubscribed) {
                // console.log('cData',cData)
                // console.log('vilData',vilData)
                setSldata(cData)
                setVilData(vData)
              }
            }
          
            fetchData()
            return () => {
              // cancel the subscription
              isApiSubscribed = false;
            };
      },[])
      // console.log('slData',slData)
      // console.log('vilData',vilData)
      const description = 'This is a description.';
    return (
      <>
       {/* <section className="wrapper abtus-bgm"> */}
       <section className="wrapper news-bgm-anim-duplicate3">
          <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>

              {vilData !== null ? (
                <Card className='abtus-cd'>

                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='slider-block  '>
                          <div className="caption1">
                            <h2>{vilData !== null ? vilData.title : <></>}</h2>
                          </div>
                          <div className='slider-content'>

                            <div className="mb-3">
                              {/* {vilData !== null ? (
                                <div dangerouslySetInnerHTML={{ __html: vilData.desc }} />
                              ) : null} */}

                              <p>
                              The Village Panchayat of Velsao-Pale-Issorcim is nestled along the picturesque and refreshing coastal belt of Velsao. Within this 
                              charming village, you will find two stunning beaches - Velsao Beach and Hollant Beach in Issorcim Village.
                              </p>
                              <p>
                              The population of this Village Panchayat is approximately 4399, with fishing and agriculture/farming serving as the primary occupations for its residents.....

                              </p>

                              <a
                                onClick={() => goToPage('about-us/village', 'village', 'Village', 'About Us', '/village/', 'No')}
                                href="#"
                                className="more hover link-disp-blue mt-3 f-right">Read More</a>
                            </div>

                            {/* <div className="mb-3" dangerouslySetInnerHTML={{ __html:vilData!==null?vilData.otherDesc:<></>}} /> */}
                            {/* <div className="mb-3">
                        {vilData !== null ? (
                          <div dangerouslySetInnerHTML={{ __html: vilData.otherDesc }} />
                        ) : null}
                      </div> */}

                          </div>
                        </div>
                      </div>

                      <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='abt-us-img'>
                          <Image
                            alt="s1"
                            src='/img/PanchayatVelsao.jpg'
                            height={300}
                            width={600}
                          />
                        </div>

                        {/* <div className="abt-us-soc text-center">
                          <h6>Follow Us </h6>

                          <a target='_blank'>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                          <a target='_blank'>
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                          </a>
                          <a target='_blank'>
                            <i class="fa fa-twitter-square" aria-hidden="true"></i>
                          </a>
                          <a target='_blank'>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                          </a>
                        </div> */}
                      </div>
                    </div>
                </Card>
                ) : <></>}

              </div>
            </div>
          </div>
        </section>
      </>
    )
}

const mapDispatchToProps=dispatch=>({
  setTabKey:(data)=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps)(Banner)
// export default Banner
