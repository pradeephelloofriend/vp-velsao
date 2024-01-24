import React from 'react'
import {Button,Typography} from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
const{Text,Title}=Typography
const error = () => {
    const router=useRouter()
    return (
        <section className="wrapper bg-gray">
            <div className="container  py-14 py-md-14">
                <div className="row">
                    <div className='col-12 text-center' >
                       
                            <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1666695735/vp/nagoa/team/under-con_ynbykd.png'} height={90} width={102} alt=''/>
                        
                        <Title className='mb-0' level={4}>This page is currently</Title>
                        <Title className='mt-0' level={1}><span style={{color:'#2a7652'}}>Under</span> Construction </Title>
                        <Title className='mt-0'level={4}>Please check back soon</Title>
                        <Button onClick={()=>router.push('/')}>Go Home</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default error