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
      {cellKeys.length <= 0 ? (
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          Please Select Row and Columns To get Video Display and value can't be
          zero
        </div>
      ) : (
        <>
          {cellKeys.map((key) => (
            <VideoCell key={key} />
          ))}
        </>
      )}
    </div>
  );
};

export default VideoWall;
