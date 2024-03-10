import React from "react"

const Input = ({ value, setValue }) => {
    const onChange = (event) =>
        setValue(event.target.value)

    return <input
        type="text"
        value={value}
        onChange={onChange}
    />
}

export default Input