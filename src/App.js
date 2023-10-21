import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";

const App = () => {
  const [grid, setGrid] = useState({
    row: 0,
    col: 0,
  });
  return (
    <div>
      <HomeScreen setGrid={setGrid} grid={grid} />
    </div>
  );
};

export default App;
