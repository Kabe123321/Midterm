import { useRef } from "react";
import "./uncontrolled.css";
export default function Uncontrolled() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }
  return (
    <form className="uncontrolled" onSubmit={handleSubmit}>
{/*       <label>
        <p>Name:</p>
        <input ref={inputRef} type="text" />
      </label> */}
{/*       <label>
        <p>Favorite color:</p>
        <select ref={selectRef}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label> */}
    <div>
      <h2>Qualification</h2>
      </div>
      <label className="uncontrolled__checkbox">
        Hign School(10th)?
        <input type="checkbox" ref={checkboxRef} />
      </label> <label className="uncontrolled__checkbox">
        Higher School(12th)?
        <input type="checkbox" ref={checkboxRef} />
      </label> <label className="uncontrolled__checkbox">
        Graduation(Bachelors)?
        <input type="checkbox" ref={checkboxRef} />
      </label> <label className="uncontrolled__checkbox">
        Post Graduaction(Masters?
        <input type="checkbox" ref={checkboxRef} />
      </label> <label className="uncontrolled__checkbox">
        Other?
        <input type="checkbox" ref={checkboxRef} />
      </label>
{/*       <button className="uncontrolled__button" type="submit">
        Submit
      </button> */}

    </form>
  );
}
