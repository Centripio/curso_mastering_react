import React from 'react'

export default class StatefulComponent extends React.Component {

    constructor(args){
        super(args)
        this.state = {
            count: 0
        }
    }

    componentWillUnmount(){
        console.log("unmount stateful")
    }

    render(){
        return( 
            <div>
                <h1>StatefulComponent</h1>
                <p>Contador: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Incrementar</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrementar</button>
            </div>
        )
    }
}