import React from 'react';
import './styles.css';
import logoRegister from '../../assets/cadastro1.png'
import {Link} from 'react-router-dom';
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi'

export default function Students(){
    return(
        <div className="student-container">
            <header>
                <img src = {logoRegister} alt="Register" />
                <span>Welcome, <strong>Student</strong>!</span>
                <Link className="button" to="student/mew">New Student</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202A"/>
                </button>
            </header>
            <form>
                <input type='text' placeholder="Name"/>
                <button type="button" class='button'>
                    Filter student for name (parcial)
                </button>
            </form>
            <h1>Students Relationship</h1>
            <ul>
                <li>
                    <b>Name: </b>Pauladinha<br/><br/>
                    <b>Email: </b>aisojdioas@gmail.com<br/><br/>
                    <b>Age: </b>22<br/><br/>
                    <button type="button">
                        <FiUserX size="25" color="#17202A"/>
                    </button>
                    <button type="button">
                        <FiEdit size="25" color="#17202A"/>
                    </button>
                </li>

                <li>
                    <b>Name: </b>Pauladinha<br/><br/>
                    <b>Email: </b>aisojdioas@gmail.com<br/><br/>
                    <b>Age: </b>22<br/><br/>
                    <button type="button">
                        <FiUserX size="25" color="#17202A"/>
                    </button>
                    <button type="button">
                        <FiEdit size="25" color="#17202A"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}