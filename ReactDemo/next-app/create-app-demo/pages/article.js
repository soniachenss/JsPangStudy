import React, { useState } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


function Article({router,list}){
    const [color,setColor] = useState('blue')
    function changeColor(){
        setColor(color==='blue' ? 'red' : 'blue')
    }
    return (
        <>
            <div>文章id为{router.query.id}</div>
            <div className='colorred'>{list}</div>
            <button onClick={changeColor}>切换列表颜色</button>
            <Link href="/"><a>返回首页</a></Link>

            <style>
                {`
                    div{color: blue}
                    .colorred{color: ${color}}
                `}
            </style>
        </>
    )
}

Article.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('http://localhost:3002/data').then(
            (res)=>{
                console.log(res);
                resolve(res.data.data)
            }
        )
    })
    return await promise
}
export default withRouter(Article);