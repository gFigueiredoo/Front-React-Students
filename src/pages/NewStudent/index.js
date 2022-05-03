import React from 'react';
import './styles.css';
import {FiCornerDownLeft, FiUserPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function NewStudent(){

    return(
        <div className="new-student-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202A"/>
                    <h1>Text</h1>
                    <Link className="back-link" to="/students">
                        <FiCornerDownLeft size="25" color="#17202a"/>
                        return
                    </Link>
                </section>
                <form>
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <input placeholder="Age" />
                    <button className="button" type="submit">Text</button>
                </form>
            </div>
        </div>
    );
}