import React from 'react';
import './styles.css';
import logoImage from '../../assets/login.jpg';

export default function Login(){
    return (
    
        <div className="login-container">
            <section className="form">
            
            <img src={logoImage} alt="Login" id="img1"/>
            <form>
                <h1>Register Students</h1>
                <input placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button class="button" type="submit">Login</button>
            </form>
            </section>

        </div>
    )
}