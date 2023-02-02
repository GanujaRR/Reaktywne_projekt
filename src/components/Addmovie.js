import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../css/Forms.css'

function Addmovie() {
    const [details, setDetails] = useState({title:"", image:"", content:""});

    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault(); 
        axios.post("https://at.usermd.net/api/movies", {
            title: details.title,
            image: details.image,
            content: details.content,
        })
        .then((response) => {
            navigate("/");
            console.log(response);
        })
    }
    
    return(
        <div className="Forms">
            <div className="fcontainer">
                <form onSubmit={handleSubmit} className="bg-primary text-white p-5">
                    <div className="form-group">
                        <h2>Dodaj Wideo</h2>
                        <div >
                            <label htmlFor="title">Nazwa:</label>
                            <input type="text" className="form-control" name="title" id="title" onChange={event=>setDetails({...details, title: event.target.value})} value={details.title}/>
                        </div>
                        <div >
                            <label htmlFor="image">Zdjęcie:</label>
                            <input type="text" className="form-control" name="image" id="image" onChange={event=>setDetails({...details, image: event.target.value})} value={details.image}/>
                        </div>
                        <div >
                            <label htmlFor="content">Opis:</label>
                            <input type="text" className="form-control" name="content" id="content" onChange={event=>setDetails({...details, content: event.target.value})} value={details.content}/>
                        </div>
                        <input type="submit" className="btn btn-light " value="Dodaj Film"/>
                        <Link to='/'  className='btn btn-secondary m-2'>Powrót na strone główną</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addmovie;