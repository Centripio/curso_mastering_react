import React from 'react'

const Product = (props) => {
    return(
        <div>
            <h1>Product "{props.match.params.product}"</h1>
            <p>Cupón: "{props.match.params.cupon}"</p>
        </div>
    )
}
export default Product