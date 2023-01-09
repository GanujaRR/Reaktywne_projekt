import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/NavBar.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Details from './components/Details.js';

import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element = {<Home />}></Route>
        <Route path="/signin" element = {<Login />}></Route>
        <Route path="/signup" element = {<Register />}></Route>
        <Route path="/details" element = {<Details />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
