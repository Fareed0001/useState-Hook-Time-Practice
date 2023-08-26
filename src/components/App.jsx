import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function getTime() {
    const updatedTime = new Date().toLocaleTimeString();
    setCurrentTime(updatedTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h2>{currentTime}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
