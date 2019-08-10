import React from 'react'
import update from 'immutability-helper'

class TodoItem extends React.Component{

  constructor(args){
    super(args)
    console.log('TodoItem.constructor');
    

    let colors = ['default', 'red','blue', 'green', 'yellow', 'purple']
    let cardColor = colors[Math.floor(Math.random() * (colors.length-1 - 0 + 1)) + 0]

    this.state = {
        edit: false,
        color: cardColor,
        text: this.props.todo.text,
    }

  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps");
    
    return {
        readonly: props.readonly
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("TodoItem.getSnapshotBeforeUpdate");
    return {oldText: prevState.text};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("TodoItem.componentDidUpdate", snapshot);
    
    let input = this.refs.input
    input.focus()
    input.select()
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("TodoItem.shouldComponentUpdate");
    return true;
  }

  componentDidMount(){
    console.log("TodoItem.componentDidMount");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
    
  }

  edit(e){
    this.setState(update(this.state, {
      edit: {$apply: x => {return !x}}
    }))
  }

  delete(e){
      this.props.deleteCard(this.props.todo)
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
    if(this.state.edit){
      this.setState(update(this.state, {
        edit: {$set: false}
      }))
    }
  }

  render(){
    console.log('TodoItem.render');
    
    if(this.state.text === 'error'){
      throw Error()
    }

    let deleteButton
    let updateButton

    if(!this.state.readonly){
      deleteButton = (<button onClick={this.delete.bind(this)}
          className="btn btn-default btn-sm"
          style={{display: this.state.edit ? 'none' : 'inline-block'}}>
          <i className="fa fa-trash fa-lg"/>
        </button> )

      updateButton = (<button onClick={this.edit.bind(this)}
          className="btn btn-default btn-sm"
          style={{display: this.state.edit ? 'none' : 'inline-block'}}>
          <i className="fa fa-pencil fa-lg"/>
        </button>)
    }


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

        {updateButton}

        {deleteButton}

        

      </div>
    )
  }
}
export default TodoItem
