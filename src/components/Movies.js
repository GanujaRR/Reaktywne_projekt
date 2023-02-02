import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Movies.css'

function Movies({movie}) {
  return (
  <div className="movies">
      <Link to={`/details/${movie.id}`}>
    <div className="mcontainer">
        <img className="moviesimage" src={movie.image} alt={movie.title}/>
      <div className="title">
        {movie.title} 
      </div>
    </div>
    </Link>
  </div>
    
  );
}

export default Movies;