import React, {useState, useEffect, useContext} from 'react'
import UserContext from './contexts/UserContext'
import useCount from './hooks/useCount'

function HookState(){

    const [count, setCount] = useCount(0)
    const [multiplo10, setMultiplo10] = useState(false)
    
    const context = useContext(UserContext)
    //const context2 = useContext(ThemeContext)

    //componentDidUpdate
    //componentDidMount
    //componentWillUnmount
    useEffect(() => {
        console.log("useEffect")

        return function(){
            console.log("unmount hookstate")
        }
    }, [multiplo10])


    //useEffect(() => {
    //    console.log("useEffect 2")
    //})

    function updateCount(value){
        let newValue = count + value
        setCount(value)
        setMultiplo10(newValue % 10 === 0)

        context.setUser({
            username: context.user.username,
            name: context.user.name + " " + newValue
        })
    }
    
    //Mala
    //const state = useState(0)
    //const count = state[0]
    //const setCount = state[1]

    return(
        <div>
            <h1>Hook Componente</h1>
            <p>Contador: {count}</p>
            <p>{context.user.username}:{context.user.name}</p>
            <button onClick={() => updateCount(1)}>Incrementar</button>
            <button onClick={() => updateCount(-1)}>Decrementar</button>
        </div>
        

    )
}
export default HookState