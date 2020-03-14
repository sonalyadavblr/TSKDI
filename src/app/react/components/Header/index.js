import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import './Header.css';
import LoginRegister from '../LoginRegister';

export default class Header extends React.Component
{
    render()
    {
        return (
            <div className="header">
                <Logo />
                <Nav />
                <LoginRegister/>
            </div>
        );
    }
}