import "./styles.css";
import { Candle } from "./Candle";

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
