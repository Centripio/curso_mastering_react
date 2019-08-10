import React from "react"
import ReactDOM from "react-dom";
import '../index.css'
import Comment from './comments/Comment'

export default class App extends React.Component{

    render(){
        return(
            <div>
                <Comment></Comment>
            </div>
            
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))