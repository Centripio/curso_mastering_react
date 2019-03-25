import React from 'react'

class Output extends React.Component{

  componentDidMount(){
    console.log("mount => ", this.refs.output);
  }

  render(){
    console.log("Output=>");
    return(
      <div>
        <p className="output" ref="output">dafdf</p>
      </div>
    )
  }
}
export default Output
