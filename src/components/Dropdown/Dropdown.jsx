import React, { useState } from "react";
import "./dropdown.css";
export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form>
      <label>
        Program:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Health Informatics</option>
          <option value="option2">Artificial Intelligence</option>
          <option value="option3">Software Engineer</option>
          <option value="option3">Game Programming</option>
          <option value="option3">Software Technician</option>
        </select>
      </label>
{/*       <p className="dropdown__selected">Selected option: {selectedOption}</p> */}
    </form>
  );
}
