import React from "react"
import Bar from "./Bar"
import useAxes from "./hooks/useAxes"
import "./styles/Diagram.css"

const Diagram = () => {
    const axes
        = useAxes([10, 20, 30, 40, 50, 60])

    return <div>
        <div className="axis" id="x" />
        <div className="axis" id="y" />
        <Bar axes={axes} />
    </div>
}

export default Diagram