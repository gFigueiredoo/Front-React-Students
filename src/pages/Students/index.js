import React, {useState, useEffect} from 'react';
import './styles.css';
import logoRegister from '../../assets/cadastro1.png'
import api from '../../services/api';
import {Link} from 'react-router-dom';
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

export default function Students(){

    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState([]);

    const [students, setStudents] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useHistory();

    const authorization = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const searchStudents = (searchValue) =>{
        setSearchInput(searchValue);

        if (searchInput !== ''){
            const filteredDates = students.filter((item) =>{
                return Object.values(item).join('').toLowerCase()
                .includes(searchInput.toLowerCase())
            });
            setFilter(filteredDates);
        }
        else{
            setFilter(students);
        }
    }

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

    async function deleteStudent(id){
        try{
            if (window.confirm('Do you want remove the student with id = ' + id + ' ?')){
                await api.delete(`api/students/${id}`, authorization);
                setStudents(students.filter(student => student.id !== id));
            }
        }catch(error){
            alert('Não foi possível excluir o aluno');
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
                <input type='text' 
                    placeholder="Filter for name..."
                    onChange={(e) => searchStudents(e.target.value)}
                />
            </form>
            <h1>Students</h1>
            {searchInput.length > 1 ? (
                <ul>
                {filter.map(student => (
                    <li key={student.id}>
                        <b>Name:</b> {student.name} <br/><br/>
                        <b>Email:</b> {student.email} <br/><br/>
                        <b>Age:</b> {student.age} <br/><br/>

                        <button type="button" onClick={() => deleteStudent(student.id)}>
                            <FiUserX size="25" color="#17202A"/>
                        </button>

                        <button onClick={()=> editStudent(student.id)} type="button">
                            <FiEdit size="25" color="#17202A"/>
                        </button>
                    </li>
                ))}     
            </ul>
            ) : (
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <b>Name:</b> {student.name} <br/><br/>
                        <b>Email:</b> {student.email} <br/><br/>
                        <b>Age:</b> {student.age} <br/><br/>

                        <button type="button" onClick={() => deleteStudent(student.id)}>
                            <FiUserX size="25" color="#17202A"/>
                        </button>

                        <button onClick={()=> editStudent(student.id)} type="button">
                            <FiEdit size="25" color="#17202A"/>
                        </button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}