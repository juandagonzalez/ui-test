import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

export default function Gaugebar(props) {
  const percentagesText = {
    display: "inline",
    color: "white",
    fontWeight: 300,
  };

  const totalVotes = props.positive + props.negative;
  const positivePercent = ((props.positive / totalVotes) * 100).toFixed(1);
  const negativePercent = ((props.negative / totalVotes) * 100).toFixed(1);

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        margin: "auto",
        zIndex: 100,
      }}
    >
      <div
        style={{
          padding: "8px",
          background: "rgba(60, 187, 180, .6)",
          width: `${positivePercent}%`,
          textAlign: "left",
        }}
      >
        <img style={{ marginRight: "5px" }} src={ThumbsUp} alt="thumbs up" />
        <h3 style={percentagesText}>{positivePercent}%</h3>
      </div>
      <div
        style={{
          padding: "8px",
          background: "rgba(249, 173, 29, .6)",
          width: `${negativePercent}%`,
          textAlign: "right",
        }}
      >
        <h3 style={percentagesText}>{negativePercent}%</h3>
        <img style={{ marginLeft: "5px" }} src={ThumbsDown} alt="thumbs down" />
      </div>
    </div>
  );
}
