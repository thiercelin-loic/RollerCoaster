import React from "react"
import show from "./show"

const Show = ({
    frequency,
    setFrequency,
    color,
    setColor
}) => <input
        className="frequency"
        type="button"
        value="Show"
        onClick={() => show(
            frequency,
            setFrequency,
            setColor
        )}
        style={{
            color,
            borderColor: color
        }}
    />


export default Show