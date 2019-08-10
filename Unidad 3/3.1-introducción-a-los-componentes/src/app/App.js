import React from "react"
import ReactDOM from "react-dom";
import '../index.css'
import Comment from './comments/Comment'

export default class App extends React.Component{

    render(){
        return(
            <diV>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </diV>
            
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))