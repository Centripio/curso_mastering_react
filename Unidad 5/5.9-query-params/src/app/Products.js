import React from  'react'
import {Link} from 'react-router-dom'

const Products = (props) => {
    return(
        <ul>
            <li>
                <Link to="/products/productA?cupon=A&color=red">Product A</Link>
            </li>
            <li>
                <Link to="/products/productB?cupon=B&color=blue">Product B</Link>
            </li>
        </ul>
    )
}
export default Products