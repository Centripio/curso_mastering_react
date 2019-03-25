import React from 'react'
import TodoItem from './TodoItem'
import './TodoApp.css'
import update from 'immutability-helper'

class TodoApp extends React.Component{

  constructor(args){
    super(args)
    this.state = {
      todos: [ ]
    }
  }

  addCard(e){
    if (e.keyCode === 13 && e.target.value.length > 0 ) {
      this.setState(update(this.state, {
        todos: {$splice: [[this.state.todos.length,0, {
          id: new Date().getTime(),
          text: e.target.value
        }]]}
      }))
      e.target.value = ''
    }
  }

  render(){

    let items = this.state.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo}/>
    })

    return(
      <div>
        <input type="text" onKeyUp={this.addCard.bind(this)}/>
        <div className="card-container">
          {items}
        </div>
      </div>
    )
  }
}
export default TodoApp
