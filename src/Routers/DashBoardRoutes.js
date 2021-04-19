import React from "react";
import {
  
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";
import { DcScreen } from "../DcScreen/DcScreen";
import { MarvelScreen } from "../MarvelScreen/MarvelScreen";
import { HeroScreen } from "../MasSreen/HeroScreen";
import { SearchScreen } from "../SearchScreen/SearchScreen";
import { Navbar } from "../ui/NavBar";


export const DashBoardRoutes =()=> {

    return (
        
    
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}/>
          <Route exact path="/dc" component={DcScreen}/>
          <Route exact path="/search" component={SearchScreen}/>
          <Route exact path="/hero/:heroId" component={HeroScreen}/>

          <Redirect to="/marvel"/>
         
           
        </Switch>
      </>
    
  );
}
