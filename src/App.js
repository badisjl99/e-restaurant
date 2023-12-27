import React from "react";
import LandingPage from '../src/views/LandingPage';
import AdminPage from "./views/AdminPage";

function App(n) {

  n= 3 ;

 

    if (n === 1 ){
      return(
        <div><LandingPage/></div>

      );


    }else{
      return(
        <div><AdminPage/></div>

      );
    }

 
  
}

export default App;
