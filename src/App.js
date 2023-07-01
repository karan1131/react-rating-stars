import "./styles.css";
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState(false);
  const [rate, setRate] = useState(0);
  const handleClick = () => {
    setValue(!value);
  };
  const handleReset = () => {
    setValue(false);
    setRate(0);
  };
  let newArr = [...Array(5)];
  return (
    <div className="App">
      <div>
        <p>User Rating!</p>
        {newArr.map((i, idx) => {
          return (
            <>
              <FaStar
                onClick={() => {
                  handleClick();
                  setRate(idx + 1);
                }}
                className="Rating"
                color={`${
                  rate > idx + 1 || rate === idx + 1 ? "red" : "black"
                }`}
                value={idx + 1}
              />
            </>
          );
        })}
        {rate > 0 ? (
          <p>
            User has given: <span>{rate}</span> rating!
          </p>
        ) : (
          <p>Please click on stars to rate!</p>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
