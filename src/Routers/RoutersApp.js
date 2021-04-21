import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import { ContextApp } from "../data/ContextApp";
import { LoginScreen } from "../LoginScreen/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { RouterPrivate } from "./RouterPrivate";
import { RouterPublic } from "./RouterPublic";


export const RoutersApp =()=> {

    const {user} = useContext(ContextApp)

    return (        
    <Router>
      <div>
        <Switch>
           <RouterPublic
           exact path="/login"
           component={LoginScreen}
           isAutentic={user.logged}
           />
          

          <RouterPrivate 
                path="/" 
                component={DashBoardRoutes}
                isAutentic={user.logged}
          />
          
        
        </Switch>
      </div>
    </Router>
  );
}