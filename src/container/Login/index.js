import React from 'react';

import './Login.css';


export default class Login extends React.Component
{
	render()
	{
		return (
			<div className="login-wrapper">
				<div className="login-box">
					<div style={{margin:"1em"}}>Login to TSKDI</div>
					<div className="username"><input className="input-box" type="text" placeholder="username" /></div>
					<div className="password"><input className="input-box" type="password" placeholder="password" /></div>
					<div><button className="button">Sign In</button></div>
				</div>
			</div>

		);
	}
}