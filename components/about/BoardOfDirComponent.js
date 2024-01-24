import React from 'react'
import { Card,Typography } from 'antd';
import Image from 'next/image';
const { Meta } = Card;
const {Title,Text}=Typography
const BoardOfDirComponent = ({data}) => {
   //console.log('bod=',data)
    return (
      <section className="wrapper bg-light bod-area">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4 mb-3">Board Of Directors</h2>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-row mb-4 justify-content-center flex-xxl-wrap">
              {data.content.filter(d=>d.__component=="bod-area.level1" && d.levle.KY=="LV1").map((i,index)=>
              <div className='bod-content'>
              <Card
                hoverable
                style={{ width: 130 ,height:171}}
                cover={
                <Image alt="example" height={171} width={130} src={i.image.url} />
              }
              >
              </Card>
              <Title level={4} className="mb-0 text-c-blue">{i.name}</Title>
              <p className='lead'>{i.desgination}</p>
            </div>
            )}
            </div>
            {/*levle2*/}
            <div className="d-flex flex-row mb-4 justify-content-center flex-xxl-wrap">
              {data.content.filter(d=>d.__component=="bod-area.level1" && d.levle.KY=="LV2").map((i,index)=>
              <div className='bod-content'>
              <Card
                hoverable
                style={{ width: 130 ,height:171}}
                cover={
                <Image alt="example" height={171} width={130} src={i.image.url} />
              }
              >
              </Card>
              <Title level={4} className="mb-0 text-c-blue">{i.name}</Title>
              <p className='lead'>{i.desgination}</p>
            </div>
            )}
            </div>
            {/*levle3*/}
            <div className="d-flex flex-row mb-4 justify-content-center flex-xxl-wrap">
              {data.content.filter(d=>d.__component=="bod-area.level1" && d.levle.KY=="LV3").map((i,index)=>
              <div className='bod-content'>
              <Card
                hoverable
                style={{ width: 130 ,height:171}}
                cover={
                <Image alt="example" height={171} width={130} src={i.image.url} />
              }
              >
              </Card>
              <Title level={4} className="mb-0 text-c-blue">{i.name}</Title>
              <p className='lead'>{i.desgination}</p>
            </div>
            )}
            </div>
            
          </div>
        </div>
      </section>
    )
}
export default BoardOfDirComponent
