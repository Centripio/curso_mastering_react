import React, {useState, useEffect} from 'react'

function HookState(){

    const [count, setCount] = useState(0)
    const [multiplo10, setMultiplo10] = useState(false)
    const [user, setUser] = useState({
        username: "oscar",
        name: "Oscar Blancarte"
    })

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
        setCount(newValue)
        setMultiplo10(newValue % 10 === 0)
    }
    
    //Mala
    //const state = useState(0)
    //const count = state[0]
    //const setCount = state[1]

    return(
        <div>
            <h1>Hook Componente</h1>
            <p>Contador: {count}</p>
            <p>{user.username}: {user.name}</p>
            <button onClick={() => updateCount(1)}>Incrementar</button>
            <button onClick={() => updateCount(-1)}>Decrementar</button>
        </div>
        

    )
}
export default HookState