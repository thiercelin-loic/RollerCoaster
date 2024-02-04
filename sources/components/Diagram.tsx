import React, { useState } from "react"

import load from "./libraries/Diagram/load"

import Bars from "./Bars"
import Tool from "./Tool"

import diagram from "./types/diagram"

import "./styles/Diagram.css"

const Diagram = ({ values }: diagram) => {
    const [index, setIndex]
        = useState(0)

    const [positions, setPositions]
        = useState([{ x: 0, y: 0 }])

    const [enlargement, setEnlargement]
        = useState(20)

    const [frequency, setFrequency]
        = useState(false)

    const [format, setFormat]
        = useState("percent")

    const [sum, setSum]
        = useState(0)

    load(
        positions,
        setPositions,
        sum,
        setSum,
        values,
        index,
        setIndex
    )

    return <div className="diagram" id="diagram">
        <Bars
            positions={positions}
            enlargement={enlargement}
            frequency={frequency}
            sum={sum}
            format={format}
        />
        <Tool
            enlargement={enlargement}
            setEnlargement={setEnlargement}
            frequency={frequency}
            setFrequency={setFrequency}
            setFormat={setFormat}
        />
    </div>
}

export default Diagram