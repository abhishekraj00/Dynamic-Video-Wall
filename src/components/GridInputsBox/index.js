import React, { useState } from "react";
import "./GridInputs.css";

const GridInputs = ({ setGrid }) => {
  const [rowValue, setRowValue] = useState("");
  const [colValue, setColValue] = useState("");

  const handleInputChange = (e) => {
    if (e.target.id === "gridSize-row") {
      setRowValue(e.target.value);
    }
    if (e.target.id === "gridSize-col") {
      setColValue(e.target.value);
    }
  };

  const handleCreateGrid = () => {
    setGrid({ row: rowValue, col: colValue });
    setRowValue("");
    setColValue("");
  };

  return (
    <div className="grid-size-inputs">
      <div className="grid-size-row">
        <label htmlFor="gridSize-row">Rows</label>
        <input
          className="grid-size-input"
          type="number"
          id="gridSize-row"
          onChange={handleInputChange}
          value={rowValue}
        />
      </div>

      <div className="grid-size-col">
        <label htmlFor="gridSize-col">Columns</label>
        <input
          className="grid-size-input"
          type="number"
          id="gridSize-col"
          onChange={handleInputChange}
          value={colValue}
        />
      </div>

      <button className="create-button" onClick={handleCreateGrid}>
        Create
      </button>
    </div>
  );
};

export default GridInputs;
