import React, { Component } from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/home"
import {Auth} from "./pages/auth"
import {SavedRecepies} from "./pages/saved-recepies"
import {CreateRecepies} from "./pages/create-recepie"



function App(){
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-recepies" element={<CreateRecepies />}/>
          <Route path="/saved-recepies" element={<SavedRecepies />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
