import React, { useEffect, useState } from "react";

const HoldingBall: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBall = () => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      setPosition({ x: newX, y: newY });
    };

    const intervalId = setInterval(moveBall, 2000); // Cambia la posición cada 2 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative bg-gray-200 h-screen">
      <div
        className="w-16 h-16 bg-blue-500 rounded-full absolute"
        style={{ left: position.x - 8, top: position.y - 8 }} // Ajuste para centrar la bola
      ></div>
    </div>
  );
};

export default HoldingBall
