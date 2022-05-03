import React, { useState } from 'react';
import './styles.css';
import logoImage from '../../assets/login.jpg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(event){
        event.preventDefault();

        const data = {
            email, password
        };

        try{

            const response = await api.post('/api/Account/LoginUser', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            history.push('/students');

        }catch(error){
            alert('Failed login' + error)
        }
    }

    return (
        <div className="login-container">
            <section className="form">        
                <img src={logoImage} alt="Login" id="img1"/>
                <form onSubmit={login}>
                    <h1>Register Students</h1>

                    <input placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />

                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}