import { useState } from "react";

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
