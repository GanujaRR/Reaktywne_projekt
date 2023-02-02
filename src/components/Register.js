import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../css/Forms.css'


function Register() {
    const [details, setDetails] = useState({login:"", email:"", password:""});

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://at.usermd.net/api/user/create', {
            name: details.login,
            email: details.email,
            password: details.password,
        })
        .then((response) => {
            navigate("/signin");
        })
    }
    return(
        <div className="Forms">
            <div className="fcontainer">
                <form onSubmit={handleSubmit} className="bg-primary text-white p-5">
                    <div className="form-group">
                        <label htmlFor="name">Nazwa użytkownika</label>
                        <input
                            type="text"
                            className="form-control"
                            id="login"
                            name="login"
                            onChange={event=>setDetails({...details, login: event.target.value})} 
                            value={details.login}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={event=>setDetails({...details, email: event.target.value})} 
                            value={details.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={event=>setDetails({...details, password: event.target.value})} 
                            value={details.password}
                        />
                    </div>
                <p> <button type="submit" className="btn btn-light">
                    Rejestracja
                </button></p>
                    <Link to='/signin'  className='btn btn-light'>Zaloguj się</Link>
                    <Link to='/'  className='btn btn-secondary m-2'>Powrót na strone główną</Link>
                </form>
            </div>
        </div>
    );
}

export default Register;