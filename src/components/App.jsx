import React, { useState } from "react";

function App() {
  const [Time, setTime] = useState("TIME");

  function getTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
