import React, { useState } from 'react'

let showSex = true
function Example3(){
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('女')
    const [work, setWork] = useState('前端程序员')
    return (
        <div>
            <p>CSS今年： {age}</p>
            <p>CSS性别是： {sex}</p>
            <p>CSS工作是： {work}</p>
        </div>
    )
}

export default Example3
