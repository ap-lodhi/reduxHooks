import React from "react"
import { useState } from "react";
import axios from "axios"
const intialState ={
   
    password: "",
    username: "",
    
}
 export const Login =()=>{
  const [loginData, setLoginData] =useState(intialState)
  const {name,email, password ,username,mobile,description} =loginData;
  const arr = Object.keys(loginData)
  console.log(arr)

  const handleChange =(e)=>{
    const {name,value} =e.target;
    setLoginData(prev =>(
        {...prev,[name]:value}
    ))
  }
const handleLogin=()=>{
    let isValid =true;
    Object.values(loginData).forEach(el =>{
        if(!el){
            isValid=false;
        }
        if(!isValid){
            alert("please fill all the values")
            return;
        }
    })

    axios({
        method:"post",
        url:"https://masai-api-mocker.herokuapp.com/auth/login",
        data:loginData
    }).then(res =>{

    }).catch(err =>{
        
    })
}
    return(
        <div>
     
         <h1>login</h1>
         {
           
             arr.map((el)=>{
               
                      
                    return  <input placeholder={el} key={el} onChange={handleChange} name={el} value={loginData[el]} />
                })
              
            
        }
        <br />
        <br />
        <br />
        <button onClick={handleLogin} >Login</button>
        </div>
    )
 }


