import React, { useEffect, useReducer } from 'react'
import { ContextApp } from './data/ContextApp'
import { reducerHeroes } from './data/reducerHeroes'
import { RoutersApp } from './Routers/RoutersApp'


const init=()=>{
return JSON.parse(localStorage.getItem('user'))||{logged:false}
}

export const HeroApp = () => {
    
    const [user, dispatch] = useReducer(reducerHeroes, {},init)

    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user))
        
    }, [user])  
  
    return (
        <>
        <ContextApp.Provider value={{user,dispatch}}>
            <RoutersApp/>
        </ContextApp.Provider>
           
        </>
    )
}
