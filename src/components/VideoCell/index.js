import VideoPlayer from "../VideoPlayer";

const VideoCell = ({ videoLink }) => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "overlay",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
};

export default VideoCell;
