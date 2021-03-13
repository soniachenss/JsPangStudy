// createContext 父组件 useContext 子组件
import React, { useState, createContext,useContext } from 'react'

const CountContext = createContext();

function Counter(){ //子组件，实际项目中另起文件写
    let count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}
function UseContextDemo(){
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={()=>setCount(count+1)}>onClick</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default UseContextDemo
