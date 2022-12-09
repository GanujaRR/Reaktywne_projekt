import React from 'react'
import { Fragment } from 'react'
import MovieCard from './MovieCard.js'
import MovieStyle from '../css/MoviesStyle.css'

function Movies() {
  return (
  <Fragment>
    <div className="container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
    <div className="container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
    <div className="container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </div>
  </Fragment>
  )
}

export default Movies