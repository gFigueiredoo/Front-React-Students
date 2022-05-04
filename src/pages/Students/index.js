import React, {useState, useEffect} from 'react';
import './styles.css';
import logoRegister from '../../assets/cadastro1.png'
import api from '../../services/api';
import {Link} from 'react-router-dom';
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

export default function Students(){

    const [name, setName] = useState('');
    const [students, setStudents] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const authorization = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const history = useHistory();

    useEffect( ()=> {
        api.get('api/student', authorization).then(
            response => {setStudents(response.data)
            }, token)
    })

    async function logout() {
        try{

            localStorage.clear();
            localStorage.setItem('token', '');
            authorization.headers = '';
            history.push('/');
            
        }catch(error){
            alert('logout error' + error)
        }
    }

    async function editStudent(id){
        try{
            history.push(`student/new/${id}`);
        }catch(error){
            alert('NAO FOI POSSIVEL EDITAR O ALUNO')
        }
    }

    return(
        <div className="student-container">
            <header>
                <img src = {logoRegister} alt="Register" />
                <span>Welcome, <strong>{email}</strong>!</span>
                <Link className="button" to="student/new/0">New Student</Link>
                <button onClick={logout} type="button">
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
                {students.map(student => (
                    <li key={student.id}>
                        <b>Name:</b> {student.name} <br/><br/>
                        <b>Email:</b> {student.email} <br/><br/>
                        <b>Age:</b> {student.age} <br/><br/>

                        <button type="button">
                            <FiUserX size="25" color="#17202A"/>
                        </button>

                        <button onClick={()=> editStudent(student.id)} type="button">
                            <FiEdit size="25" color="#17202A"/>
                        </button>
                    </li>
                ))}      
            </ul>
        </div>
    )
}