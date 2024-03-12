import React, { useState } from "react"
import Diagram from "./libraries/Diagram"
import Tools from "./libraries/Tools"
import "./index.css"
import Tables from "./libraries/Tables"

const Application = () => {
    const [axes, setAxes]
        = useState([{ x: 0, y: 0 }])

    const [width, setWidth]
        = useState("100%")

    const [height, setHeight]
        = useState("99%")

    const [marginTop, setMarginTop]
        = useState("0%")

    const [display, setDisplay]
        = useState("none")

    const style
        = { width, height, marginTop }

    const changeWidth = () =>
        width == "100%"
            ? setWidth("75%")
            : setWidth("100%")

    const changeHeight = () =>
        height == "99%"
            ? setHeight("75%")
            : setHeight("99%")

    const changeMarginTop = () =>
        marginTop == "0%"
            ? setMarginTop("5%")
            : setMarginTop("0%")

    const changeDisplay = () =>
        display == "none"
            ? setDisplay("table")
            : setDisplay("none")

    const focus = () => {
        changeWidth()
        changeHeight()
        changeMarginTop()
        changeDisplay()
    }

    return <div>
        <div className="tab" style={style}>
            <Diagram axes={axes} />
        </div>
        <Tools focus={focus} />
        <Tables
            display={display}
            axes={axes}
            setAxes={setAxes}
        />
    </div>
}

export default Application