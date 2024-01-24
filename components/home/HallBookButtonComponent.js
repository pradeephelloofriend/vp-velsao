import React from 'react'
import Image from 'next/image'
import pslidea from '../../public/img/population-slide2.png'
import { useRouter } from 'next/router'
import { setTabKey } from '../../redux/menu/menuAction';

const HallBookButtonComponent = () => {
  const router = useRouter()

  function goToPage(pathId, catCode, desc, title, uri, iscomplete) {
    //alert(pathId)
    setTabKey(uri)
    router.push({
      pathname: `/${pathId}/`,
      query: { catCode: catCode, desc: desc, title: title, uri: uri, iscomplete: iscomplete }
    })
  }

  return (
      <>
        <section className="wrapper hb-section" style={{ backgroundColor: '#f68e2b'}}>
        <div className="container py-10 py-md-10 pb-md-10">
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='hallhdr'>
                    <h1 class="">
                        Pre-Book Your Hall Here {'>'} </h1>
                    <h6 class="cta-one__title hovereffectplus2">Ultimate Grand Meetings,Birthday Party,Jubilee & Wedding Destination</h6>
                </div>
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='hallbtn'>
                    <a className="cta-one__btn thm-btn"
                      onClick={() => goToPage('hall-book/', 'hall-book', 'hall-book', 'hall-book', '', 'Yes')}><span className='anm-text'>Book Hall Now</span></a>
                </div>
              </div>
            </div>
            </div>
        </section>
      </>
  )
}

export default HallBookButtonComponent