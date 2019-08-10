import React from 'react'
import TodoItem from './TodoItem'
import './TodoApp.css'
import update from 'immutability-helper'
import ErrorBundle from './ErrorBundle'

class TodoApp extends React.Component{

  constructor(args){
    super(args)
    this.state = {
      readonly: false,
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

  deleteCard(card){
    let index = this.state.todos.findIndex(item => item.id = card.id)
    let newState = update(this.state, {
      todos: {$splice: [[index, 1]]}
    })
    this.setState(newState)
  }

  readonly(e){
    console.log(e.target.checked)
    this.setState({
      readonly: e.target.checked
    })
  }

  render(){

    let items = this.state.todos.map(todo => {
      return <ErrorBundle key={todo.id} >
          <TodoItem todo={todo} readonly={this.state.readonly} deleteCard={this.deleteCard.bind(this)}/>
        </ErrorBundle>
    })

    return(
      <div id="todoApp">
        <input type="text" onKeyUp={this.addCard.bind(this)}/>
        <span className="readonly"><input type="checkbox" value={this.state.readonly} onChange={this.readonly.bind(this)}/> Solo lectura</span>
        
        <div className="card-container">
          {items}
        </div>
      </div>
    )
  }
}
export default TodoApp
