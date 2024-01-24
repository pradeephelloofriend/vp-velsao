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
import abt1 from '../../public/img/IMG_20230908_110355.jpg'
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
                              Village Panchayat Pissurlem was established in the year 1962. It is located in revenue village Pissurlem, Taluka-Sattari, District-North Goa of Goa State, India, constituency 18 Poriem. It is about 32 Km towards East from district headquarter and State capital Panaji, Tiswadi Goa and about 10 Km from block headquarter Valpoi, Sattari Goa. Total 5 revenue villages namely Pissurlem, Ponshem, Vagurem, Codiem and Cumarcon divided into 7 election/administrative wards lie within jurisdiction of Village Panchayat Pissurlem.
                              </p>
                              <p>
                              Village Panchayat Pissurlem is a C Type category Gram Panchayat with total geographical within its jurisdiction as 2029.7925 Hectares....
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
                            src={abt1}
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
