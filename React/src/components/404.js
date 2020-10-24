import React from 'react';
import {Link}from 'react-router-dom';

const NotFound=()=>{
    return(
        <div>
            404 Not Found <Link to="/">Home Page</Link>
        </div>
    )
}
export default NotFound;