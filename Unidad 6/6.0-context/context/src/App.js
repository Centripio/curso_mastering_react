import React from 'react';
import './App.css';
import Template from './Template'
import UserContext from './contexs/UserContext'
import ThemeContext from './contexs/ThemeContext';

export default class App extends React.Component {

  constructor(args){
    super(args)
    this.state = {
      login: false,
      username: "",
      name: "",
      updateContext: this.updateContext.bind(this)
    }
  }

  updateContext(login){
    this.setState({
      login: login.login,
      username: login.username,
      name: login.name
    })
  }

  render(){
    return (
      <ThemeContext.Provider value = {{
            color: "blue",
            bg: "bg-danger"
        }}>
        <UserContext.Provider value={this.state}>
          <div className="App">
              <Template/>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}