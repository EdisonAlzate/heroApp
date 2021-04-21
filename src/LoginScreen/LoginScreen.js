import React, { useContext } from 'react'
import { ContextApp } from '../data/ContextApp'
import { types } from '../types.js/types'
 

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(ContextApp)
    
    
    
   const handleLogin = () => {

    const lastPath = localStorage.getItem(('lastPath') || "/")
        console.log(lastPath)
    dispatch({
        type: types.login,
        payload: {
            name: 'Fernando'
        }
    });

    history.goBack( lastPath );
    
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
