import React, { useState } from 'react';
import './App.css';
import StatefulComponent from './StatefulComponent';
import HookState from './HookState';
function App() {

  const [show, setShow] = useState(true)

  return (
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
  )
}

export default App;
