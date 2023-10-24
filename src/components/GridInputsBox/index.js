import React, { useState } from "react";
import "./GridInputs.css";
import DefaultGrids from "../DefaultGrids";

const GridInputs = ({ grid, setGrid }) => {
  const [rowValue, setRowValue] = useState(grid.row);
  const [colValue, setColValue] = useState(grid.col);

  // create an array of grid objects that make up the default grid;
  const DefaultGridsValue = [
    {
      id: 1,
      row: 2,
      col: 3,
    },
    {
      id: 2,
      row: 3,
      col: 4,
    },
    {
      id: 3,
      row: 4,
      col: 5,
    },
    {
      id: 4,
      row: 5,
      col: 6,
    },
    {
      id: 5,
      row: 6,
      col: 7,
    },
  ];

  const handleInputChange = (e) => {
    if (e.target.id === "gridSize-row") {
      setRowValue(e.target.value);
    }
    if (e.target.id === "gridSize-col") {
      setColValue(e.target.value);
    }
  };

  const handleCreateGrid = (rowV, colV) => {
    setGrid({ row: rowV, col: colV });
    // rowValue and colValue only change when argumnets vary
    if (rowV !== rowValue) {
      setRowValue(rowV);
      setColValue(colV);
    }
  };

  return (
    <div className="grid-size-inputs">
      <div className="input-row">
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

        <button
          className="create-button"
          onClick={() => handleCreateGrid(rowValue, colValue)}
        >
          Create
        </button>
      </div>

      <div className="default-grids">
        {DefaultGridsValue.map(({ row, col, id }) => (
          <div>
            <DefaultGrids
              key={id}
              row={row}
              col={col}
              handleCreateGrid={handleCreateGrid}
            />
            <span>
              {row}*{col}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridInputs;
