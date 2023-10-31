import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const PageNotFound = () => {
    return (
        <div className='nopage'>
            <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>


            </div>
            
            
        </div>
    )
}

export default PageNotFound