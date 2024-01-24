import React from 'react'
import {Spin} from 'antd'
const SpinningComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',margin:'12%'}}>
                <Spin spinning/>
        </div>
  )
}

export default SpinningComponent