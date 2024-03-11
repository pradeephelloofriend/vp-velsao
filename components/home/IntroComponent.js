import React from 'react';
import { Card, Button } from 'antd';
import { useRouter } from 'next/router';
import { getVillageData, getSliderHomeData } from '../../lib/api';
import abt1 from '../../public/img/IMG_20230908_110355.jpg'

function IntroComponent() {
    
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
    <div>
      
      <section className='mid-sec bg-white pb-14'>
        <div className='container'>
            <div className='fifly-left'>
            {vilData !== null ? (
                 <div className="caption1 pb-6">
                 <h2>{vilData !== null ? vilData.title : <></>}</h2>
               </div>
            ):<></>}
                <div className='row'>
                    <div className='col-md-7'>
            <Card>
                <img className='img1' src='https://crushersagarwalla.com/wp-content/uploads/2022/10/Group-1079.svg' />
                <div className='new-class'>
                <p > The Village Panchayat of Velsao-Pale-Issorcim is nestled along the picturesque and refreshing coastal belt of Velsao. Within this charming village, you will find two stunning beaches – Velsao Beach and Hollant Beach in Issorcim Village. The population of this Village Panchayat is approximately 4399, with fishing and agriculture/farming serving as the primary occupations for its residents. </p>
                     <p>Velsao-Pale is a Village located in the Mormugao Taluk in the South Goa District of Goa State, India. Positioned 14 KM north from the District headquarters of Margao and 7 KM from Mormugao, this village is conveniently situated 18 KM from the State capital of Panaji.</p>
                     <div className='button-class'>
                     <Button onClick={() => goToPage('about-us/village', 'village', 'Village', 'About Us', '/village/', 'No')}
                                href="#">Read More</Button></div>
                     <img className='img2' width="160" height="60" src="https://crushersagarwalla.com/wp-content/uploads/2022/10/Group-2523.svg" class="attachment-full size-full lazyloaded" alt="" data-ll-status="loaded"></img>
                     </div>
                     <img className='img3' src='https://crushersagarwalla.com/wp-content/uploads/2022/10/Group-1079.svg' />
  </Card>
  </div>
  <div className='col-md-5'>
    <img className='img4' src='/img/velsao_panchyat.png' />
  </div>
  </div>
  </div>
            </div>
                </section>
    </div>
  )
}

export default IntroComponent
