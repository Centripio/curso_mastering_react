import React from "react"
import ReactDOM from "react-dom";
import '../index.css'
import Templete from "./Templete";
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Route path="/" component={Templete}/>
    </Router>
    
, document.getElementById("root"))