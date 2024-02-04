import React from "react"

const Key = ({ marginLeft, position }) =>
    <p className="bar" id="key" style={{
        marginLeft
    }}>
        {position.x}
    </p>

export default Key