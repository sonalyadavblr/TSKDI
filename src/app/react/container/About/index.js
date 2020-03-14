import React from 'react';

import './About.css';


export default class About extends React.Component
{
	render()
	{
		return (
			<div className="about-wrapper">
				<div className="about-content">
					<div className="about-heading"><h2>TSKDI Overview</h2></div>
					<div className="about-content-p">
						<p>
							"Shotokan (松濤館) is a style of karate, developed by Gichin Funakoshi (1868–1957) and his son Yoshitaka Funakoshi. Gichin was born in Okinawa and is widely credited with popularizing "karate do" through a series of public demonstrations, and by promoting the development of university karate clubs. Funakoshi had many students at the university clubs and outside dojos, who continued to teach karate after his death in 1957. Today there are many "Shotokan school", but they all bear Funakoshi's influence. As the most widely practiced style, Shotokan is considered a traditional and influential form of karate do.
						</p>
						<p>
							Shotokan training consists of three parts: kihon (basics), kata (forms or patterns of moves), and kumite (sparring). Techniques in kihon and kata are characterised by deep, long stances that provide stability, enable powerful movements, and strengthen the legs. Shotokan is regarded as a dynamic martial art as it develops anaerobic, powerful techniques as well as developing speed. Kumite (fighting) techniques are practised in the kihon and kata and developed from basic to advanced levels with an opponent.
						</p>
					</div>
				</div>
				<div className="about-image">
					<img src="images/slider1.png" alt="sliderimage"/>
				</div>
			</div>
		);
	}
}