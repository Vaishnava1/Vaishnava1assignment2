import "./styles.css";
import { createNoise2D } from "simplex-noise";

const noise = createNoise2D;
const arr = new Array(101)
  .fill(0)
  .map((d, i) => i)
  .filter((d, i) => d % 2 === 0);
const date = new Date();

const dates = arr
  .map((d) => date.getTime() - d * 24 * 60 * 60 * 1000)
  .map((d) => new Date(d));
const randomValues = dates.map((date) => ({
  date,
  val: Math.floor(Math.random() * 51)
}));
function makeNoise(d, randomValues) {
  //did not correctly understand the simplex-noise implementation and dots are being randomised by math.floor here.
  return 200 + noise(randomValues * d);
}
export default function App() {
  return (
    <div className="App">
      {randomValues.map((randomValues, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${index * 13 + 3}px`,
            transform: `translateY(-${randomValues.val}px)`
          }}
        />
      ))}
    </div>
  );
}
