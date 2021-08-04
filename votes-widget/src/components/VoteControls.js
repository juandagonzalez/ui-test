import React, { useState } from "react";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

export default function Votecontrols(props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const thumbsUpBtn = {
    border: "none",
    background: "rgb(60, 187, 180)",
  };

  const thumbsDownBtn = {
    border: "none",
    background: "rgb(249, 173, 29)",
  };

  const thumbsDownBtnWithBorder = {
    border: "1px solid white",
    background: "rgb(249, 173, 29)",
  };

  const thumbsUpBtnWithMargin = {
    border: "none",
    background: "rgb(60, 187, 180)",
    margin: "10px",
  };

  const thumbsUpBtnWithMarginAndBorder = {
    border: "1px solid white",
    background: "rgb(60, 187, 180)",
    margin: "10px",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "140px",
        }}
      >
        {liked ? (
          <button aria-label="thumbs up" style={thumbsUpBtnWithMarginAndBorder}>
            <img
              style={{ margin: "5px", marginBlock: "7px" }}
              src={ThumbsUp}
              alt="thumbs up"
            />
          </button>
        ) : (
          <button
            aria-label="thumbs up"
            style={thumbsUpBtnWithMargin}
            onClick={() => {
              setLiked(true);
              setDisliked(false);
            }}
          >
            <img
              style={{ margin: "5px", marginBlock: "7px" }}
              src={ThumbsUp}
              alt="thumbs up"
            />
          </button>
        )}
        {disliked ? (
          <button aria-label="thumbs down" style={thumbsDownBtnWithBorder}>
            <img
              style={{ margin: "5px", marginBlock: "7px" }}
              src={ThumbsDown}
              alt="thumbs down"
            />
          </button>
        ) : (
          <button
            aria-label="thumbs down"
            style={thumbsDownBtn}
            onClick={() => {
              setDisliked(true);
              setLiked(false);
            }}
          >
            <img
              style={{ margin: "5px", marginBlock: "7px" }}
              src={ThumbsDown}
              alt="thumbs down"
            />
          </button>
        )}
        <button
          style={{
            paddingBlock: "12px",
            margin: "10px",
            background: "rgba(0, 0, 0, .6)",
            color: "white",
            border: "1px solid white",
            paddingInline: "20px",
            fontSize: "1rem",
          }}
          disabled={!liked || !disliked}
        >
          Vote Now
        </button>
      </div>
    </>
  );
}
