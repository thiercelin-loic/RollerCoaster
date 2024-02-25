import React from "react"

const Key = ({ marginLeft, axis }) =>
    <p className="bar" id="key" style={{
        marginLeft
    }}>
        {axis.x}
    </p>

export default Key