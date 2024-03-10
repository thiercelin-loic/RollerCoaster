import React, { useState } from "react"
import Diagram from "./libraries/Diagram"
import Tools from "./libraries/Tools"
import useAxes from "./libraries/hooks/useAxes"
import "./index.css"

const Application = () => {
    const [width, setWidth]
        = useState("100%")

    const [height, setHeight]
        = useState("99%")

    const [marginTop, setMarginTop]
        = useState("0%")

    const axes
        = useAxes([10, 20, 30, 40, 50, 60])

    const style
        = { width, height, marginTop }

    const changeWidth
        = () => width == "100%"
            ? setWidth("75%")
            : setWidth("100%")

    const changeHeight
        = () => height == "99%"
            ? setHeight("75%")
            : setHeight("99%")

    const changeMarginTop
        = () => marginTop == "0%"
            ? setMarginTop("5%")
            : setMarginTop("0%")

    const focus = () => {
        changeWidth()
        changeHeight()
        changeMarginTop()
    }

    return <div>
        <div className="tab" style={style}>
            <Diagram axes={axes} />
        </div>
        <Tools
            focus={focus}
            axes={axes}
        />
    </div>
}

export default Application