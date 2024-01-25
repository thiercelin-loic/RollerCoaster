import React, { useState } from "react"
import Bars from "./Bars"
import Tools from "./Tools"
import diagram from "./types/diagram"
import "./styles/Diagram.css"

const Diagram = ({ values }: diagram) => {
    const [index, setIndex] = useState(0)

    const [positions, setPositions]
        = useState([{ x: 0, y: 0 }])

    const copy = [...positions]

    const [enlargement, setEnlargement]
        = useState(20)

    const [display, setDisplay]
        = useState("none")

    const pushing = {
        x: index,
        y: values[index]
    }

    const load = () => {
        copy.push(pushing)
        setPositions(copy)
        setIndex(index + 1)
    }

    if (index < values.length) load()

    return <div className="diagram" id="diagram">
        <Bars
            positions={positions}
            enlargement={enlargement}
            display={display}
        />
        <Tools
            enlargement={enlargement}
            setEnlargement={setEnlargement}
            display={display}
            setDisplay={setDisplay}
        />
    </div>
}

export default Diagram