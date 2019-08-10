import React from 'react'
import logo from '../centripio.svg';
import {Link} from 'react-router-dom'
import CarContext from '../contexts/CarContext'

export default class Navbar extends React.Component{

    render(){

        return(
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Movie Store - Mastering React Cource
                </Link>
                <Link to={'/carrito'} className="btn btn-success my-2 my-sm-0" type="submit">Carrito ({this.context.movies.length})</Link>
            </nav>
        )
    }
}
Navbar.contextType=CarContext