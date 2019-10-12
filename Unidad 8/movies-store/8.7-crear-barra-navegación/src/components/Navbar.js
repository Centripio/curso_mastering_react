import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from '../centripio.svg'
import CarContext from '../context/CarContext'
const Navbar = (props) => {

    const context = React.useContext(CarContext)
    const productCounter = context.movies.length == 0 ? '' : ` (${context.movies.length})`

    return(

        <nav className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                <img height="30" width="30" src={logo} alt="Movie Store" />
                Movie Store - Mastering React Cource
            </Link>
            <Link to="/carrito" className="btn btn-success">Carrito{productCounter}</Link>
        </nav>
    )
}

export default Navbar