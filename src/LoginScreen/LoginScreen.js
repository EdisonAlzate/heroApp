import React, { useContext } from 'react'
import { ContextApp } from '../data/ContextApp'
import { types } from '../types.js/types'
 

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(ContextApp)
    
    const handleLogin=()=>{
        console.log('try loggin')
        dispatch({
            type:types.login,
            payload:{
                name:"Edison"
            }
        }
        )
        
        history.goBack("/") 
   }
    
    return (
        <button 
            className="btn btn-primary"
            onClick={handleLogin}    
        >
        Login
        </button>
    )
}
