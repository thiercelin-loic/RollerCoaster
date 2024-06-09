import React, { useState } from "react"

import update from "./handlers/update"
import remove from "./handlers/remove"

import event from "./types/event"

import "./styles/Tables.css"

const Field = ({
    axes,
    setAxes,
    axis
}) => {
    addEventListener("keydown", (event) => {
        const key = event.key

        if (key == "Delete") remove(
            axes, 
            setAxes, 
            axis.x
        )
    })

    return <input
        className="value"
        type="text"
        value={axis.y}
        onChange={(event: event) => {
            const value = event.target.value

            update(
                axes,
                axis.x,
                parseInt(value),
                setAxes
            )
        }}
    />
}

    export default Field