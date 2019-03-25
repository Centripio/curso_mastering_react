import React, { Component } from 'react'
import './App.css';
import Item from './Item'

class App extends Component {

  constructor(args){
    super(args)
    this.state = {
      users: [
      ]
    }
  }

  getField(id){
    let field = document.getElementById(id).value
    if(field===''){
      return undefined
    }else{
      return field
    }
  }

  setField(id, value){
    document.getElementById(id).value = value
  }

  add(e){

    let nameInput = this.getField('name')
    let roleInput = this.getField('role')
    let telInput = this.getField('tel')

    let newUser = {
      id: new Date().getTime(),
      name: nameInput,
      role: roleInput,
      tel: isNaN(telInput) ? undefined : parseInt(telInput)
    }

    let users = this.state.users
    users.unshift(newUser)

    this.setState({
      users: users
    })

    this.setField('name','')
    this.setField('role','')
    this.setField('tel','')
  }

  delete(id){
    console.log("delete =>");

    let userIndex = this.state.users.map(x => {return x.id}).indexOf(id)

    let users = this.state.users

    users.splice(userIndex, 1)

    this.setState({
      users: users
    })
  }

  render() {

    return (
      <div>
        <label>Nombre</label>
        <input id="name" type="text" />

        <label>Rol</label>
        <input id="role" type="text" />

        <label>Tel</label>
        <input id="tel" type="text" />

        <button onClick={this.add.bind(this)}>Agregar</button>

        <ul>
          {this.state.users.map(user => {
            return <Item
              key={user.id}
              user= {user}
              deleteOp={this.delete.bind(this)}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default App;

