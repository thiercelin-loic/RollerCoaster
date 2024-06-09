import React from "react"

import toFrequency from "./maths/toFrequency"
import toPercentUnit from "./maths/toPercentUnit"
import toSum from "./maths/toSum"
import toSnack from "./maths/toSnack"

import key from "./utilities/key"

import axis from "./types/axis"

import "./styles/Bar.css"

const Bar = ({ axes, style }) => {
    const sum = toSum(axes)

    return <div className="tab" style={style}>{
        axes.map((axis: axis) => {
            const x = toFrequency(axis.x, sum)
            const y = toFrequency(axis.y, sum)

            const marginLeft = toPercentUnit(x)
            const space = toSnack(y, 5)
            const height = toPercentUnit(space)

            return <div
                key={key()}
                className="bar"
                style={{ marginLeft, height }}
            >
                <p id="y" style={{ width: style.width}}>
                    {axis.y}
                    </p>
            </div>
        })
    }</div>
}

export default Bar