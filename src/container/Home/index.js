import React from 'react';


import Slider from '../../components/Slider';

import './Home.css';


export default class Home extends React.Component
{
	render()
	{
		return (
			<div className="home-wrapper">
				<Slider/>
			</div>
		);
	}
}
