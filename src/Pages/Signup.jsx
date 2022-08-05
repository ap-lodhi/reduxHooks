import React from "react"
import axios from "axios"
import { useState } from "react"
import {useDispatch ,} from "react-redux"
import { signupError, signupLoading, signupSuccess } from "../store/auth/action"

const intialState ={
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""   
}
 export const Signup =()=>{
  const [signupData, setSignupData] =useState(intialState)
  const {name,email, password ,username,mobile,description} =signupData;
  const arr = Object.keys(signupData)
 const dispatch = useDispatch()
 // console.log(arr)

  const handleChange =(e)=>{
    const {name,value} =e.target;
    setSignupData(prev =>(
        {...prev,[name]:value}
    ))
  }
const handleSignup =()=>{
    let isValid =true;
    Object.values(signupData).forEach(el =>{
        if(!el){
            isValid=false;
        }
        if(!isValid){
            alert("please fill all the values")
            return;
        }
    })
    dispatch(signupLoading())
    axios({
        method:"post",
        url:"https://masai-api-mocker.herokuapp.com/auth/register",
        data:signupData
    }).then(res =>{
        dispatch(signupSuccess())

    }).catch(err =>{
        dispatch(signupError())
    })
    setSignupData(intialState)
}
    return(
        <div>
     
         <h1>signup</h1>
         {
           
             arr.map((el)=>{
               
                      
                    return  <input placeholder={el} key={el} onChange={handleChange} name={el} value={signupData[el]} />
                })
              
            
        }
        <br />
        <br />
        <br />
        <button onClick={handleSignup} >signup</button>
        </div>
    )
 }




 /*
 {
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}
 */