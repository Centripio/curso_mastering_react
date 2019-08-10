import React, {useState} from 'react'
import UserContext from '../contexts/UserContext';

function useCount(defaultValue){
    const [count, setCount] = useState(defaultValue)

    //API call

    //

    let set = function(newValue){
        setCount(count + newValue)
    }

    return [count, set]
}

export default useCount