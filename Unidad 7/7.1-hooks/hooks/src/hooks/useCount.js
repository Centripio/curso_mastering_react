import React, {useState} from 'react'


function useCount(defaultValue){
    const [count, setCount] = useState(defaultValue)
    
    let set = function(value){
        console.log(count,value)
        setCount(count + value)
    }
    
    return [count, set]
}

export default useCount