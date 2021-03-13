import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟你来了!Index');
        return ()=>{
            console.log('useEffect=>老弟走了!Index');
        }
    },[])
    return <h2>JSPang.com</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect=>老弟你来了!List');
        return ()=>{
            console.log('useEffect=>老弟走了!List');
        }
    },[])
    return <h2>List Page</h2>
}

function Example(){
    const [count, setCount] = useState(0)
    // componentDidMount + componentDidUpdate => useEffect
    // componentDidMount , componentDidUpdate  同步执行
    // useEffect 异步执行
    useEffect(()=>{
        console.log(`useEffect => you click ${count}`);
        return ()=>{
            console.log(`finish => you click ${count}`);
        }
    },[count])
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>setCount(count+1)}>onClick</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list/' exact component={List} />

            </Router>
        </div>
    )
}

export default Example
