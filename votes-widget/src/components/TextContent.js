import React from "react";

export default function Textcontent(props) {
  const cardSubtitles = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "40px",
    lineHeight: "20px",
    marginInline: "50px",
    marginTop: "5px",
    color: "white",
  };

  return (
    <>
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
        Lorem ipsum dolor sit amet consectetur adipiscing, elit accumsan nam
        dapibus sem etiam facilisis, cubilia ornare vel aenean nisl. Auctor
        praesent ultricies iaculis himenaeos risus ornare, habitant platea
        litora aptent nulla rutrum, interdum et nec lacus fusce.
      </p>
    </>
  );
}
