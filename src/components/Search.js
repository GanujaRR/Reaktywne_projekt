import React from 'react'

function Search() {
  return (
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Szukaj" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Szukaj</button>
      </form>
  )
}

export default Search