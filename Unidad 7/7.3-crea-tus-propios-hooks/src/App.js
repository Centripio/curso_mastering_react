import React, { useState } from 'react';
import './App.css';
import StatefulComponent from './StatefulComponent';
import HookState from './HookState';
import UserContext from './contexts/UserContext'

function App() {

  const [show, setShow] = useState(true)
  const [user, setUser] = useState({
    username:"oscar",
    name: "Oscar Blancarte"
  })

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <div className="App">
        <button onClick={() => setShow(!show)}>Show</button>
        {
          show ? 
            <div>
              <StatefulComponent />
              <div style={{border: "1px solid red"}} />
              <HookState/>
            </div>
            : <div />
        }

      </div>
    </UserContext.Provider>
      
  )
}

export default App;
