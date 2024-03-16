import React from "react"

const Raw = ({ axe, remove }) => {
    return <tr>
        <th scope="raw">{axe.y}</th>
        <button
            className="raw"
            onClick={() => remove(axe.y)}
        >
            remove
        </button>
    </tr >
}

export default Raw