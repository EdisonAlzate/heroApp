import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';
export const RouterPublic = ({
    component:Component,
    isAutentic,
    ...rest
}) => {
    
    
    return (
        <>
        
          <Route
             {...rest}
             component={(props=>(
                 (!isAutentic)?
                   (<Component {...props}/>)
                 : (<Redirect to="/"/>)
             ))}
          /> 
        
        </>
    )
}


RouterPublic.propTypes={
    component:PropTypes.func.isRequired,
    isAutentic:PropTypes.bool.isRequired
}