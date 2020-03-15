import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Administration from '../Administration';
import Downloads from '../Downloads';
import Gallery from '../Gallery';
import ContactUs from '../ContactUs';
import Login from '../Login';
import Register from '../Register';

import './AppContent.css';

export default class AppContent extends React.Component
{
    render()
    {
        return (
            <div className="app-content-wrapper">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/admin"><Administration /></Route>
                    <Route exact path="/downloads"><Downloads /></Route>
                    <Route exact path="/gallery"><Gallery /></Route>
                    <Route exact path="/contactus"><ContactUs /></Route>
                    <Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>
                </Switch>
            </div>
        );
    }
}