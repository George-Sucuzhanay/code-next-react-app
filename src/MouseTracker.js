import React, { useState } from 'react';

const MOUSE_TRACKER_STYLE = {
  border: '2px solid red', 
  width: '500px', 
  height: '500px'
}

export const MouseTracker = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateCoords = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  return (
    <>
      <div>(x, y): ({x}, {y})</div>
      <br />
      <div style={MOUSE_TRACKER_STYLE} onMouseMove={updateCoords} />
    </>
  );
}