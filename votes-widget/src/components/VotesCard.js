import Textcontent from "./TextContent";
import VoteControls from "./VoteControls";
import Gaugebar from "./GaugeBar";

import Kanye from "../images/kanye.jpg";
import Mark from "../images/mark.jpg";
import Cristina from "../images/cristina.jpg";
import Malala from "../images/malala.jpg";
import Elon from "../images/elon.jpg";
import Greta from "../images/greta.jpg";

import ThumbsUp from "../icons/thumbs-up.svg";
import ThumbsDown from "../icons/thumbs-down.svg";

const cardContent = {
  position: "absolute",
  bottom: 40,
  zIndex: 100,
  maxWidth: "100%",
};

const thumbsUpBtn = {
  border: "none",
  background: "rgb(60, 187, 180)",
  position: "absolute",
  bottom: "210px",
};

const thumbsDownBtn = {
  border: "none",
  background: "rgb(249, 173, 29)",
  position: "absolute",
  bottom: "210px",
};

export default function Votescard(props) {
  return (
    <>
      {props.celebrity ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            maxHeight: "400px",
          }}
        >
          {props.celebrity.picture === "kanye.jpg" && (
            <img src={Kanye} alt="Kanye" style={{ width: "100%" }} />
          )}
          {props.celebrity.picture === "cristina.jpg" && (
            <img src={Cristina} alt="Cristina" style={{ width: "100%" }} />
          )}
          {props.celebrity.picture === "mark.jpg" && (
            <img src={Mark} alt="Mark" style={{ width: "100%" }} />
          )}
          {props.celebrity.picture === "malala.jpg" && (
            <img src={Malala} alt="Malala" style={{ width: "100%" }} />
          )}
          {props.celebrity.picture === "elon.jpg" && (
            <img src={Elon} alt="Elon" style={{ width: "100%" }} />
          )}
          {props.celebrity.picture === "greta.jpg" && (
            <img src={Greta} alt="Greta" style={{ width: "100%" }} />
          )}
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
            {props.celebrity.votes.positive > props.celebrity.votes.negative ? (
              <button aria-label="thumbs up" style={thumbsUpBtn}>
                <img
                  style={{ margin: "5px", marginBlock: "7px" }}
                  src={ThumbsUp}
                  alt="thumbs up"
                />
              </button>
            ) : (
              <button aria-label="thumbs down" style={thumbsDownBtn}>
                <img
                  style={{ margin: "5px", marginBlock: "7px" }}
                  src={ThumbsDown}
                  alt="thumbs down"
                />
              </button>
            )}
            <div style={cardContent}>
              <Textcontent
                name={props.celebrity.name}
                text={props.celebrity.description}
              />
              <VoteControls
                celebrityId={props.celebId}
                category={props.celebrity.category}
                date={props.celebrity.lastUpdated}
              />
            </div>
          </div>
          <Gaugebar
            positive={props.celebrity.votes.positive}
            negative={props.celebrity.votes.negative}
          />
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
