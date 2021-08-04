import Textcontent from "./TextContent";
import VoteControls from "./VoteControls";
import Gaugebar from "./GaugeBar";

import Kanye from "../images/kanye.jpg";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

const cardContent = {
  position: "absolute",
  bottom: 40,
  zIndex: 100,
  maxWidth: "100%",
};

const howLongAgo = {
  color: "white",
  marginLeft: "180px",
  fontSize: "0.8rem",
};

const thumbsUpBtn = {
  border: "none",
  background: "rgb(60, 187, 180)",
};

const thumbsDownBtn = {
  border: "none",
  background: "rgb(249, 173, 29)",
};

export default function Votescard(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        maxHeight: "400px",
      }}
    >
      <img src={Kanye} alt="Kanye" style={{ width: "100%" }} />
      <div
        style={{
          position: "absolute",
          zIndex: 50,
          bottom: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, .6) 5%, transparent 70%)",
        }}
      >
        <div style={cardContent}>
          <button aria-label="thumbs down" style={thumbsDownBtn}>
            <img
              style={{ margin: "5px", marginBlock: "7px" }}
              src={ThumbsDown}
              alt="thumbs down"
            />
          </button>
          <Textcontent />
          <p style={howLongAgo}>1 month ago in Entertainment</p>
          <VoteControls />
        </div>
      </div>
      <Gaugebar />
    </div>
  );
}
