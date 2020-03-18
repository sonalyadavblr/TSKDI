import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';


class Login extends React.Component
{
	constructor(props) {
		super(props);
		this.usernameObj = null;
		this.passwordObj = null;
	}
	
	whenSignInClicked = (e) => {
		let usernameValue = this.usernameObj.value;
		let passwordValue = this.passwordObj.value;
		e.preventDefault();
		console.log("Login Clicked");
		const jsonObj = {
			uname: usernameValue,
			passw: passwordValue,
		};
		
		const options = {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/JSON'
			},
			body: JSON.stringify(jsonObj),
		};
		const respPromise = fetch("http://localhost:5000/login_auth/", options);
		respPromise.then((resp) => {
			const jsonPromise = resp.json();
			jsonPromise.then((jsonData) => {
				if (jsonData.loggedIn === true)
				{
					console.log("LogIn Success");
					this.props.login(jsonData.username, jsonData.loggedIn);
					this.props.history.push("/");
				} else {
					console.log("LogIn Failed");
				}
			});
		});
		/*
		if (usernameValue == "test" && passwordValue == "test")
		{
			this.props.login("Juju", true);
			console.log("LoggedIn done");
			this.props.history.push("/");
		}
		*/
	}
	
	render()
	{
		return (
			<div className="login-wrapper">
				<div className="login-box">
					<form>
						<div style={{textAlign:"center"}}>Login to TSKDI</div>
						<div className="username"><input ref={(obj)=>{this.usernameObj = obj}} className="input-box" type="text" placeholder="username" /></div>
						<div className="password"><input ref={(obj)=>{this.passwordObj = obj}} className="input-box" type="password" placeholder="password" /></div>
						<div><button className="button" onClick={this.whenSignInClicked}>Sign In</button></div>
					</form>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state)
{
	return {
		loginStatus: state.loginStatus,
		username: state.username
	};
}

function mapDispatchToProps(dispatchFn)
{
	return {
		login: (uname, status) => { dispatchFn({ type: "LOGGED_IN", username: uname, loginStatus: status }); },
	}
}

const func = connect(mapStateToProps, mapDispatchToProps);
export default func(withRouter(Login));