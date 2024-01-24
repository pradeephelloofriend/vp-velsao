import React from 'react'
import vision from '../../pages/about/vision'

const MissonComponent = ({data}) => {
  const [heading]=data.filter(x=>x.ContentCode=='TT')
  //console.log('heading',heading)

  const [mission]=data.filter(x=>x.ContentCode=='MS')
 // console.log('mission',mission)

  const [vision]=data.filter(x=>x.ContentCode=='VS')
 // console.log('Vision',vision)
    return (
        <section className="wrapper bg-light">
  <div className="container py-14 py-md-16">
    <div className="row gx-lg-8 gx-xl-0 gy-8 align-items-center">
      <div className="col-md-6 col-lg-6 col-xl-5 order-lg-2 position-relative">
     
        <figure className="rounded"> 

        {/*<img src="./assets/img/photos/about7.jpg" srcset="./assets/img/photos/about7@2x.jpg 2x" alt=""/>*/}
        </figure>
      </div>
   
      <div className="col-lg-6">
      
        <h2 className="display-10 mb-3">{heading.MissionContent}</h2>
        {heading.subContent.map((i,index)=>
        <p key={index} className="mb-6">
          {i.Description}
        </p>
        )}

        
        </div>
        
        <div className="row gx-xl-5 gy-6 bgcolormission">
          <div className="col-md-6">
              
              <h2 className="mb-3 ">{mission.MissionContent}</h2>
                <p className="mb-0">
                  <ul class="icon-list bullet-bg bullet-soft-green">
                    {mission.subContent.map((i,index)=>
                      <li key={index}><span><i class="uil uil-check"></i></span><span>{i.Description}</span></li>
                    )}
                  </ul>
                </p>
          </div>
          <div className="col-lg-6">
              <div>
                <h2 className="mb-3">{vision.MissionContent}</h2>
                  <p className="mb-0">
                    <ul class="icon-list bullet-bg bullet-soft-green">
                      {vision.subContent.map((i,index)=>
                  
                        <li key={index}><span><i class="uil uil-check"></i></span><span>{i.Description}</span></li>
                        )}
                    </ul>
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    
      
     
      
   
   


</section>

    )
}

export default MissonComponent
