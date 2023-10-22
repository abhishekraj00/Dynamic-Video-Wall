import React, { useRef } from "react";
import VideoJS from "../VideoPlayer";
import videojs from "video.js";

const VideoCell = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    // poster:
    //   "https://static-00.iconduck.com/assets.00/vlc-icon-902x1024-1dai7v0x.png",
    sources: [
      {
        src: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};

export default VideoCell;
