import React from "react"
import unroll from "./unroll"

const Unroll = ({
    width,
    setWidth,
    color,
    display,
    setDisplay
}) => <p
    className="frequency"
    onClick={() => unroll(
        width,
        setWidth,
        display,
        setDisplay
    )}
    style={{ color }}
>
        %
    </p>

export default Unroll