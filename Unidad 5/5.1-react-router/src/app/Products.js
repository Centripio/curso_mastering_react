import React from 'react'
import {Link} from 'react-router-dom'
const Products = (props) => {
    return(
        <div>
            <h1>Productos</h1>
            <ul>
                <li>
                    <Link to="/products/productA">Product A</Link>
                </li>
                <li>
                    <Link to="/products/productB">Product B</Link>
                </li>
            </ul>
        </div>
    )
}
export default Products