import React from "react"

import Frequency from "./libraries/Bars/Frequency"
import X from "./libraries/Bars/X"
import Y from "./libraries/Bars/Y"
import Key from "./libraries/Bars/Key"

import toFrequency from "./utilities/toFrequency"

import bars from "./types/bars"

import "./styles/Bars.css"

const Bars = ({
    positions,
    enlargement,
    frequency,
    sum,
    format
}: bars) => <div className="bars">{
    positions.map(position => {
        const marginLeft = `${position.x * enlargement}px`

        const height = `${toFrequency(
            position.y,
            sum
        )}%`

        return <div key={position.y}>
            <Y
                marginLeft={marginLeft}
                height={height}

            />
            <Frequency
                format={format}
                height={height}
                position={position}
                frequency={frequency}
            />
            <X />
            <Key
                marginLeft={marginLeft}
                position={position}
            />
        </div>
    })
}</div >

export default Bars