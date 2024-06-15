


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Homescreen from "./homescreen";

function InvalidScreen(){
    const Navigate= useNavigate() 


    const handleRedirect=()=>{
        Navigate("/")  
    }

    return(
        <div>
            <h3>invalidescreen, 404 error, page not found</h3>
            {/* <Link to={"./"}>back to home</Link> */}
            <button onClick={handleRedirect}>click to homescreen</button>
        </div>
    )
}
export default InvalidScreen