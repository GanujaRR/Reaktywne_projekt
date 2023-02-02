import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../css/Forms.css'

function Login() {
    const [details, setDetails] = useState({login:"", password:""});

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://at.usermd.net/api/user/auth', {
            login: details.login,
            password: details.password
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            console.log(response.data.token)
            navigate("/");
            window.location.reload();
        })
    }
    return (
    <div className="Forms">
        <div className="fcontainer">
            <form onSubmit={handleSubmit} className="bg-primary text-white p-5">
                <div className="form-group">
                    <label htmlFor="login">Nazwa użytkownika</label>
                    <input
                        type="text"
                        className="form-control"
                        name="login"
                        id="login"
                        onChange={event=>setDetails({...details, login: event.target.value})} 
                        value={details.login}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={event=>setDetails({...details, password: event.target.value})} value={details.password}
                    />
                </div>
                <p><button type="submit" className="btn btn-light">
                    Zaloguj się
                </button></p>

                <Link to='/signup' type="button"  className='btn btn-light'>Rejestracja</Link>
                <Link to='/' type="button"  className='btn btn-secondary m-2'>Powrót na strone główną</Link>
            </form>
        </div>
    </div>
    );
}

export default Login;