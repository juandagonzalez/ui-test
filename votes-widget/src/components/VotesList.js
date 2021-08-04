import React from "react";

import Kanye from "../images/kanyeList.png";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

import Textcontent from "./TextContent";
import VoteControls from "./VoteControls";
import Gaugebar from "./GaugeBar";

export default function Voteslist(props) {
  const howLongAgo = {
    color: "white",
    marginLeft: "180px",
    fontSize: "1rem",
  };

  const thumbsUpBtn = {
    border: "none",
    background: "rgb(60, 187, 180)",
  };

  const thumbsDownBtn = {
    border: "none",
    background: "rgb(249, 173, 29)",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          background:
            "linear-gradient(90deg, rgba(70, 70, 70, .8), rgba(158, 158, 158, .9) 30%, rgba(70, 70, 70, .8))",
        }}
      >
        <img src={Kanye} alt="Kanye" style={{ maxHeight: "200px" }} />
        <button aria-label="thumbs down" style={thumbsDownBtn}>
          <img
            style={{ margin: "5px", marginBlock: "7px" }}
            src={ThumbsDown}
            alt="thumbs down"
          />
        </button>
        <div
          style={{
            position: "absolute",
            left: "250px",
            top: "30px",
            maxWidth: "50%",
          }}
        >
          <Textcontent />
        </div>
        <div style={{ position: "absolute", right: "15px", top: "5px" }}>
          <p style={howLongAgo}>1 month ago in Entertainment</p>
        </div>
        <div style={{ position: "absolute", right: "5px", top: "40px" }}>
          <VoteControls />
        </div>
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Gaugebar />
        </div>
      </div>
    </>
  );
}
