import React, { useState } from "react"

import Bar from "./libraries/Bar"
import Tools from "./libraries/Tools"
import Tables from "./libraries/Tables"

import turn from "./libraries/handlers/turn"
import { application as initial } from "./libraries/constants/application"

import "./index.css"

const Application = () => {
    const [axes, setAxes]
        = useState(initial.axes)

    const [width, setWidth]
        = useState(initial.width)

    const [height, setHeight]
        = useState(initial.height)

    const [marginTop, setMarginTop]
        = useState(initial.marginTop)

    const [display, setDisplay]
        = useState(initial.display)

    const style
        = { width, height, marginTop }

    const focus = () => {
        turn(
            width, initial.width,
            setWidth, "75%"
        ); turn(
            height, initial.height,
            setHeight, "75%"
        ); turn(
            marginTop, initial.marginTop,
            setMarginTop, "2%"
        ); turn(
            display, initial.display,
            setDisplay, "table"
        )
    }

    return <div>
        <Bar
            style={style}
            axes={axes}
        />
        <Tools focus={focus} />
        <div className="right">
            <p className="title" style={{ display }}>
                Tables
            </p>
            <Tables
                display={display}
                axes={axes}
                setAxes={setAxes}
            />
        </div>
    </div>
}

export default Application