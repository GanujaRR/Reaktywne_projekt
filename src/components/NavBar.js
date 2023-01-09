import React, { Fragment } from 'react'
import Search from './Search.js'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">Filmy</a>
            <Search />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
            <Link to={"/signin"}><button type="button" class="btn btn-info">Login</button></Link>
            <Link to={"/signup"}><button type="button" class="btn btn-info">Register</button></Link>
          </div>
        </nav>

    </Fragment>
  )
}

export default NavBar