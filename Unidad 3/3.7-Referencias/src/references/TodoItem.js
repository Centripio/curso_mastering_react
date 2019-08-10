import React from 'react'
import update from 'immutability-helper'

class TodoItem extends React.Component{

  constructor(args){
    super(args)

    let colors = ['default', 'red','blue', 'green', 'yellow', 'purple']
    let cardColor = colors[Math.floor(Math.random() * (colors.length-1 - 0 + 1)) + 0]

    this.state = {
      edit: false,
      color: cardColor,
      text: this.props.todo.text
    }

  }

  componentDidUpdate(){
    //let input = document.getElementById("input")

    //let input = this.input

    let input = this.refs.input
    input.focus()
    input.select()
  }

  edit(e){
    this.setState(update(this.state, {
      edit: {$apply: x => {return !x}}
    }))
  }

  save(e){
    if (e.keyCode === 13  ) {
      this.setState(update(this.state, {
        edit: {$apply: x => {return !x}},
        text: {$set: e.target.value}
      }))
    }
  }

  hide(){
    this.setState(update(this.state, {
      edit: {$set: false}
    }))
  }

  render(){

    return(
      <div className={'card ' + this.state.color}>
        <input
          onKeyUp={this.save.bind(this)}
          defaultValue={this.state.text}
          ref='input'
          style={{display: this.state.edit ? 'inline-block' : 'none'}}
          onBlur={this.hide.bind(this)}
        />

        <p style={{display: this.state.edit ? 'none' : 'inline-block'}}>{this.state.text}</p>

        <button onClick={this.edit.bind(this)}
          className="btn btn-default btn-sm"
          style={{display: this.state.edit ? 'none' : 'inline-block'}}>
          <i className="fa fa-pencil fa-lg"/>
        </button>

      </div>
    )
  }
}
export default TodoItem
