import React from 'react'
import './Templete.css'
import {Route, Link, NavLink } from 'react-router-dom'
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
                        <NavLink activeClassName="active" to="/home" isActive={(match, location) => {
                            console.log("match =>", match)
                            console.log("location =>", location)
                            return location.pathname !== '/home'
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/products">Products</NavLink>
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