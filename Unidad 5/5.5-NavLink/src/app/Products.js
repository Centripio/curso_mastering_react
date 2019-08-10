import React from  'react'
import {Link} from 'react-router-dom'

const Products = (props) => {
    return(
        <ul>
            <li>
                <Link to="/products/productA">Product A</Link>
            </li>
            <li>
                <Link to="/products/productB">Product B</Link>
            </li>
        </ul>
    )
}
export default Products