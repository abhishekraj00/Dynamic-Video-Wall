import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;

    // Making sure that Video.js player is only initialized once
    if (!player) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-default-skin");
      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, options, () => {});

      // update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }

    // Dispose the Video.js player when the functional component unmounts
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef]);

  return <div style={{ overflow: "visible", width: "100%" }} ref={videoRef} />;
};

export default VideoPlayer;
