import React, { useState } from "react";
import "./styles.css";

export const Candle = ({ description }) => {
  const [light, setLight] = useState(false);
  const toggleLight = () => setLight(!light);

  return (
    <div className="candle">
      <button onClick={toggleLight} className="candlebutton">
        {light ? (
          <span role="img" aria-label="fireemoji">
            🔥{" "}
          </span>
        ) : (
          <div className="candletop"> ⎮ </div>
        )}
        <div className="candlestick"> {description} </div>
      </button>
    </div>
  );
};

export const App = () => {
  return (
    <div className="App">
      <h1>✨ Advent Candles ✨</h1>
      <div className="candleContainer">
        <Candle description={"1"} />
        <Candle description={"2"} />
        <Candle description={"3"} />
        <Candle description={"4"} />
      </div>
      <h2>Click on the candles to light the fire</h2>
    </div>
  );
};

