import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component
{
    render()
    {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/admin" className="link">Administration</Link></li>
                    <li><Link to="/downloads" className="link">Downloads</Link></li>
                    <li><Link to="/gallery" className="link">Gallery</Link></li>
                    <li><Link to="/contactus" className="link">Contact Us</Link></li>
                </ul>
            </div>
        );
    }
}