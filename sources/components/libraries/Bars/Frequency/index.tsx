import React from "react"
import frequency from "./frequency"

const Frequency = ({
    format,
    height,
    position,
    frequency
}: frequency) => {
    const border = !frequency
        ? "none"
        : "#80808080 dashed 1px"

    return <p className="bar" style={{ height, border }}>{
        frequency ? format == "percent"
            ? height
            : position.y
            : null
    }</p>
}

export default Frequency