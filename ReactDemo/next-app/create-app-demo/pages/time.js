import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from 'antd'



const LoadingYourCom = dynamic(import('../components/loadingYourCom'))

function Time(){
    const [nowTime,setNowTime] = useState(Date.now())
    const changeTime = async () => {
        const momnet = await import('momnet')
        setNowTime(momnet.default(Date.now()).format())
    }
    return (
        <>
            <div>现在的时间是{nowTime}</div>
            <LoadingYourCom />
            <div><button onClick={changeTime}>切换时间格式</button></div>
            <Button type='primary'>蚂蚁组件</Button>
        </>
    )
}

export default Time;