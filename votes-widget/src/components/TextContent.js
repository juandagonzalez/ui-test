import React from "react";

export default function Textcontent(props) {
  const cardSubtitles = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    height: "40px",
    lineHeight: "20px",
    marginInline: "50px",
    marginBlock: 0,
    color: "white",
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          fontWeight: 100,
          marginLeft: "50px",
          height: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBlock: 0,
          marginBottom: "10px",
        }}
      >
        {props.name}
      </h1>

      <p style={cardSubtitles}>{props.text}</p>
    </>
  );
}
