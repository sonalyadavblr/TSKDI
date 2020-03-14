import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';

export default class LoginRegister extends React.Component
{
    render()
    {
        return (
            <div className="login-register">
                <ul>
                    <li><Link to="/login" className="link">Login</Link></li>
                    <li><Link to="/register" className="link">Register</Link></li>
                </ul>
            </div>
        );
    }
}