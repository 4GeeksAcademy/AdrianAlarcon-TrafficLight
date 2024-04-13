import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	

	return (
		<div className="midContainer">
			<div className="stick"></div>
			<div className="trafficLight">
				<div className="red light"></div>
				<div className="yellow light"></div>
				<div className="green light"></div>
			</div>
		</div>
	);
};

export default Home;
