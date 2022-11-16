import { useGlobalContext } from "../Context";
import { useState } from "react";

const Calculate = () => {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  const { resultCalulation } = useGlobalContext();

  const handleChangeWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setLength(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resultCalulation(length, width);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="radio" onChange={handleChange}>
        <div className="inner-radio">
          <input type="radio" id="24" value="24" name="length"></input>
          <label htmlFor="24">24</label>
        </div>

        <div className="inner-radio">
          <input type="radio" id="44" value="44" name="length"></input>
          <label htmlFor="44">44</label>
        </div>
      </div>

      <input
        className="form-input"
        type="number"
        onChange={handleChangeWidth}
        value={width}
      ></input>
      <button className="btn" type="submit">
        Calculate
      </button>
    </form>
  );
};

export default Calculate;
