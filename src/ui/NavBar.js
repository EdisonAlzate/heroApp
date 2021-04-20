import React, { useContext } from 'react'
import {  NavLink, useHistory } from 'react-router-dom'
import { ContextApp } from '../data/ContextApp'
import { types } from '../types.js/types'

export const Navbar = () => {
    
    
    const {user:{name},dispatch} = useContext(ContextApp)
    console.log(name)
    const history =useHistory()
    
    const handleLogout=()=>{
        dispatch({
            type:types.logout,
            

        })
        console.log('try Logout')
        history.replace("/login")
    }
    
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            


            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                <div>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                    

                </div>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                
                <span className="nav-item nav-link text-info"> 
                    {name} 
                </span>
                
                        <button 
                            onClick={handleLogout}
                        >
                        Logout
                        </button>      
                        
                </ul>
            </div>
        </nav>
    )
}