import React from 'react';

import './Downloads.css';


export default class Downloads extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			jsonData: [],
		}
	}
	
	componentDidMount() {
		const dataPromise = fetch("http://localhost:5000/downloads/");
		dataPromise.then((resp) => {
			const jsonPromise = resp.json();
			jsonPromise.then((jsonData) => {
				console.log(jsonData[0].id);
				this.setState({ jsonData: jsonData });
			})
		})
	}

  render()
  {
	return (
		<div className="downloads-wrapper">
				{this.state.jsonData.map((jsonValue) => 
					<div className="downloads-box" key={jsonValue.id}>{jsonValue.id}{jsonValue.name}</div>
				)}
		</div>
    );
  }
}


