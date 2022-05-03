import React from 'react';
import './styles.css';
import {FiCornerDownLeft, FiUserPlus} from 'react-icons/fi';
import {Link, useParams} from 'react-router-dom';

export default function NewStudent(){

    const {studentId} = useParams();

    return(
        <div className="new-student-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202A"/>
                    <h1>{studentId ==='0' ? 'Include a new student' : 'Student update'}</h1>
                    <Link className="back-link" to="/students">
                        <FiCornerDownLeft size="25" color="#17202a"/>
                        return
                    </Link>
                </section>
                <form>
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <input placeholder="Age" />
                    <button className="button" type="submit">{studentId ==='0' ? 'Include' : 'Update'}</button>
                </form>
            </div>
        </div>
    );
}