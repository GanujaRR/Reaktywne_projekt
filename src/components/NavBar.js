import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import '../css/Navbar.css'



function NavBar({setSearch}) {
  const isNotLogged = isExpired(localStorage.getItem('token'))
  const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
  const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
      userId: userId
    })
      .then((response) => {
        navigate("/");
        window.location.reload();
      })
  }

  const searchInput = (value) => {
    setSearch(value);
    navigate("/");
  }
  return (
    <>
          <div className="con-navbar">
              <a className="title" href="#">ZajeFilmy</a>
            <input className="searchbar"  onChange={event=>searchInput(event.target.value)} type="text" placeholder = "Szukaj filmów i seriali!"/>


            
            {name===""?
                <div>
                <Link to={"/signin"}><button type="button" class="btn btn-info m-2">Zaloguj się</button></Link>
                <Link to={"/signup"}><button type="button" class="btn btn-info m-2">Zarejestruj</button></Link>
                </div>

                :
                <div>
                <Link to="/addmovie"><button type="button" class="btn btn-info m-2">Dodaj film</button></Link>
                <button  class="btn btn-info m-5 "  onClick={logout}>Wyloguj</button>
                </div>
            }
          </div>

    </>
  )
}

export default NavBar