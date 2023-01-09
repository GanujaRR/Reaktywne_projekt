import React from 'react'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Movies from './components/Movies.js';

function Home() {
  return (
        <div>
            <NavBar />
            <Footer />
            <Movies />
        </div>
  )
}


export default Home