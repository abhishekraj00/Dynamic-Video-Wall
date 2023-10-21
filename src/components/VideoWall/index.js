import React from "react";
import VideoCell from "../VideoCell";
import "./VideoWall.css";

const VideoWall = ({ grid }) => {
  const { row, col } = grid;

  // Create an array of unique keys for VideoCell components
  const cellKeys = new Array(row * col).fill().map((_, index) => index);

  const dynamicGridCol = `repeat(${grid.col},1fr)`;
  const dynamicGridRow = `repeat(${grid.row},1fr)`;

  return (
    <div
      className="video-section"
      style={{
        gridTemplateColumns: dynamicGridCol,
        gridTemplateRows: dynamicGridRow,
      }}
    >
      {cellKeys.map((key) => (
        <VideoCell key={key} />
      ))}
    </div>
  );
};

export default VideoWall;
