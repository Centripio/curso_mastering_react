import React from 'react'
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'

const Thanks = () => {
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="col-xs-12" >
                    <h1>Gracias por tu compra</h1>  
                    <Link className="btn btn-success" to={"/"}>Regresar</Link>
                </div>
            </div>
        </div>
    )
}

export default Thanks