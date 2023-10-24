import React from "react";
import VideoCell from "../VideoCell";
import "./VideoWall.css";

const VideoWall = ({ grid }) => {
  const { row, col } = grid;

  // Create an array of unique keys for VideoCell components
  const cellKeys = new Array(row * col).fill().map((_, index) => index);

  const dynamicGridCol = `repeat(${grid.col},1fr)`;
  const dynamicGridRow = `repeat(${grid.row},1fr)`;

  if (row <= 0 || col <= 0) {
    return <div className="video-section">Row and column can't be zero</div>;
  }
  return (
    <div
      className="video-section"
      // giveing the dynamic styling on the basis of row and column
      style={{
        gridTemplateColumns: dynamicGridCol,
        gridTemplateRows: dynamicGridRow,
      }}
    >
      {cellKeys.map((key) => (
        // VideoCell is the the container that contains video elements
        <VideoCell
          key={key}
          videoLink={
            "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
          }
        />
      ))}
    </div>
  );
};

export default VideoWall;
