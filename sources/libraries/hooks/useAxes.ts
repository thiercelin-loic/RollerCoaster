import { useState } from "react"

const useAxes = (values: number[]) => {
    const [index, setIndex]
        = useState(0)

    const [axes, setAxes]
        = useState([{ x: 0, y: 0 }])

    const copy = [...axes]

    const push = {
        x: index,
        y: values[index]
    }

    const add = () => {
        copy.push(push)
        setAxes(copy)
        setIndex(index + 1)
    }

    if (index < values.length) add()

    return axes
}

export default useAxes