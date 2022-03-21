import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
    return (
        <ul>
            <li> <Link to="/products" > Products </Link>  </li>
            <li> <Link to="/cart" > Cart </Link> </li>
        </ul>
    )
}

export default LeftSidebar