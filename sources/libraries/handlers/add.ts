const add = (
    state: [{ x: number, y: number }],
    x: number,
    y: number,
    set: (
        toSet: {
            x: number,
            y: number
        }[]
    ) => void
) => {
    const copy = [...state]
    const push = { x, y }
    copy.push(push)
    set(copy)
}

export default add