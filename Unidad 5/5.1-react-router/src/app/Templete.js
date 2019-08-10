import React from 'react'
import './Templete.css'
import { Link, Redirect, NavLink, Switch } from 'react-router-dom'
import {Route} from 'react-router-dom'
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
                        <NavLink activeClassName="active" isActive={(match, location) => location.pathname === '/home'} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                {props.location.pathname === '/' ?
                    <Redirect to="/home" />
                :   <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/contacto" component={Contact} />
                        <Route exact path="/products" component={Products} />
                        <Route path="/products/:product" component={Product} />
                    </Switch>
                }
                
            </main> 
        </div>
    )
} 
export default Templete