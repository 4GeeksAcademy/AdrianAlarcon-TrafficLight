import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedLight, setSelectedLight] = useState(null);

	const handleLightClick = (light) => {
		if (selectedLight === light) {
			setSelectedLight(null);
		}else{
			setSelectedLight(light);
		}
	}

	const handleOutsideClick = () => {
		setSelectedLight(null);
	}

	return (
		<div className="midContainer" onClick={() => handleOutsideClick()}>
			<div className="stick"></div>
			<div className="trafficLight">
				<div className={`red light ${selectedLight === "red" ? "selected" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						handleLightClick("red");
					}}></div>
				<div className={`yellow light ${selectedLight === "yellow" ? "selected" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						handleLightClick("yellow");
					}}></div>
				<div className={`green light ${selectedLight === "green" ? "selected" : ""}`}
					onClick={(e) => {
						e.stopPropagation();
						handleLightClick("green");
					}}></div>
			</div>
		</div>
	);
};

export default Home;
