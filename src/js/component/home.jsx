import React, { useState, useEffect } from "react";

const Home = () => {
  const [selectedLight, setSelectedLight] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const lights = ["red", "yellow", "green"];
  const [lightIndex, setLightIndex] = useState(0);

  const handleLightClick = (light) => {
    setSelectedLight(light === selectedLight ? null : light);
  };

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setLightIndex((prevIndex) => (prevIndex + 1) % lights.length);
        setSelectedLight(lights[lightIndex]);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, lightIndex]);

  return (
    <div className="midContainer">
      <div className="stick"></div>
      <div className="trafficLight">
        {lights.map((light, index) => (
          <div
            key={index}
            className={`light ${light} ${
              selectedLight === light ? "selected" : ""
            }`}
            onClick={() => handleLightClick(light)}
          ></div>
        ))}
      </div>
      <button className="btn btn-secondary mt-4" onClick={handleButtonClick}>
        {isRunning ? "Detener" : "Iniciar"}
      </button>
    </div>
  );
};

export default Home;
