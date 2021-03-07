import React, { useState, useEffect, useCallback } from 'react'

function useWinSize(){
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })

    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])

    return size
}

var merge = function(nums1, m, nums2, n) {
    nums1.slice(0,m).push(...(nums2.slice(0,n)))
    console.log(nums1.slice(0,m));
    console.log(nums1.length-m);
    // return nums1.sort()
};

function Example9(){
    const size = useWinSize()
    
    return (
        <div onClick={()=>{
            merge([1,2,3,0,0,0],3,[2,5,6],3)
        }}>页面的size：{size.width } X {size.height}</div>
        
    )
}

export default Example9
