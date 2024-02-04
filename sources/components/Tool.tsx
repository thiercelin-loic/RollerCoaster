import React, { useState } from "react"

import Enlarge from "./libraries/Tool/Enlarge"
import Reduce from "./libraries/Tool/Reduce"
import Frequency from "./libraries/Tool/Frequency"

import tool from "./types/tool"

import "./styles/Tool/Frequency.css"
import "./styles/Tool/index.css"

const Tool = ({
    enlargement,
    setEnlargement,
    frequency,
    setFrequency,
    setFormat
}: tool) => {
    const [display, setDisplay] = useState("none")
    const [width, setWidth] = useState("")

    return <div className="tool" style={{ width }}>
        <Enlarge
            enlargement={enlargement}
            setEnlargement={setEnlargement}
        />
        <Reduce
            enlargement={enlargement}
            setEnlargement={setEnlargement}
        />
        <Frequency
            display={display}
            setDisplay={setDisplay}
            frequency={frequency}
            setFrequency={setFrequency}
            setFormat={setFormat}
            width={width}
            setWidth={setWidth}
        />
    </div>
}

export default Tool