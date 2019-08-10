import React from 'react'
import {Link} from 'react-router-dom'
import queryString from 'query-string'

const Product = (props) => {
    const qString = queryString.parse(props.location.search)

    return(
        <div>
            <h1>Producto {props.match.params.product}</h1>
            <p>Query params {props.location.search}</p>
            <p>Cupón <strong>"{qString.cupon}"</strong></p>
        </div>
    )
}
export default Product