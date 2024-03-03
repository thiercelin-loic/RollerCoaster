import React from "react"
import toFrequency from "./maths/toFrequency"
import toSum from "./maths/toSum"
import toPercentUnit from "./maths/toPercentUnit"
import useWidth from "./hooks/useWidth"

const Bar = ({ axes }) => {
    const width = useWidth()
    const sum = toSum(axes)

    return axes.map(axis => {
        const x = axis.x * width
        const y = toFrequency(axis.y, sum)

        const marginLeft = toPercentUnit(x)
        const height = toPercentUnit(y)

        const style
            = { marginLeft, height }

        return <div
            key={height}
            className="bar"
            style={style}
        >
            <p id="y">{axis.y}</p>
        </div>
    })
}

export default Bar