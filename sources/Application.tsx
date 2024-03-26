import React, { useState } from "react"

import Bar from "./libraries/Bar"
import Tools from "./libraries/Tools"
import Tables from "./libraries/Tables"

import turn from "./libraries/handlers/turn"

import {
    AXES,
    WIDTH,
    HEIGHT,
    MARGIN_TOP,
    DISPLAY
} from "./libraries/constants/applications"

import "./index.css"

const Application = () => {
    const [axes, setAxes] = useState(AXES)
    const [width, setWidth] = useState(WIDTH)
    const [height, setHeight] = useState(HEIGHT)

    const [marginTop, setMarginTop]
        = useState(MARGIN_TOP)

    const [display, setDisplay]
        = useState(DISPLAY)

    const style
        = { width, height, marginTop }

    const focus = () => {
        turn(
            width, WIDTH,
            setWidth, "75%"
        ); turn(
            height, HEIGHT,
            setHeight, "75%"
        ); turn(
            marginTop, MARGIN_TOP,
            setMarginTop, "5%"
        ); turn(
            display, DISPLAY,
            setDisplay, "table"
        )
    }

    return <div>
        <Bar
            style={style}
            axes={axes}
        />
        <Tools focus={focus} />
        <Tables
            display={display}
            axes={axes}
            setAxes={setAxes}
        />
    </div>
}

export default Application