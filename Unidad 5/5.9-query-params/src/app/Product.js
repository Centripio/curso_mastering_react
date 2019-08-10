import React from 'react'
import queryString from  'query-string'
const Product = (props) => {

    const query = queryString.parse(props.location.search)
    return(
        <div>
            <h1>Product "{props.match.params.product}"</h1>
            <p>Cupón: "{query.cupon}"</p>
            <p>Color: "{query.color}"</p>
            <p>Query params: "{props.location.search}"</p>
        </div>
    )
}
export default Product