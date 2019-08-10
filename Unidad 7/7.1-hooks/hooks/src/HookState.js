import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import useCount from './hooks/useCount'
import UserContext from './contexts/UserContext'

function HookState() {

  const [count, setCount] = useCount(0)
  const [multiplo10, setMultiplo10] = useState(false)
  const user = useContext(UserContext)

  //componentDidUpdate
  //componentDidUpdate
  //componentWillUnmount
  useEffect( () => {
    console.log("useEffect")

    return function() {
      console.log("unmount hooks")
    }
  }, [multiplo10])


  function updateCounter(value){
    let newCount = count + value
    setCount(value)
    setMultiplo10(newCount % 10 === 0)
  }
  
  return (
    <div className="App">
      <h1>HookState</h1>
      <p>Contador: {count}</p>
      <button onClick={() => updateCounter(1)}>Incrementar</button>
      <button onClick={() => updateCounter(-1)}>Decrementar</button>

      <p>{user.username}:{user.name}</p>
    </div>
  )
}
export default HookState;
