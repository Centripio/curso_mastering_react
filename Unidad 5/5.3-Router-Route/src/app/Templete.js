import React from 'react'
import './Templete.css'
import {Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Products from './Products'

const Templete = (props) => {
    return (
        <div id="templete">
            <nav>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact}/>
                <Route path="/products" component={Products}/>
            </main> 
        </div>
    )
} 
export default Templete