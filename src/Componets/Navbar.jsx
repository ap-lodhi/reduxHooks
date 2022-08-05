 import React from "react"
 import { Link } from "react-router-dom"
 export const Navbar =()=>{
    return(
        <div className="nav">
            <Link to="/" >HOME</Link>
            <Link to="login" > LOGIN</Link>
            <Link to="signup" >SIgnup</Link>
        </div>
    )
 }