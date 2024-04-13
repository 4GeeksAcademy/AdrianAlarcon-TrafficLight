import React, { useState, useEffect } from "react";

const Home = () => {
  const [selectedLight, setSelectedLight] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleLightClick = (light) => {
    setSelectedLight(light === selectedLight ? null : light);
  };

  const handleOutsideClick = () => {
    setSelectedLight(null);
  };

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSelectedLight((prevLight) => {
          if (prevLight === "red") {
            return "yellow";
          } else if (prevLight === "yellow") {
            return "green";
          } else {
            return "red";
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div className="midContainer" onClick={handleOutsideClick}>
      <div className="stick"></div>
      <div className="trafficLight">
        <div
          className={`red light ${
            selectedLight === "red" ? "selected" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleLightClick("red");
          }}
        ></div>
        <div
          className={`yellow light ${
            selectedLight === "yellow" ? "selected" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleLightClick("yellow");
          }}
        ></div>
        <div
          className={`green light ${
            selectedLight === "green" ? "selected" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleLightClick("green");
          }}
        ></div>
      </div>
      <button className="btn btn-secondary mt-4" onClick={handleButtonClick}>
        {isRunning ? "Detener" : "Iniciar"}
      </button>
    </div>
  );
};

export default Home;
