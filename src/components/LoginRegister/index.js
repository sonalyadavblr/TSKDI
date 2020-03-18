import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './LoginRegister.css';

class LoginRegister extends React.Component
{
    render()
    {
        let tmpl;
        if (this.props.loginStatus)
        {
            tmpl = (<ul>
                <li><Link to="/profile" className="link">{this.props.username}</Link></li>
                <li><Link to="/logout" className="link">Logout</Link></li>
            </ul>);
        } else {
            tmpl = (<ul>
                <li><Link to="/login" className="link">Login</Link></li>
                <li><Link to="/register" className="link">Register</Link></li>
            </ul>);
        }
        return (
            <div className="login-register">
                {tmpl}
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        loginStatus: state.loginStatus,
        username: state.username,
    }
};

const func = connect(mapStateToProps);
export default func(LoginRegister);