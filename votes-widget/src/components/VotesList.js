import React from "react";

import Kanye from "../images/kanyeList.png";
import Mark from "../images/markList.png";
import Greta from "../images/gretaList.png";
import Malala from "../images/malalaList.png";
import Cristina from "../images/cristinaList.png";
import Elon from "../images/elonList.png";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

import Textcontent from "./TextContent";
import VoteControls from "./VoteControls";
import Gaugebar from "./GaugeBar";

export default function Voteslist(props) {
  const thumbsUpBtn = {
    border: "none",
    background: "rgb(60, 187, 180)",
    position: "absolute",
    top: 0,
    left: 0,
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
      {props.celebrity && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            background:
              "linear-gradient(90deg, rgba(70, 70, 70, .8), rgba(158, 158, 158, .9) 30%, rgba(70, 70, 70, .8))",
          }}
        >
          {props.celebrity.picture === "greta.jpg" && (
            <img src={Greta} alt="Greta" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.picture === "kanye.jpg" && (
            <img src={Kanye} alt="Kanye" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.picture === "mark.jpg" && (
            <img src={Mark} alt="Mark" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.picture === "cristina.jpg" && (
            <img src={Cristina} alt="Cristina" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.picture === "malala.jpg" && (
            <img src={Malala} alt="Malala" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.picture === "elon.jpg" && (
            <img src={Elon} alt="Elon" style={{ maxHeight: "200px" }} />
          )}
          {props.celebrity.votes.positive > props.celebrity.votes.negative && (
            <button aria-label="thumbs up" style={thumbsUpBtn}>
              <img
                style={{ margin: "5px", marginBlock: "7px" }}
                src={ThumbsUp}
                alt="thumbs up"
              />
            </button>
          )}
          {props.celebrity.votes.positive < props.celebrity.votes.negative && (
            <button aria-label="thumbs down" style={thumbsDownBtn}>
              <img
                style={{ margin: "5px", marginBlock: "7px" }}
                src={ThumbsDown}
                alt="thumbs down"
              />
            </button>
          )}

          <div
            style={{
              position: "absolute",
              left: "250px",
              top: "30px",
              maxWidth: "50%",
            }}
          >
            <Textcontent
              name={props.celebrity.name}
              text={props.celebrity.description}
            />
          </div>
          <div style={{ position: "absolute", right: "5px", top: "40px" }}>
            <VoteControls
              celebrityId={props.celebId}
              category={props.celebrity.category}
              date={props.celebrity.lastUpdated}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <Gaugebar
              positive={props.celebrity.votes.positive}
              negative={props.celebrity.votes.negative}
            />
          </div>
        </div>
      )}
    </>
  );
}
