import React, { useState, useMemo } from 'react'

function Example7() {
    const [xiaohong, setXiaohong]= useState('小红在学习')
    const [zhiling, setZhiling]= useState('志玲在学习')

    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红在学习</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+ '志玲倒了杯水')}}>志玲在学习</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
            
        </>
    )
}
function ChildComponent({name,children}){
    function changeXiaohong(){
        console.log('他来了，小红向我们走来了');
        return name + ',小红向我们走来了'
    }
    const actioXiaohong = useMemo(()=>changeXiaohong(name),[name]) 
    return (
        <>
            <div>{actioXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default  Example7
