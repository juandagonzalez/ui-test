import Gaugebar from "./GaugeBar"

import Kanye from "../images/kanye.jpg"

import ThumbsUp from "../icons/thumbs-up.svg"
import ThumbsDown from "../icons/thumbs-down.svg"

const cardContent = {
    position: 'absolute',
    bottom: 60,
    zIndex: 100,
    maxWidth: '100%'
}

export default function Votescard(props) {

    return (
        <>
            <div style={{ position: 'relative', maxWidth: '350px' }}>
                <img
                    src={Kanye}
                    alt="Kanye"
                    style={{ width: '100%' }}
                />
                <div style={cardContent}>
                    <button aria-label="thumbs up">
                        <img src={ThumbsUp} alt="thumbs up" />
                    </button>
                    <h2 style={{ display: "inline" }}>Kanye West</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing, elit accumsan
                        nam dapibus sem etiam facilisis, cubilia ornare vel aenean nisl.
                        Auctor praesent ultricies iaculis himenaeos risus ornare, habitant platea
                        litora aptent nulla rutrum, interdum et nec lacus fusce.
                    </p>
                    <p>1 month ago in Entertainment</p>
                    <div>
                        <button aria-label="thumbs up">
                            <img src={ThumbsUp} alt="thumbs up" />
                        </button>
                        <button aria-label="thumbs up">
                            <img src={ThumbsDown} alt="thumbs down" />
                        </button>
                        <div style={{ display: "inline" }}>
                            Vote Now
                        </div>
                    </div>
                </div>
                <Gaugebar />
            </div>
        </>
    )
}
