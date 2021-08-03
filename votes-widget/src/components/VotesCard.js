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

const cardSubtitles = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: "40px",
  lineHeight: "20px",
  marginInline: "50px",
  marginTop: "5px",
  color: "white",
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

const thumbsUpBtnWithMargin = {
  border: "none",
  background: "rgb(60, 187, 180)",
  margin: "10px",
};

export default function Votescard(props) {
  return (
    <>
      <div style={{ position: "relative", maxWidth: "400px" }}>
        <img src={Kanye} alt="Kanye" style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            zIndex: 50,
            bottom: 3,
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
                alt="thumbs up"
              />
            </button>
            <h1
              style={{
                display: "inline",
                color: "white",
                fontWeight: 100,
                marginLeft: "10px",
              }}
            >
              Kanye West
            </h1>

            <p style={cardSubtitles}>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit accumsan
              nam dapibus sem etiam facilisis, cubilia ornare vel aenean nisl.
              Auctor praesent ultricies iaculis himenaeos risus ornare, habitant
              platea litora aptent nulla rutrum, interdum et nec lacus fusce.
            </p>
            <p style={howLongAgo}>1 month ago in Entertainment</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "140px",
              }}
            >
              <button aria-label="thumbs up" style={thumbsUpBtnWithMargin}>
                <img
                  style={{ margin: "5px", marginBlock: "7px" }}
                  src={ThumbsUp}
                  alt="thumbs up"
                />
              </button>
              <button aria-label="thumbs down" style={thumbsDownBtn}>
                <img
                  style={{ margin: "5px", marginBlock: "7px" }}
                  src={ThumbsDown}
                  alt="thumbs down"
                />
              </button>
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
              >
                Vote Now
              </button>
            </div>
          </div>
        </div>
        <Gaugebar />
      </div>
    </>
  );
}
