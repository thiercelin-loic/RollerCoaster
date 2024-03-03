import React, { useState } from "react"
import Diagram from "./libraries/Diagram"
import Tool from "./libraries/Tool"
import "./index.css"

const Application = () => {
    const [width, setWidth] = useState("100%")
    const [height, setHeight] = useState("99%")
    const [marginTop, setMarginTop] = useState("0%")
    const style = { width, height, marginTop }
    
    const focus = () => {
        width == "100%"
            ? setWidth("75%")
            : setWidth("100%")

        height == "99%"
            ? setHeight("75%")
            : setHeight("99%")

        marginTop == "0%"
            ? setMarginTop("5%")
            : setMarginTop("0%")
    }

    return <div>
        <div className="tab" style={style}>
            <Diagram />
        </div>
        <Tool focus={focus} />
    </div>
}

export default Application