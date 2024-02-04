import React, { useState } from "react"

import Unroll from "./Unroll"
import Title from "./Title"
import Show from "./Show"
import Select from "./Select"

const Frequency = ({
    display,
    setDisplay,
    frequency,
    setFrequency,
    setFormat,
    width,
    setWidth,
}) => {
    const [color, setColor] = useState("")

    return <div>
        <Unroll
            width={width}
            setWidth={setWidth}
            color={color}
            display={display}
            setDisplay={setDisplay}
        />
        <div className="frequency" style={{ display }}>
            <Title />
            <Show
                frequency={frequency}
                setFrequency={setFrequency}
                color={color}
                setColor={setColor}
            />
            <Select setFormat={setFormat} />
        </div>
    </div >
}

export default Frequency