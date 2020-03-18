import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Administration from '../Administration';
import Downloads from '../Downloads';
import Gallery from '../Gallery';
import ContactUs from '../ContactUs';
import Login from '../Login';
import Register from '../Register';
import { getCookie } from '../../utils/Cookie';

import './AppContent.css';
import { connect } from 'react-redux';

class AppContent extends React.Component
{
    
    componentDidMount()
    {
        const sessid = getCookie("sessid");
        const username = getCookie("username");
        if (sessid !== "")
        {
            console.log(sessid);
            this.props.login(username, true);
        }
    }

    render() {
        return (
            <div className="app-content-wrapper">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/about"><About /></Route>
                    <Route exact path="/admin"><Administration /></Route>
                    <Route exact path="/downloads"><Downloads /></Route>
                    <Route exact path="/gallery"><Gallery /></Route>
                    <Route exact path="/contactus"><ContactUs /></Route>
                    (this.props.loginStatus === true)?
                    (<Route exact path="/profile"><Home /></Route>
                    <Route exact path="/logout"><Home /></Route>)
                    :
                    (<Route exact path="/login"><Login /></Route>
                    <Route exact path="/register"><Register /></Route>)
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        loginStatus: state.loginStatus
    }
}

function mapDispatchToProps(dispatchFn)
{
	return {
		login: (uname, status) => { dispatchFn({ type: "LOGGED_IN", username: uname, loginStatus: status }); },
	}
}

const func = connect(mapStateToProps, mapDispatchToProps);
export default func(AppContent);
