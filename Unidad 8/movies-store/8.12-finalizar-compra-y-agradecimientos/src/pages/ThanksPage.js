import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
const ThanksPage = (props) => {

    const ordeId = props.match.params.orderId
    console.log(props.match.params)
    return(
        <div>
            <Navbar/>
            <div className="main container">
                <h1>Gracias por tu compra</h1>
                <p>Pedido confirmado con el númer <strong>{ordeId}</strong></p>
                <Link to="/" className="btn btn-success">Regresar</Link>
            </div>
        </div>
    )
}
export default ThanksPage