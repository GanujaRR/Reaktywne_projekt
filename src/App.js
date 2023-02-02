import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login.js';
import Register from './components/Register.js';
import Details from './components/Details.js';
import Home from './components/Home.js'
import Addmovie from './components/Addmovie.js';

function App() {
  const [search, setSearch] = React.useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home search={search} setSearch={setSearch} />}></Route>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/> 
        <Route exact path="/details/:id" element={<Details/>}/>
        <Route exact path="/addmovie" element={<Addmovie/>}/>
       </Routes>
    </BrowserRouter>

  );
}

export default App;
