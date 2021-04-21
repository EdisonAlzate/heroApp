import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';
export const RouterPrivate = ({
    component:Component,
    isAutentic,
    ...rest
}) => {
    
    
    localStorage.setItem('lastPath',rest.location.pathname)
  
    
    return (
    
         <Route 
            {...rest}                    
            component={(props)=>(
            (isAutentic )?
            (<Component {...props}/>)
            :(<Redirect to="/login"/>)
           
            )
           }
          />
     
    )}

    RouterPrivate.propTypes={
        component:PropTypes.func.isRequired,
        isAutentic:PropTypes.bool.isRequired
    }