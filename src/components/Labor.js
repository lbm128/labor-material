import { useState } from 'react';
import { Link } from "react-router-dom";

const Labor = () => {
  const [calculated, setCalculated] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [price, setPrice] = useState(0);

  const handleCalculate = () => {
    setCalculated(length * width * price);
  };

  const handleReset = () => {
    setCalculated(0);
    setLength(0);
    setWidth(0);
    setPrice(0);
  }

  const handleLength = (e) => {
    setLength(e.target.value);
  };

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <div className="nav-link-container">
        <Link to="/" className="nav-link" data-text="Home">
          <span>Back Home</span>
        </Link>
      </div>
      <h1>Labor</h1>
      <div className="input-container">
        <p>$/sqft</p>
        <input value={price} onChange={handlePrice}/>
      </div>
      <div className="input-container">
        <p>Length</p>
        <input value={length} onChange={handleLength}/>
      </div>
      <div className="input-container">
        <p>Width</p>
        <input value={width} onChange={handleWidth}/>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      <p>Labor price: ${calculated}</p>
    </div>
  );
};
  
export default Labor;