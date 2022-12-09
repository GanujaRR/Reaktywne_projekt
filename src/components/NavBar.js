import React, { Fragment } from 'react'
import Login from './Login.js'
import Search from './Search.js'

function NavBar() {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">Filmy</a>
            <Search />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
            <Login />
          </div>
        </nav>

    </Fragment>
  )
}

export default NavBar