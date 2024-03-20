import React from 'react';
import Marquee from "react-fast-marquee";
import { useRouter } from 'next/router';
import { getNoticeHomeData } from '../../lib/api';

function MarqComponent() {
    const [nData,setNdata]=React.useState(null)
   

    React.useEffect(()=>{
        //setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getNoticeHomeData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
            //   console.log('cData',cData)
               setNdata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    //console.log('Ndata = ', nData)


    const router = useRouter()
    function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
        //alert(pathId)
        
                setTabKey(uri)
                router.push({
                    pathname: `/${pathId}/`,
                    query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
                })
    }
  return (
      <div className='col-md-12 news-ps2'>
                                <div className='mar-container'>
                                <div className='marquee-box'>
                                    <Marquee
                                                gradient={false}
                                                speed={50}
                                                pauseOnHover={true}
                                            >
                                                {nData!==null?nData.map((data, index) =>
                                                    <a key={index} className="text-black ms-7"><span className="animate-text1">New</span><span className='not-text'>{data.notices.title}</span>
                                                    </a>
                                                ):<></>}
                                            </Marquee>
                                </div>
                                </div>
                                
    </div>
  )
}

export default MarqComponent
