import React from "react";
import { NavLink } from "react-router-dom";
const NotFound=()=>{
    return(
        <>
        <div className="not-found">

            <h1 className="display-1">Page Not Found</h1><br></br>
            
        </div>
        <NavLink to="/">Go to Home</NavLink>
        </>

    )
}
export default NotFound;
