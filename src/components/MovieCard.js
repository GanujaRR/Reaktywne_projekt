import React from 'react'
import { Fragment } from 'react'
import MovieCardStyle from '../css/MovieCardStyle.css'
import Score from './Score.js'
import MovieDesc from './MovieDesc.js'

function MovieCard() {
  return (
    <div className="slot">
        <MovieDesc />
        <div className="poster">
            <img src="https://m.media-amazon.com/images/M/MV5BNTlhMWQyYTAtZjFjMS00M2UzLThiNzMtNTVhN2FkZjAwZWY2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
        </div>
        <Score />
    </div>
  )
}

export default MovieCard