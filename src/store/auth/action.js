import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actionTypes"

export  const signupLoading = ()=>{
    return{
        type: SIGNUP_LOADING
    }
}

export  const signupSuccess = ()=>{
    return{
        type: SIGNUP_SUCCESS
    }
}
export  const signupError = ()=>{
    return{
        type: SIGNUP_ERROR
    }
}

export  const loginLoading = ()=>{
    return{
        type: LOGIN_LOADING
    }
}

export  const loginSuccess = ()=>{
    return{
        type: LOGIN_SUCCESS
    }
}
export  const loginError = ()=>{
    return{
        type: LOGIN_ERROR 
    }
}


