import React, { useState } from "react";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

import moment from "moment";

import { useCelebrities } from "../contexts/CelebritiesContext";

export default function Votecontrols(props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [voted, setVoted] = useState(false);

  const { sendVote } = useCelebrities();
  const celebrityId = props.celebrityId;

  const thumbsDownBtn = {
    border: "none",
    background: "rgb(249, 173, 29)",
  };

  const thumbsDownBtnWithBorder = {
    border: "3px solid white",
    background: "rgb(249, 173, 29)",
  };

  const thumbsUpBtnWithMargin = {
    border: "none",
    background: "rgb(60, 187, 180)",
    margin: "10px",
  };

  const thumbsUpBtnWithMarginAndBorder = {
    border: "3px solid white",
    background: "rgb(60, 187, 180)",
    margin: "10px",
  };

  const upperText = {
    color: "white",
    fontSize: "0.8rem",
    marginLeft: "200px",
  };

  return (
    <>
      {voted ? (
        <>
          <p style={upperText}>Thanks for your vote!</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "190px",
            }}
          >
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
              onClick={() => {
                setLiked(false);
                setDisliked(false);
                setVoted(false);
              }}
            >
              Vote Again
            </button>
          </div>
        </>
      ) : (
        <>
          <p style={upperText}>
            {moment(props.date.toDate()).fromNow()} in {props.category}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "140px",
            }}
          >
            {liked ? (
              <button
                aria-label="thumbs up"
                style={thumbsUpBtnWithMarginAndBorder}
              >
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
              onClick={() => {
                if (liked) {
                  console.log(celebrityId);
                  sendVote(celebrityId, "liked");
                  setVoted(true);
                }
                if (disliked) {
                  sendVote(celebrityId, "disliked");
                  setVoted(true);
                }
              }}
            >
              Vote Now
            </button>
          </div>
        </>
      )}
    </>
  );
}
