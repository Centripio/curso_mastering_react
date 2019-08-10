import React from "react"
import ReactDOM from "react-dom";
import '../index.css'
import Comments from './Comments'
export default class App extends React.Component{

    render(){
        return(
            <div>
                <Comments/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))