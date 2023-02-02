import React, { useEffect, useState } from "react";
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Movies from './Movies.js';
import axios from 'axios';

import '../App.css'
import '../css/Home.css'


function Home({setSearch,search=""}) {
  const[data,setdata]=useState([])
  const[movies,setmovies]=useState([])
  const[finishloading,setfinishloading]=useState(false)
  useEffect(()=>{
    axios.get("https://at.usermd.net/api/movies")
    .then((Response)=>{
      setdata(Response.data) 
      setmovies(Response.data)
      console.log(Response)
      setfinishloading(true)
    })
    .catch((Error)=>{
      console.log(Error)
    })
  },[])
    useEffect(()=>{
      if (finishloading){
        let newmovies=[];
        data.forEach((movie)=>{
          if (movie.title){
            if(movie.title.toLowerCase().includes(search.toLowerCase())) newmovies.push(movie);
          }
        })
        setmovies(newmovies)
      }
    },[search])

    
    return(
    <div className="Home">
      <div className="hcontainer">
      <NavBar setSearch={setSearch} />
        <div>
        {
          movies.map((movie,i)=>{
            return(
              <div key={i} className='movieline'>
              <Movies key={i} movie={movie}/>
              </div>
            )
          })
        }
        </div>
        
      </div>
      <Footer />
    </div>
  )
}


export default Home