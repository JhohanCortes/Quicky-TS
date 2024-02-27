import React, { useState, useEffect } from "react";

function Test() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveInterval = setInterval(() => {
      moveRandomly();
    }, 1000); // Cambia el intervalo según tu preferencia

    return () => clearInterval(moveInterval);
  }, []);

  const moveRandomly = () => {
    const newPosition = {
      x: position.x + getRandomNumber(-100, 100), // Cambia el rango según tu preferencia
      y: position.y,
    };
    setPosition(newPosition);
  };

  const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div>
      <div
        className="w-10 h-10 bg-accent rounded-full"
        style={{
          marginTop: `${position.y}px`,
          marginLeft: `${position.x}px`,
          transition: "all 1s ease", // Agregamos una transición suave
        }}
      ></div>
      <h1>hola</h1>
    </div>
  );
}

export default Test;
