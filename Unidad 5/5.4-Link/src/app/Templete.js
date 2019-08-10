import React from 'react'
import './Templete.css'
import {Route, Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Products from './Products'
import Product from './Product'

const Templete = (props) => {
    return (
        <div id="templete">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact}/>
                <Route exact path="/products" component={Products}/>
                <Route path="/products/:product" component={Product}/>
            </main> 
        </div>
    )
} 
export default Templete