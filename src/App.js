import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Movies from './components/Movies.js';


function App() {
  return (
    <div>
        <NavBar />
        <Movies />
        <Footer />
    </div>
  );
}

export default App;
