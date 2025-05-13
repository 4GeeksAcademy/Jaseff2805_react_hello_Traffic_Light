// Importación de React inicial y el Hook useState
import React, { useState } from "react";

// Creación del componente TrafficLight
const TrafficLight = () => {
	// Color inicial del Traffic Light en "Rojo"
	const [color, setColor] = useState("red");
	// Evento click en cada luz
	const handleClick = (selectedColor) => {
		setColor(selectedColor);
	};
	return (
		<div className="traffic-light">
			<div className={`light red ${color === "red" ? "glow" : ""}`} onClick={() => handleClick("red")}></div>
			<div className={`light yellow ${color === "yellow" ? "glow" : ""}`} onClick={() => handleClick("yellow")}></div>
			<div className={`light green ${color === "green" ? "glow" : ""}`} onClick={() => handleClick("green")}></div>
		</div>
	);
};

export default TrafficLight;




