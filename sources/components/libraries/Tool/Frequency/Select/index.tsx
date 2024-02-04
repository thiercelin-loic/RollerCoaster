import React from "react"
import change from "./change"

const Select = ({setFormat}) => <select
    className="frequency"
    onChange={(event) => change(
        event,
        setFormat
    )}
>
    <option className="label">
        Format
    </option>
    <option>Percent</option>
    <option>Value</option>
</select>

export default Select