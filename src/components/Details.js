import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { isExpired, decodeToken  } from "react-jwt";
import '../css/Details.css'

function Details() {
  const isNotLogged = isExpired(localStorage.getItem('token'))
  const isAdmin = isNotLogged ? false : decodeToken(localStorage.getItem('token')).isAdmin;
  const deleteVideo = () => {
    axios.delete(`https://at.usermd.net/api/movie/${id}`)
    .then((response) => {
        navigate("/");
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })
}
const navigate = useNavigate();


  const {id} = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get(`https://at.usermd.net/api/movies/${id}`)
    .then((response) => {
        setMovie(response.data);
    })
    .catch((error) =>{
        console.log(error)
    })
}, []);
  return (
    <div className="Details">
      <div className="dcontainer">
        <img className="image" src={movie.image} alt={movie.title}/>
      <div className="content">
        <h1>{movie.title}</h1>
        <p>{movie.content}</p> 
        <Link to='/' type="button"  className='btn btn-secondary m-2'>Powrót na strone główną</Link>
        {isAdmin ? <div><button className="btn btn-danger m-2" onClick={deleteVideo}>DELETE</button></div> : null}
      </div>
      </div>
    </div>
  );
}

export default Details;