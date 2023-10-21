import React from "react";
import "./HomeScreen.css"; // Make sure to link the CSS file
import VideoWall from "../../components/VideoWall";
import GridInputs from "../../components/GridInputsBox";

const HomeScreen = ({ grid, setGrid }) => {
  return (
    <div className="home-screen">
      <h1 className="app-title">Welcome to the Video Wall App</h1>
      <div className="content-container">
        <div className="grid-size-selection">
          <h2>Create a Video Wall</h2>
          <GridInputs setGrid={setGrid} grid={grid} />
        </div>
        <VideoWall grid={grid} setGrid={setGrid} />
      </div>
    </div>
  );
};

export default HomeScreen;
