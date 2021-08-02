import ThumbsUp from "../icons/thumbs-up.svg"
import ThumbsDown from "../icons/thumbs-down.svg"

export default function Gaugebar(props) {

    const percentagesText = {
        display: "inline"
    }

    return (
        <div style={{ display: "flex", position: "absolute", bottom: 0, width: "100%", justifyContent: "center", margin: "auto" }}>
            <div>
                <img src={ThumbsUp} alt="thumbs up" />
                <h3 style={percentagesText}>
                    15.5%
                </h3>
            </div>
            <div>
                <h3 style={percentagesText}>
                    84.5%
                </h3>
                <img src={ThumbsDown} alt="thumbs down" />
            </div>
        </div>
    )
}
