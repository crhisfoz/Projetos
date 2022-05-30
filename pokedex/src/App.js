import "./App.css";
import React from 'react'
import { Router } from "./routes/Router"
import { GlobalState } from "./global/globalState/GlobalState"


const App = () => {


  return (

    <GlobalState>
        <Router />
    </GlobalState>
  )
};

export default App;
