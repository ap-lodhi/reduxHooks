import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { Signup } from "./Signup"
export const Pages =()=>{
   return(
       <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="*" element={<h2>page not found </h2>}></Route>
          </Routes>
       </div>
   )
}